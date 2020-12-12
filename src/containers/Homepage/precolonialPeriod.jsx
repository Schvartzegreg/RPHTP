import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import precolonial from "../../assets/images/precolonial.jpg"
import { Marginer } from "../../assets/marginer";



const PrecContainer = styled.div`
    width: 100%;
    min-height: 500px;
`;

const PrecolonialBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${precolonial});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
`;

const PrecolonialFilter = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    background-position: center;
    background-size: cover;
`;

const PrecolonialHeader = styled.h1`
    font: Montserrat;
    font-size: 50px;
    font-weight: bold;
    color: white;
    background-color: rgba(201, 88, 81, 0.5);
    margin-left: 9em;
    margin-right: 9em;
    border-radius: 10px;
`;

const PrecolonialParagraph = styled.p`
    margin-left: 7em;
    margin-right: 7em;
    font-size: 35px;
    color: white;
`;


export function Precolonial(props)
{
    return(
        <Element name="precolonialPeriod">
        <PrecolonialBackground>
            <PrecolonialFilter>
                <Marginer direction="vertical" margin="2em"/>
                <PrecContainer>
                    <PrecolonialHeader>PRE-COLONIAL PERIOD</PrecolonialHeader>
                    <Marginer direction="vertical" margin="5em"/>
                    <PrecolonialParagraph>The precolonial filipino society, being a communitarian, did not have any taxes. However, they practiced a system of taxation before the Spaniards took over where subjects pay taxes to the chieftain in return of protection.</PrecolonialParagraph>
                </PrecContainer>
            </PrecolonialFilter>
        </PrecolonialBackground>
        </Element>
    )
}