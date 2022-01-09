import styled from "styled-components";
import { ReactComponent as Bottom } from "../../assets/icons/homeBottom.svg";
import { ReactComponent as Top } from "../../assets/icons/homeTop.svg";
import Background from "../../assets/icons/background.png";

export const IntroWrapper = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;

export const StyledTop = styled(Top)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledBottom = styled(Bottom)`
  position: absolute;
  bottom: -16px;
  left: 0;
`;
