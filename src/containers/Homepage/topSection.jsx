import React from 'react';
import { Element, scroller } from 'react-scroll';
import { Creators } from "../../components/creators";
import styled from "styled-components";

import gregory from "../../assets/images/gregory.png"
import miguel from "../../assets/images/miguel.png"
import topbackground from "../../assets/images/topbackground.jpg"
import { Marginer } from '../../assets/marginer';
import { theme } from "../../theme";
import { DownArrow } from '../../components/downArrow';

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${topbackground});
    position: relative;
`;

const HeaderText = styled.div`
    font-size: 100px;
    color: #AEACAC;
    font: Montserrat;
    text-align: center;
    background-color: #252525;
    margin-left: 2em;
    margin-right: 2em;
    border-radius: 10px;
`;

const Text1 = styled.div`
    font-size: 50px;
    color: ${theme.primary};
    font: Montserrat;
    text-align: center;
`;

const DownArrowContainer1 = styled.div`
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
`;

const Text2 = styled.div`
    font-size: 30px;
    color: white;
    font: Montserrat;
    text-align: center;
    opacity: 0.8;
`;



export function TopSection(props)
{
    const titlenav = () => {
        scroller.scrollTo("titleNavigation", { smooth: true, duration: 1500 });
      };

    return(
        <Element name="topSection">
        <TopContainer>
                <Marginer direction="vertical" margin="1em"/>
                <HeaderText>
                    TASK PERFORMANCE
                </HeaderText>
                <Marginer direction="vertical" margin="1em"/>
                <Text1>MADE ENTIRELY BY:</Text1>
                <Creators
                    title="BABELA, GREGORY ERRL S."
                    imgUrl={gregory}
                />
                <Creators
                    title="MANGALI, MIGUEL GABRIEL V."
                    imgUrl={miguel}
                />
                <Marginer direction="vertical" margin="2em"/>
                <Text2>This is an interactive web.</Text2>
                <Text2>Click and Hover</Text2>
                <Text2>Find and Discover</Text2>
                <DownArrowContainer1 onClick={titlenav}>
                    <DownArrow/>
                </DownArrowContainer1>
            </TopContainer>
            </Element>
    ) 
}