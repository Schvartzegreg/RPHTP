import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import precolonial from "../../assets/images/precolonial.jpg"
import { Marginer } from "../../assets/marginer";
import piloncitos from "../../assets/images/piloncitos.jpg"
import { DownArrow } from '../../components/downArrow';



const PrecContainer = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const PrecolonialBackground = styled.div`
    width: 100%;
    min-height: 500px;
    background-image: url(${precolonial});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
`;

const PrecolonialFilter = styled.div`
    width: 100%;
    min-height: 500px;
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
    opacity: 0.8;
`;

const PCImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`;

const PCPilocintos = styled.img`
    height: 20em;
    position: center;
    border-radius: 20px;
    opacity: 0.85;
`;

const DownArrowContainer4 = styled.div`
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
`;


export function Precolonial(props)
{
    const spanish = () => {
        scroller.scrollTo("spanishPeriod", { smooth: true, duration: 1500 });
      };
    return(
        <Element name="precolonialPeriod">
        <PrecolonialBackground>
            <PrecolonialFilter>
                <Marginer direction="vertical" margin="2em"/>
                <PrecContainer>
                    <PrecolonialHeader>PRE-COLONIAL PERIOD</PrecolonialHeader>
                    <Marginer direction="vertical" margin="5em"/>
                    <PrecolonialParagraph>The precolonial filipino society, being a communitarian, did not have any formal taxes. However, they practiced a system of taxation before the Spaniards took over where subjects pay taxes to the chieftain in return of protection.</PrecolonialParagraph>
                    <Marginer direction="vertical" margin="15em"/>
                    <PCImageContainer>
                        <PCPilocintos src={piloncitos}/>
                        <PrecolonialParagraph>
                            Piloncitos - currency used by Precolonial Filipinos in trading and paying other things such as taxes.
                        </PrecolonialParagraph>
                    </PCImageContainer>
                    <Marginer direction="vertical" margin="15em"/>
                    <PrecolonialParagraph>
                        This went on until 1521.
                    </PrecolonialParagraph>
                    <Marginer direction="vertical" margin="20em"/>
                    <DownArrowContainer4 onClick={spanish}>
                    <DownArrow/>
                </DownArrowContainer4>
                    <Marginer direction="vertical" margin="10px"/>
                </PrecContainer>
            </PrecolonialFilter>
        </PrecolonialBackground>
        </Element>
    )
}