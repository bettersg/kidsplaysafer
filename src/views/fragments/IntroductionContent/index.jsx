import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useScreenSize } from "../../../hooks/useScreenSize";
import ROUTE_NAMES from "../../../constants/routeNames";
import AVATARS from "../../../constants/avatars";

import {
  StyledBackButton,
  IntroductionContentWrapper,
  Intro,
  AvatarImage,
  ParagraphContainer,
  ParagraphHeader,
  Paragraph,
  StyledNextButton,
  ImageWrapper,
  ListItem,
  StepText,
  ParagraphContainer2,
  StyledNextButton2,
} from "./styled.components";

const { AVATAR_SELECTION, QUESTIONS } = ROUTE_NAMES;

const IntroductionContent = () => {
  const [step, setStep] = useState(0);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { isSmallScreen } = useScreenSize();
  const usernames = state.usernames;
  const selections = state.selections,
    { child: childAvatar, parent: parentAvatar } = selections;

  const handleBack = () => {
    navigate(AVATAR_SELECTION, { state: { usernames }, replace: true });
  };

  const handleNext = () => {
    if (step === 0) {
      setStep(step + 1);
    } else {
      navigate(QUESTIONS, { state: { usernames, selections } });
    }
  };

  return (
    <>
      <StyledBackButton onClick={handleBack} />
      <IntroductionContentWrapper>
        <ImageWrapper>
          <AvatarImage
            src={AVATARS.children[childAvatar]}
            alt="child's avatar"
            isSmallScreen={isSmallScreen}
          />
          <AvatarImage
            src={AVATARS.parents[parentAvatar]}
            alt="parent's avatar"
            isSmallScreen={isSmallScreen}
          />
        </ImageWrapper>
        <Intro>Introduction</Intro>
        {step === 0 ? (
          <>
            <ParagraphContainer isSmallScreen={isSmallScreen}>
              <ParagraphHeader>
                <u>About the Game</u>
              </ParagraphHeader>
              <Paragraph>
                {" "}
                The purpose of this quiz is to help you better understand how
                your child would naturally respond when playing online games.
                <br></br>
                <br></br>
                Both you (the parent) and your child will each answer the same
                list of questions. There is no right or wrong answer. Instead,
                the goal is to spark a conversation on online safety, bridge any
                knowledge gaps and foster closer family bonds.
                <br></br>
                <br></br>Use this opportunity to engage with your child. Ask
                them why they picked the particular option before proceeding to
                the next question.<br></br>
                <br></br>Their answers might surprise you.
              </Paragraph>
            </ParagraphContainer>
          </>
        ) : (
          <>
            <ParagraphContainer2 isSmallScreen={isSmallScreen}>
              <ParagraphHeader>
                <u>How To Play</u>
              </ParagraphHeader>
              <Paragraph>
                <ol>
                  <ListItem>
                    For each question, let your child answer first, then record
                    your response after.
                  </ListItem>
                  <ListItem>
                    At the end of the quiz, the results will be compared.
                  </ListItem>
                </ol>
                <h3>**Instructions to Parent**</h3>{" "}
                <h4>
                  Select your response based on the answer you would like your
                  child to provide.
                  <br></br>
                  <br></br>Remember to use this opportunity to connect with your
                  child by having early and frequent discussions about online
                  safety, so that they will instinctively approach you when in
                  doubt.<br></br>
                </h4>
              </Paragraph>
            </ParagraphContainer2>
          </>
        )}

        <StepText>Step {step + 1} / 2</StepText>
      </IntroductionContentWrapper>
      {step === 0 ? (
        <>
          <StyledNextButton
            isSmallScreen={isSmallScreen}
            onClick={handleNext}
          />
        </>
      ) : (
        <>
          <StyledNextButton2 isSmallScreen={isSmallScreen} onClick={handleNext}>
            Start Now
          </StyledNextButton2>{" "}
        </>
      )}
    </>
  );
};
export default IntroductionContent;
