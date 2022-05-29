import { useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import Layout from "../../components/Layout";
import NamePanel from "../../components/NamePanel";
import AvatarPanel from "../../components/AvatarPanel";
import AboutPanel from "../../components/AboutPanel";
import QuestionPanel from "../../components/QuestionPanel";
import RulePanel from "../../components/RulePanel";
import SharePanel from "../../components/SharePanel";
import BackgroundShapes from "../../assets/images/background_shapes.png";

import AVATARS from "../../../constants/avatars";
import QUESTIONS from "../../../constants/questions";

const STEPS = {
  CHILD_NAME: 0,
  CHILD_AVATAR: 1,
  PARENT_NAME: 2,
  PARENT_AVATAR: 3,
  ABOUT_PANEL: 4,
  RULE_PANEL: 5,
  QUESTIONS: 6,
  SHARE_PANEL: 6 + QUESTIONS.length,
}

const Start = () => {
  const [step, setStep] = useState(STEPS.CHILD_NAME);
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
        {step == STEPS.CHILD_NAME &&
          <NamePanel
            title="Hi, little one,"
            name={childName}
            onChange={(e) => setChildName(e.target.value)}
            onNext={() => !!childName && nextStep()}
          />
        }
        {step == STEPS.CHILD_AVATAR &&
          <AvatarPanel
            step={step}
            avatars={AVATARS.children}
            onPrevious={previousStep}
            onSelect={(avatar) => setChildAvatar(avatar) || nextStep()}
          />
        }
        {step == STEPS.PARENT_NAME &&
          <NamePanel
            title="Dear parent,"
            name={parentName}
            onChange={(e) => setParentName(e.target.value)}
            onPrevious={previousStep}
            onNext={() => !!parentName && nextStep()}
          />
        }
        {step == STEPS.PARENT_AVATAR &&
          <AvatarPanel
            step={step}
            avatars={AVATARS.parents}
            onPrevious={previousStep}
            onSelect={(avatar) => setParentAvatar(avatar) || nextStep()}
          />
        }
        {step == STEPS.ABOUT_PANEL &&
          <AboutPanel
            onPrevious={previousStep}
            onNext={nextStep}
          />
        }
        {step == STEPS.RULE_PANEL &&
          <RulePanel
            onPrevious={previousStep}
            onNext={nextStep}
          />
        }
        {step >= STEPS.QUESTIONS && step < STEPS.QUESTIONS + QUESTIONS.length &&
          <QuestionPanel
            key={QUESTIONS[step - 6].question}
            childAvatar={childAvatar}
            parentAvatar={parentAvatar}
            question={QUESTIONS[step - 6].question}
            answers={QUESTIONS[step - 6].answers}
            currentQuestion={step - 6}
            totalQuestions={QUESTIONS.length}
            onPrevious={previousStep}
            onNext={nextStep} />
        }
        {step == STEPS.SHARE_PANEL &&
          <SharePanel onPrevious={previousStep} />
        }
      </Box>
    </Layout >
  );
}

export default Start;