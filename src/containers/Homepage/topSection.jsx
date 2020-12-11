import React from 'react';
import { Element } from 'react-scroll';
import { Creators } from "../../components/creators";
import styled from "styled-components";

import gregory from "../../assets/images/gregory.png"
import miguel from "../../assets/images/miguel.png"
import topbackground from "../../assets/images/topbackground.jpg"
import { Marginer } from '../../assets/marginer';

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-color: #26134D;
`;

const HeaderText = styled.h1`
    font-size: 100px;
    color: #AEACAC;
    font: Montserrat;
    text-align: center;
    background-color: #252525;
`

const Text1 = styled.div`
    font-size: 50px;
    padding: 10px;
    color: #909C5C;
    font: Montserrat;
    text-align: center;
`

const BackgroundFilter = styled.div`
    align-items: center;
`

export function TopSection(props)
{
    return(
        <Element name="topSection">
        <TopContainer>
            <BackgroundFilter>
                <Marginer direction="vertical" margin="1em"/>
                <HeaderText>TASK PERFORMANCE</HeaderText>
                <Text1>MADE ENTIRELY BY:</Text1>
                <Creators
                    title="BABELA, GREGORY ERRL S."
                    imgUrl={gregory}
                />
                <Creators
                    title="MANGALI, MIGUEL GABRIEL V."
                    imgUrl={miguel}
                />
            </BackgroundFilter>
            </TopContainer>
            </Element>
    ) 
}