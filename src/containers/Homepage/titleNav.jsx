import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';

import titlenavbackground from "../../assets/images/titlenavbackground.jpg"
import { Marginer } from '../../assets/marginer';

const TNContainer = styled.div`
    width: 100%;
    min-height: 500px;
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
    font-size: 50px;
    color: white;
`;

export function TitleNavigation(props)
{
    return (
    <Element name="titleNavigation">
        <TNContainer>
            <BackgroundFilter1>
                <Marginer direction="vertical" margin="5em"/>
                <RPHSubject>READINGS IN PHILIPPINE HISTORY</RPHSubject>
                <Marginer direction="vertical" margin="5em"/>
            </BackgroundFilter1>
        </TNContainer>
    </Element>
    )
    
}