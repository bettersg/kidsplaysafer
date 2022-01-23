import { useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";

import {
  PlayAgainContentWrapper,
  PlayAgainHeader,
  StartButton,
  Share,
  ShareButton,
} from "./styled.components";

const { START } = ROUTE_NAMES;

const PlayAgainContent = () => {
  const navigate = useNavigate();

  const onStartClick = () => {
    navigate(START);
  };

  return (
    <PlayAgainContentWrapper>
      <PlayAgainHeader>Play Again?</PlayAgainHeader>
      <StartButton onClick={onStartClick}>Start</StartButton>
      <Share>Share this game with your friends!</Share>
      <ShareButton>Share</ShareButton>
    </PlayAgainContentWrapper>
  );
};

export default PlayAgainContent;