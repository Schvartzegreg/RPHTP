import React from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import spanish from "../../assets/images/spanish.gif";
import { Marginer } from "../../assets/marginer";
import farmers from "../../assets/images/farmers.jpg";
import real from "../../assets/images/real.jpg";
import cedula from "../../assets/images/cedula.jpg";
import taxchart from "../../assets/images/taxchart.png";
import { theme } from "../../theme";
import { DownArrow } from "../../components/downArrow";

const SpanishContainer = styled.div`
    width: 100%;
    min-height: 500px;
    background-color: #393939;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SpanishIContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`;

const SpanishInquisition = styled.img`
    width: 150%;
    border-radius: 5px;
`;

const SpanishHeader = styled.h1`
    font: Montserrat;
    font-size: 100px;
    color: white;
    text-align: center;
    margin: 0;
    opacity: 0.5;
`;

const SpanishParagraph = styled.p`
    font-size: 40px;
    color: white;
    opacity: 0.8;
    text-align: center;
    margin-left: 4em;
    margin-right: 4em;
`;

const SpDescription = styled.p`
    font-size: 20px;
    color: ${theme.primary};
    opacity: 0.8;
    text-align: center;
`;

const SparaContainer = styled.div`
    background-color: black;
    opacity: 0.5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 4em;
    margin-right: 4em;
`;

const Makeblack = styled.span`
    color: black;
    font-weight: 800;
    opacity: 0.8;
`;

const FarmerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Farmers = styled.img`
    width: 50%;
    border-radius: 5px;
`;

const Real = styled.img`
    width: 20%;
    border-radius: 5px;
    opacity: 0.7;
`;

const Cedula = styled.img`
    width: 50%;
    border-radius: 5px;
    opacity: 0.7;
`;

const Taxchart = styled.img`
    width: 50%;
    border-radius: 5px;
    opacity: 0.7;
`;

const FarmerSource = styled.div`
    height: 100%
    width: 100%;
    background-color: white;
    opacity: 0;
    transition: all 250ms ease-in-out;

    &:hover
    {
        opacity: 0.2;
    }

`;

const DownArrowContainer = styled.div`
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
`;


export function SpanishPeriod(props)
{
    const present = () => {
        scroller.scrollTo("presentDay", { smooth: true, duration: 1500 });
      };
    return(
        <Element name="spanishPeriod">
        <SpanishContainer>
        <Marginer direction="vertical" margin="5em"/>
            <SpanishIContainer>
                <SpanishInquisition src={spanish}/>
            </SpanishIContainer>
            <Marginer direction="vertical" margin="10em"/>
            <SpanishHeader>THE</SpanishHeader>
            <SpanishHeader>SPANISH</SpanishHeader>
            <SpanishHeader>PERIOD</SpanishHeader>
            <Marginer direction="vertical" margin="10em"/>
                <SpanishParagraph>
                    The Spanish Government implemented different kinds of taxes.
                </SpanishParagraph>
            <Marginer direction="vertical" margin="10em"/>
            <SparaContainer>
                <SpanishParagraph>
                Under Spanish rule, the indigenous families had to cultivate, not only enough food and crops for their own sustenance, but also great portions which they were forced to hand over to the warlords. Euphemistically, the Spanish called these forced portions "tributes".
                </SpanishParagraph>
            </SparaContainer>
            <Marginer direction="vertical" margin="10em"/>
            <SpanishParagraph>
            The <Makeblack>Tribute</Makeblack> was a form of taxation implemented by the Spanish government in the Philippines in order to support government and church operations. It was introduced in 1570. In 1589, the value of the tribute was raised to accommodate the needs of the church. This was called <Makeblack>sanctorum </Makeblack>.
            </SpanishParagraph>
            <Marginer direction="vertical" margin="15em"/>
            <FarmerContainer>
                <Farmers src={farmers}/>
                <Marginer direction="vertical" margin="5px"/>
                <FarmerSource>
                        Source: https://i1.wp.com/live.staticflickr.com/3452/3973968924_fd30c15341_b.jpg?ssl=1
                    </FarmerSource>
            </FarmerContainer>
            <SpanishParagraph>
                The <Makeblack>Bandala System</Makeblack> was then introduced. It is a system implemented by Spanish authorities in the Philippines that required native Filipino farmers to sell their goods to the government.
            </SpanishParagraph>
            <Marginer direction="vertical" margin="10em"/>
            <SpanishParagraph>
            <Makeblack>Donativo</Makeblack> was the tax in the amount of half real for the military campaign of the government against the muslims. In the later years, however, the amount collected from donativo was almost exclusively used for the Spanish fort in Zamboanga.
            </SpanishParagraph>
            <Marginer direction="vertical" margin="10em"/>
            <SpDescription>1 Spanish Real</SpDescription>
            <FarmerContainer>
                <Real src={real}/>
                <Marginer direction="vertical" margin="5px"/>
                <FarmerSource>
                        Source: https://upload.wikimedia.org/wikipedia/commons/8/8a/Potosi_Real.jpg
                    </FarmerSource>
            </FarmerContainer>
            <SpanishParagraph>
            <Makeblack>Caja de comunidad</Makeblack> was a tax collected in the amount of 1 real for the incurred expenses of the town in the construction of roads, repair of bridges, or the improvement of public buildings.
            </SpanishParagraph>
            <Marginer direction="vertical" margin="10em"/>
            <SpDescription>An Example of a Cedula</SpDescription>
            <FarmerContainer>
                <Cedula src={cedula}/>
                <Marginer direction="vertical" margin="5px"/>
                <FarmerSource>
                        Source: https://lh4.googleusercontent.com/-thgHktwoUeU/TWtx-KQYPFI/AAAAAAAAAP0/rebYTbe32nI/s1600/1897.jpg
                    </FarmerSource>
            </FarmerContainer>
            <SpanishParagraph>
            <Makeblack>Cedulas</Makeblack> were first issued based on the Royal Decree on March 6, 1884. All men and women residents of the island- Spaniards, foreigners, and natives- who were over 18 years old were required to obtain a cedula. The only exceptions were the Chinese, who paid another poll tax, the remontados d infieles,that were not subject to local administration, and the natives and colonist of the archipelago of Jolo and of the islands of Balabac and Palawan.
            </SpanishParagraph>
            <Marginer direction="vertical" margin="10em"/>
            <SpDescription>A Chart on how the Spaniards taxed the Filipinos</SpDescription>
            <FarmerContainer>
                <Taxchart src={taxchart}/>
                <Marginer direction="vertical" margin="5px"/>
                <FarmerSource>
                        Source: STI "Rizal's Life and Works" 04 Handout 01 Page 1
                    </FarmerSource>
            </FarmerContainer>
            <Marginer direction="vertical" margin="20em"/>
            <SpanishParagraph>And so the Spanish Era has ended just like that.</SpanishParagraph>
            <Marginer direction="vertical" margin="20em"/>
            <DownArrowContainer onClick={present}>
                    <DownArrow/>
                </DownArrowContainer>
            <Marginer direction="vertical" margin="20px"/>
        </SpanishContainer>
        </Element>
    )
}