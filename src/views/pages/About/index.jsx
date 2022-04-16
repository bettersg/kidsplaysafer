import { useScreenSize } from "../../../hooks/useScreenSize";

import { AboutWrapper, StyledTop } from "./styled.components";
import HomeNavbar from "../../fragments/HomeNavbar";
import AboutDesktopContent from "../../fragments/AboutDesktopContent";
import AboutContent from "../../fragments/AboutContent";

const About = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <AboutWrapper>
      {!isSmallScreen && (
        <>
          <HomeNavbar />
          <AboutDesktopContent />


        </>
      )}
      {isSmallScreen && (
        <>
          <StyledTop />
          <AboutContent />

        </>
      )}
    </AboutWrapper>
    
  );
};

export default About;
