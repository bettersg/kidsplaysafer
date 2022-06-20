import { useState, useCallback } from "react";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import NamePanel from "../../components/NamePanel";
import AvatarPanel from "../../components/AvatarPanel";
import AboutPanel from "../../components/AboutPanel";
import QuestionPanel from "../../components/QuestionPanel";
import SharePanel from "../../components/SharePanel";
import SubscriptionPanel from "../../components/SubscriptionPanel";

import AVATARS from "../../../constants/avatars";

const STEPS = {
  ABOUT_PANEL: 0,
  CHILD_NAME: 1,
  CHILD_AVATAR: 2,
  PARENT_NAME: 3,
  PARENT_AVATAR: 4,
  QUESTIONS: 5,
  SHARE_PANEL: 100,
  SHARE_PAGE: 101,
};

const Start = () => {
  const [step, setStep] = useState(STEPS.ABOUT_PANEL);
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");
  const [childAvatar, setChildAvatar] = useState("");
  const [parentAvatar, setParentAvatar] = useState("");
  const previousStep = useCallback(() => setStep((step) => step - 1), []);
  const [level1QuestionsSnapshot, loading] = useCollection(
    collection(db, "content/level1/questions")
  );
  const nextStep = useCallback(
    () =>
      setStep((step) => {
        const lastQuestionIndex =
          STEPS.QUESTIONS + level1QuestionsSnapshot?.docs?.length - 1;
        if (step === lastQuestionIndex) return STEPS.SHARE_PANEL;
        else return step + 1;
      }),
    [level1QuestionsSnapshot]
  );
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = useCallback(() => {
    setIsSubscribed(true);
  }, []);
  return (
    <Box
      sx={{
        padding: { xs: "0px 8px", sm: "0px 16px", md: "0px 24px" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {step === STEPS.CHILD_NAME && (
        <NamePanel
          title="Hi, little one,"
          name={childName}
          onChange={setChildName}
          onNext={() => !!childName && nextStep()}
          onPrevious={previousStep} //added in so that player can move back to instruction page is they want
        />
      )}
      {step === STEPS.CHILD_AVATAR && (
        <AvatarPanel
          step={step}
          avatars={AVATARS.children}
          onPrevious={previousStep}
          onSelect={(avatar) => setChildAvatar(avatar) || nextStep()}
        />
      )}
      {step === STEPS.PARENT_NAME && (
        <NamePanel
          title="Dear parent,"
          name={parentName}
          onChange={setParentName}
          onPrevious={previousStep}
          onNext={() => !!parentName && nextStep()}
        />
      )}
      {step === STEPS.PARENT_AVATAR && (
        <AvatarPanel
          step={step}
          avatars={AVATARS.parents}
          onPrevious={previousStep}
          onSelect={(avatar) => setParentAvatar(avatar) || nextStep()}
        />
      )}
      {step === STEPS.ABOUT_PANEL && <AboutPanel onNext={nextStep} />}
      {step >= STEPS.QUESTIONS &&
        step < STEPS.QUESTIONS + level1QuestionsSnapshot?.docs?.length &&
        (loading ? (
          <CircularProgress />
        ) : (
          <QuestionPanel
            key={
              level1QuestionsSnapshot?.docs[step - STEPS.QUESTIONS].data()
                .questionChild
            }
            childName={childName}
            parentName={parentName}
            childAvatar={childAvatar}
            parentAvatar={parentAvatar}
            questionChild={
              level1QuestionsSnapshot?.docs[step - STEPS.QUESTIONS].data()
                .questionChild
            }
            questionParent={
              level1QuestionsSnapshot?.docs[step - STEPS.QUESTIONS].data()
                .questionParent
            }
            answers={
              level1QuestionsSnapshot?.docs[step - STEPS.QUESTIONS].data()
                .answers
            }
            currentQuestion={step - STEPS.QUESTIONS}
            totalQuestions={level1QuestionsSnapshot?.docs?.length}
            onPrevious={previousStep}
            onNext={nextStep}
          />
        ))}
      {step === STEPS.SHARE_PANEL && (
        <SubscriptionPanel onNext={nextStep} onSubscribe={handleSubscribe} />
      )}
      {step === STEPS.SHARE_PAGE && <SharePanel isSubscribed={isSubscribed} />}
    </Box>
  );
};

export default Start;
