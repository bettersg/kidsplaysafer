import styled from "styled-components";

import { ReactComponent as BackButton } from "../../assets/icons/backButton.svg";
import { ReactComponent as DFL_LOGO } from "../../assets/icons/DFLogoSmall.svg";
export const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 35px;
  width: 35px;
  z-index: 2;
`;

export const AboutContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const About = styled.div`
  margin-bottom: 18px;
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 60px;
  color: #db24fc;
  text-shadow: 3px 3px #42210b;
`;

export const ParagraphContainer = styled.div`
  overflow: scroll;
  height: 300px;
  width: calc(100% - 50px);
  max-width: 400px;
  max-height: 300px;
  padding: 0 20px;
`;

export const Paragraph = styled.div`
  font-size: 18px;
  color: #ffffff;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const LogoLine = styled.div`
  font-size: 12px;
  font-weight: 100;
  color: #ffffff;
  margin-top:20px;
  text-align: center;
  }
`;
export const StyledDFLlogo = styled(DFL_LOGO)`
  position: relative;
  bottom: 5%;
  left: 3%;
  transform: scale(0.5);
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(300%) contrast(100%);
`;
