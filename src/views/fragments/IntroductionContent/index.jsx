import { useNavigate,useLocation } from "react-router-dom";
import ROUTE_NAMES from "../../../constants/routeNames";
import AVATARS from "../../../constants/avatars";
import React from "react";

import {
    StyledBackButton,
    IntroductionContentWrapper,
    Paragraph,
    ParagraphContainer,
    Intro,
    AvatarImage,
    ParagraphHeader,
  } from "./styled.components";


  const { QUESTIONS } = ROUTE_NAMES
  
  const IntroductionContent =() =>{
    const { state } = useLocation();
    const navigate = useNavigate();
    const usernames = state.usernames;
    const selections = state.selections;

    const handleNext = () => {
      navigate(QUESTIONS, {state:{usernames,selections}});
    };

    

    return(
        <>
        <IntroductionContentWrapper>
        <Intro>
        <AvatarImage src = {AVATARS.children[state.selections["child"]]} alt="Child's_avatar"/>
        <AvatarImage src = {AVATARS.parents[state.selections["parent"]]} alt="parent's_avatar"/>
        Introduction
        </Intro>
        
       
        <ParagraphContainer>
        <ParagraphHeader>Hello {state.usernames[0].length >= 1 ? state.usernames[0] : "Child"} and {state.usernames[1].length >= 1 ? state.usernames[1] : "Mummy/Daddy"}, </ParagraphHeader>
            <Paragraph>
            
            Are you and your Mummy/Daddy ready? Are you ready to play?
        <br></br>
             Let's answer some online safety questions!
            </Paragraph>
        </ParagraphContainer>


        <StyledBackButton onClick={handleNext}/>

        </IntroductionContentWrapper>  
        </>



    )
  };
  export default IntroductionContent