import React from 'react';
import { Element, scroller } from "react-scroll";
import styled from 'styled-components';

import titlenavbackground from "../../assets/images/titlenavbackground.jpg"
import { Marginer } from '../../assets/marginer';
import { Button } from "../../components/button";
import { theme } from "../../theme";

const TNContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${titlenavbackground});
    position: relative;
`;

const BackgroundFilter1 = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RPHSubject = styled.h1`
    font: Montserrat;
    font-size: 70px;
    color: white;
`;

const TaxationText = styled.div`
    font: Montserrat;
    font-size:40px;
    font-weight:1000;
    color: ${theme.primary}
`;



export function TitleNavigation(props)
{
    const precolonial = () => {
        scroller.scrollTo("precolonialPeriod", { smooth: true, duration: 1500 });
      };
    const spanish = () => {
        scroller.scrollTo("spanishPeriod", { smooth: true, duration: 1500 });
      };
    const present = () => {
        scroller.scrollTo("presentDay", { smooth: true, duration: 1500 });
      };

    return (
    <Element name="titleNavigation">
        <TNContainer>
            <BackgroundFilter1>
                <Marginer direction="vertical" margin="2em"/>
                <RPHSubject>READINGS IN PHILIPPINE HISTORY</RPHSubject>
                <Marginer direction="vertical" margin="4em"/>
                <TaxationText>TAXATION IN THE PHILIPPINES</TaxationText>
                <Marginer direction="vertical" margin="6em"/>
                <Button onClick={precolonial}>PRE-COLONIAL PERIOD</Button>
                <Marginer direction="vertical" margin="2em"/>
                <Button onClick={spanish}>SPANISH ERA</Button>
                <Marginer direction="vertical" margin="2em"/>
                <Button onClick={present}>PRESENT DAY</Button>
            </BackgroundFilter1>
        </TNContainer>
    </Element>
    )
    
}