import { useState, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import PreviousNextButtons from "../PreviousNextButtons";

const CHILD = 0;
const PARENT = 1;
const REVIEW = 2;

const avatarSize = { xs: '75px', sm: '150px' };

/*
  This component has internal steps for the child, parent, and review phase
*/
const QuestionPanel = ({ childAvatar, parentAvatar, question, answers, onPrevious, onNext, currentQuestion, totalQuestions }) => {
  const [currentTurn, setCurrentTurn] = useState(CHILD);
  const [childAnswer, setChildAnswer] = useState(null);
  const [parentAnswer, setParentAnswer] = useState(null);
  const previousTurn = useCallback(() => {
    if (currentTurn > 0) setCurrentTurn((currentTurn) => currentTurn - 1);
    else onPrevious();
  }, [currentTurn]);
  const nextTurn = useCallback(() => {
    if (currentTurn < REVIEW) setCurrentTurn((currentTurn) => currentTurn + 1);
    else onNext();
  }, [currentTurn]);
  const setAnswer = (player, answer) => {
    if (player == CHILD) setChildAnswer(answer);
    if (player == PARENT) setParentAnswer(answer);
  };
  return (
    <Box textAlign="center">
      <Header
        currentTurn={currentTurn}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        childAvatar={childAvatar}
        parentAvatar={parentAvatar}
      />
      <ResponsivePanel>
        <Title
          currentTurn={currentTurn}
          question={question}
          childAnswer={childAnswer}
          parentAnswer={parentAnswer}
        />
        <Subtitle
          currentTurn={currentTurn}
          childAnswer={childAnswer}
          parentAnswer={parentAnswer}
        />
        <Box mb={RESPONSIVE_PANEL_SPACING}>
          {answers.map((answer, index) => {
            return <Box display="flex" alignItems="center" key={`${question}-answer-${index}`}>
              {currentTurn == REVIEW && childAnswer == answer &&
                <img src={childAvatar} style={{ paddingBottom: '4px', width: '40px', height: '40px', objectFit: 'contain' }} />
              }
              <Button
                variant={
                  currentTurn == CHILD && childAnswer == answer ||
                    currentTurn == PARENT && parentAnswer == answer ||
                    currentTurn == REVIEW && (childAnswer == answer || parentAnswer == answer)
                    ? 'contained'
                    : 'outlined'}
                onClick={() => setAnswer(currentTurn, answer)}
                sx={{ width: "100%", margin: '10px', height: { xs: '80px', md: '40px' } }}
              >
                {answer}
              </Button>
              {currentTurn == REVIEW && parentAnswer == answer &&
                <img src={parentAvatar} style={{ paddingBottom: '4px', width: '40px', height: '40px', objectFit: 'contain' }} />
              }
            </Box>;
          })}
        </Box>
        <PreviousNextButtons
          disabled={currentTurn == CHILD && !childAnswer || currentTurn == PARENT && !parentAnswer}
          onPrevious={previousTurn}
          onNext={nextTurn}
        />
      </ResponsivePanel >
    </Box >
  );
}

const Header = ({ currentTurn, currentQuestion, totalQuestions, childAvatar, parentAvatar }) =>
  <>
    <Typography variant="h4">Question {currentQuestion + 1} / {totalQuestions}</Typography>
    {currentTurn == CHILD &&
      <Box height={avatarSize}>
        <img src={childAvatar} style={{ height: '100%', objectFit: 'contain' }} />
      </Box>
    }
    {currentTurn == PARENT &&
      <Box height={avatarSize}>
        <img src={parentAvatar} style={{ height: '100%', objectFit: 'contain' }} />
      </Box>
    }
    {currentTurn != REVIEW &&
      <Typography variant="h4">It's your turn</Typography>
    }
    <Box mb={RESPONSIVE_PANEL_SPACING} />
  </>;

const Title = ({ question, currentTurn, childAnswer, parentAnswer }) =>
  <>
    {currentTurn != REVIEW &&
      <Box mb={RESPONSIVE_PANEL_SPACING}><Typography variant="h5">{question}</Typography></Box>
    }
    {currentTurn == REVIEW && childAnswer == parentAnswer &&
      <Box mb={RESPONSIVE_PANEL_SPACING}><Typography variant="h5">Answers matched!</Typography></Box>
    }
    {currentTurn == REVIEW && childAnswer != parentAnswer &&
      <Box mb={RESPONSIVE_PANEL_SPACING}><Typography variant="h5">Uh Oh! Looks like you two don't agree</Typography></Box>
    }
  </>;

const Subtitle = ({ currentTurn, childAnswer, parentAnswer }) =>
  <>
    {currentTurn == REVIEW && childAnswer == parentAnswer &&
      <Box mb={RESPONSIVE_PANEL_SPACING}><Typography>Amazing! Your choices are the same!</Typography></Box>
    }
    {currentTurn == REVIEW && childAnswer != parentAnswer &&
      <Box mb={RESPONSIVE_PANEL_SPACING}><Typography>It's the perfect time to have a chat!</Typography></Box>
    }
  </>

export default QuestionPanel;