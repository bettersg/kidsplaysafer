import { useScreenSize } from "../../../hooks/useScreenSize";

import { IntroWrapper, StyledTop,StyledBottom } from "./styled.components";
import IntroductionContent from "../../fragments/IntroductionContent";

const Introduction = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <IntroWrapper>
      {isSmallScreen && (
        <>
          <StyledTop />
          <StyledBottom />
          <IntroductionContent />
          
        </>
      )}
    </IntroWrapper>
  );
};

export default Introduction;
