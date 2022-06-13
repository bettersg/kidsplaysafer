import { useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import Layout from "../../components/Layout";
import NamePanel from "../../components/NamePanel";
import AvatarPanel from "../../components/AvatarPanel";
import AboutPanel from "../../components/AboutPanel";
import QuestionPanel from "../../components/QuestionPanel";
import SharePanel from "../../components/SharePanel";
import BackgroundShapes from "../../assets/images/background_shapes.png";
import AVATARS from "../../../constants/avatars";
import QUESTIONS from "../../../constants/questions";

const STEPS = {
  ABOUT_PANEL: 0,
  CHILD_NAME: 1,
  CHILD_AVATAR: 2,
  PARENT_NAME: 3,
  PARENT_AVATAR: 4,
  QUESTIONS: 5,
  SHARE_PANEL: 5 + QUESTIONS.length,
}

const Start = () => {
  const [step, setStep] = useState(STEPS.ABOUT_PANEL);
  const [childName, setChildName] = useState('');
  const [parentName, setParentName] = useState('');
  const [childAvatar, setChildAvatar] = useState('');
  const [parentAvatar, setParentAvatar] = useState('');
  const previousStep = useCallback(() => setStep((step) => step - 1), []);
  const nextStep = useCallback(() => setStep((step) => step + 1), []);
  return (
    <Layout>
      <Box
        sx={{
          padding: { xs: '0px 8px', sm: '0px 16px', md: '0px 24px' },
          height: '100%',
          display: 'flex',
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${BackgroundShapes})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: '75vh',
        }}>
        {step === STEPS.CHILD_NAME &&
          <NamePanel
            title="Hi, little one,"
            name={childName}
            onChange={setChildName}
            onNext={() => !!childName && nextStep()}
          />
        }
        {step === STEPS.CHILD_AVATAR &&
          <AvatarPanel
            step={step}
            avatars={AVATARS.children}
            onPrevious={previousStep}
            onSelect={(avatar) => setChildAvatar(avatar) || nextStep()}
          />
        }
        {step === STEPS.PARENT_NAME &&
          <NamePanel
            title="Dear parent,"
            name={parentName}
            onChange={setParentName}
            onPrevious={previousStep}
            onNext={() => !!parentName && nextStep()}
          />
        }
        {step === STEPS.PARENT_AVATAR &&
          <AvatarPanel
            step={step}
            avatars={AVATARS.parents}
            onPrevious={previousStep}
            onSelect={(avatar) => setParentAvatar(avatar) || nextStep()}
          />
        }
        {step === STEPS.ABOUT_PANEL &&
          <AboutPanel
            onPrevious={previousStep}
            onNext={nextStep}
          />
        }
        
        {step >= STEPS.QUESTIONS && step < STEPS.QUESTIONS + QUESTIONS.length &&
          <QuestionPanel
            key={QUESTIONS[step - 5].questionChild}
            childName={childName}
            parentName={parentName}
            childAvatar={childAvatar}
            parentAvatar={parentAvatar}
            questionChild={QUESTIONS[step - 5].questionChild}
            questionParent={QUESTIONS[step - 5].questionParent}
            answers={QUESTIONS[step - 5].answers}
            currentQuestion={step - 5}
            totalQuestions={QUESTIONS.length}
            onPrevious={previousStep}
            onNext={nextStep} />
        }
        {step === STEPS.SHARE_PANEL &&
          <SharePanel />
        }
      </Box>
    </Layout >
  );
}

export default Start;