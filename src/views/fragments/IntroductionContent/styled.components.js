import styled from "styled-components";

import { ReactComponent as NextButton } from "../../assets/icons/next_icon.svg";

export const StyledBackButton = styled(NextButton)`
  position: relative;
  height: 40px;
  width: 40px;
  z-index: 2;
  background-color: #00ff00;
  border-radius: 50%;
  margin-top: 10px;
`;

export const AvatarImage = styled.img`
  width: 30%;
`;

export const IntroductionContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Intro = styled.div`
  margin-bottom: 18px;
  font-size: 60px;
  color: #00ff00;
  text-shadow: 3px 3px #42210b;
`;

export const ParagraphContainer = styled.div`
  margin-top: 10px;
  overflow: scroll;
  max-height: 180px;
  padding: 5px 20px;
  background-color: purple;
  margin-right: 5px;
  margin-left: 5px;
`;

export const Paragraph = styled.div`
  margin-bottom: 8px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
`;
export const ParagraphHeader = styled.div`
  margin-bottom: 8px;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  background-color: purple;
`;
