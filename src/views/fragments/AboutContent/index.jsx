import { useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";

import {
  StyledBackButton,
  AboutContentWrapper,
  About,
  Paragraph,
  ParagraphContainer,
  StyledDFLlogo,
  LogoLine,
} from "./styled.components";

const { HOME } = ROUTE_NAMES;

const AboutContent = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(HOME);
  };

  return (
    <>
      <StyledBackButton onClick={handleBack} />
      <AboutContentWrapper>
        <About>About</About>
        <ParagraphContainer>
          <Paragraph>
            The purpose of this quiz is to better understand how your kids would
            behave when it comes to online gaming.
          </Paragraph>
          <Paragraph>How it works:</Paragraph>
          <Paragraph>1) Enter a username for your child and yourself</Paragraph>
          <Paragraph>2) Select an avatar</Paragraph>
          <Paragraph>3) Click 'Start" to begin the 5-question quiz</Paragraph>
          <Paragraph>
            4) For each question, let your child answer first, then record your
            response after
          </Paragraph>
          <Paragraph>
            5) At the end of the quiz, the results will be compared
          </Paragraph>
          <Paragraph>
            Use this opportunity to engage with your child. Ask them why they
            picked the particular option before proceeding to the next question.
          </Paragraph>
          <Paragraph>Their answers might surprise you.</Paragraph>
                  <LogoLine>In support of</LogoLine >
                  <StyledDFLlogo/>
        </ParagraphContainer>

      </AboutContentWrapper>
    </>
  );
};

export default AboutContent;
