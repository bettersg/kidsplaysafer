import styled from "styled-components";
import { ReactComponent as DFL_LOGO } from "../../assets/icons/DFLogoSmall.svg";

export const AboutContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 250px;
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
  height: 500px;
  max-width: 900px;
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
  font-size: 15px;
  color: #ffffff;
  margin-top:30px;
  text-align: center;
  font-weight:100;
  }
`;
export const LogoContainer = styled.div`
  position: absolute;
  bottom: 1%;
  max-height: 500px;
  max-width: 900px;
  padding: 0 20px;
`;
export const StyledDFLlogo = styled(DFL_LOGO)`
  position: relative;
  transform: scale(0.8);
  left: 5%;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(300%) contrast(100%);
`;
