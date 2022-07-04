import { useState, useCallback } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import PreviousNextButtons from "../PreviousNextButtons";
import Layout from "../Layout";
import { orange } from "../../../theme/kiddy";

const CHILD = 0;
const PARENT = 1;
const REVIEW = 2;

const avatarSize = { xs: "150px", sm: "300px" };

const horizontalPadding = "10%";

/*
  This component has internal steps for the child, parent, and review phase
*/
const QuestionPanel = ({
  childName,
  parentName,
  childAvatar,
  parentAvatar,
  questionChild,
  questionParent,
  answers,
  onPrevious,
  onNext,
  currentQuestion,
  totalQuestions,
}) => {
  const [currentTurn, setCurrentTurn] = useState(CHILD);
  const [childAnswer, setChildAnswer] = useState(null);
  const [parentAnswer, setParentAnswer] = useState(null);
  const previousTurn = useCallback(() => {
    if (currentTurn > 0) setCurrentTurn((currentTurn) => currentTurn - 1);
    else onPrevious();
  }, [currentTurn, onPrevious]);
  const nextTurn = useCallback(() => {
    if (currentTurn < REVIEW) setCurrentTurn((currentTurn) => currentTurn + 1);
    else onNext();
  }, [currentTurn, onNext]);
  const setAnswer = (player, answer) => {
    if (player === CHILD) setChildAnswer(answer);
    if (player === PARENT) setParentAnswer(answer);
  };
  return (
    <Layout variant="question">
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          paddingTop: "10%",
        }}
      >
        <Box height="48px" />
        <Header
          currentTurn={currentTurn}
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          childName={childName}
          parentName={parentName}
          childAvatar={childAvatar}
          parentAvatar={parentAvatar}
        />
        <Box flexGrow={1} />
        <Title
          currentTurn={currentTurn}
          questionChild={questionChild}
          questionParent={questionParent}
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
            return (
              <Box
                display="flex"
                alignItems="center"
                key={`${questionChild}-answer-${index}`}
                paddingLeft={horizontalPadding}
                paddingRight={horizontalPadding}
              >
                {currentTurn === REVIEW && childAnswer === answer && (
                  <img
                    src={childAvatar}
                    alt="Child Avatar"
                    style={{
                      paddingBottom: "4px",
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                )}
                <Button
                  variant={
                    (currentTurn === CHILD && childAnswer === answer) ||
                    (currentTurn === PARENT && parentAnswer === answer) ||
                    (currentTurn === REVIEW &&
                      (childAnswer === answer || parentAnswer === answer))
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() => setAnswer(currentTurn, answer)}
                  sx={{
                    width: "100%",
                    margin: "4px 0px",
                    height: { xs: "80px", md: "40px" },
                  }}
                >
                  {answer}
                </Button>
                {currentTurn === REVIEW && parentAnswer === answer && (
                  <img
                    src={parentAvatar}
                    alt="Parent Avatar"
                    style={{
                      paddingBottom: "4px",
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
        <PreviousNextButtons
          disabled={
            (currentTurn === CHILD && !childAnswer) ||
            (currentTurn === PARENT && !parentAnswer)
          }
          onPrevious={previousTurn}
          onNext={nextTurn}
        />
        <Box mb={RESPONSIVE_PANEL_SPACING} />
      </Box>
    </Layout>
  );
};

const Header = ({
  currentTurn,
  currentQuestion,
  totalQuestions,
  childName,
  parentName,
  childAvatar,
  parentAvatar,
}) => (
  <>
    <Box
      sx={{ paddingLeft: horizontalPadding, paddingRight: horizontalPadding }}
    >
      <Typography variant="h3">
        Question {currentQuestion + 1} / {totalQuestions}
      </Typography>
    </Box>
    <Box sx={{ position: "relative", textAlign: "center" }}>
      {currentTurn !== REVIEW && (
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            height: "48px",
            width: "50%",
            backgroundImage: `linear-gradient(to right, rgba(252, 174, 22, 1), 90%, rgba(252, 174, 22, 0))`,
            paddingLeft: "24px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ color: "black", lineHeight: "48px" }}>
            {currentTurn === CHILD ? childName : parentName}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          position: "absolute",
          top: "0px",
          width: "100%",
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
        }}
      >
        {currentTurn === CHILD && (
          <Box height={avatarSize}>
            <img
              src={parentAvatar}
              alt="Child Avatar"
              style={{
                height: "50%",
                objectFit: "contain",
                marginBottom: "4%",
                marginRight: "-4%",
              }}
            />
            <img
              src={childAvatar}
              alt="Child Avatar"
              style={{ height: "100%", objectFit: "contain" }}
            />
          </Box>
        )}
        {currentTurn === PARENT && (
          <Box height={avatarSize}>
            <img
              src={childAvatar}
              alt="Parent Avatar"
              style={{
                height: "50%",
                objectFit: "contain",
                marginBottom: "4%",
                marginRight: "-4%",
              }}
            />
            <img
              src={parentAvatar}
              alt="Child Avatar"
              style={{ height: "100%", objectFit: "contain" }}
            />
          </Box>
        )}
        {currentTurn !== REVIEW && (
          <Typography variant="h1">It's your turn</Typography>
        )}
      </Box>
      <Box mb={RESPONSIVE_PANEL_SPACING} />
    </Box>
  </>
);

const Title = ({
  questionChild,
  questionParent,
  currentTurn,
  childAnswer,
  parentAnswer,
}) => (
  <Box paddingLeft={horizontalPadding} paddingRight={horizontalPadding}>
    <Box
      backgroundColor="#c842f6"
      margin="4px 0px"
      padding="24px"
      borderRadius="15px"
    >
      {currentTurn === CHILD && (
        <Typography variant="h5">{questionChild}</Typography>
      )}
      {currentTurn === PARENT && (
        <Typography variant="h5">{questionParent}</Typography>
      )}
      {currentTurn === REVIEW && childAnswer === parentAnswer && (
        <Typography variant="h5">Answers matched!</Typography>
      )}
      {currentTurn === REVIEW && childAnswer !== parentAnswer && (
        <Typography variant="h5">
          Uh Oh! Looks like you two don't agree
        </Typography>
      )}
    </Box>
  </Box>
);

const Subtitle = ({ currentTurn, childAnswer, parentAnswer }) => (
  <>
    {currentTurn === REVIEW && childAnswer === parentAnswer && (
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography>Amazing! Your choices are the same!</Typography>
      </Box>
    )}
    {currentTurn === REVIEW && childAnswer !== parentAnswer && (
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography>It's the perfect time to have a chat!</Typography>
      </Box>
    )}
  </>
);

export default QuestionPanel;
