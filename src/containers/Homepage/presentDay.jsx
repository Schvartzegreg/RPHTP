import React from "react"
import { Element, scroller } from "react-scroll"
import styled from "styled-components"
import { Marginer } from "../../assets/marginer";
import { UpArrow } from "../../components/upArrow";
import { theme } from "../../theme";

const PresentContainer = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const PresentHeader = styled.h1`
    font: Montserrat;
    font-size: 100px;
    color: ${theme.primary};
    text-align: center;
    margin: 0;
    opacity: 0.5;
`;

const PresentParagraph = styled.p`
    font-size: 40px;
    color: ${theme.primary};
    opacity: 0.8;
    text-align: center;
    margin-left: 8em;
    margin-right: 8em;
`;

const Link = styled.a`
    color: blue;
    cursor: pointer;
`;

const ReferenceContainer = styled.i`
    width: 100%;
    height: 15em;
    background-color: #252525;
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const ReferenceHeader = styled.h2`
    font-size: 30px;
    color: white;
    opacity: 0.6;
    margin-left: 1.5em;
`;

const References = styled.a`
    font-size: 15px;
    style: italic;
    color: white;
    opacity: 0.6;
    text-align: left;
    margin-left: 1.5em;
`;

const UpArrowContainer = styled.div`
    position: absolute;
    left: 50%;
    bottom: 20em;
    transform: translateX(-50%);
`;


export function PresentDay(props)
{
    const top = () => {
        scroller.scrollTo("topSection", { smooth: true, duration: 1500 });
      };
    return(
        <Element name="presentDay">
            <PresentContainer>
                <Marginer direction="vertical" margin="8em"/>
                <PresentHeader>PRESENT</PresentHeader>
                <PresentHeader>DAY</PresentHeader>
                <Marginer direction="vertical" margin="8em"/>
                <PresentParagraph>
                    Now Taxation in the Philippines in our time is a complicated topic to discuss. All I know is that we tax people based on their Income, State of Life, etc. like any capitalist would do.
                </PresentParagraph>
                <PresentParagraph>
                The most basic Tax System today is the Income Tax Rate. For resident and non-resident aliens engaged in trade or business in the Philippines, the maximum rate on income subject to final tax (usually passive investment income) is 20%. For non-resident aliens not engaged in trade or business in the Philippines, the rate is a flat 25%.
                </PresentParagraph>
                <Marginer direction="vertical" margin="15em"/>
                <PresentParagraph>
                    That is a whole new different subject, so feel free to study: <Link href="https://www.bir.gov.ph/index.php/legal-matters/tax-guide-on-philippine-taxation.html" target ="_blank">https://www.bir.gov.ph/index.php/legal-matters/tax-guide-on-philippine-taxation.html</Link>
                </PresentParagraph>
                <Marginer direction="vertical" margin="15em"/>
                <PresentParagraph>
                    And this video too: <Link href="https://www.youtube.com/watch?v=wZ8A81tI3XQ" target ="_blank">https://www.youtube.com/watch?v=wZ8A81tI3XQ</Link>
                </PresentParagraph>
                <Marginer direction="vertical" margin="15em"/>
                <PresentParagraph>
                    Thank you po ser!
                </PresentParagraph>
                <Marginer direction="vertical" margin="18em"/>
                <PresentParagraph>
                    Scroll Up!
                </PresentParagraph>
                <Marginer direction="vertical" margin="7em"/>
                <UpArrowContainer onClick={top}>
                    <UpArrow/>
                </UpArrowContainer>
                <ReferenceContainer>
                    <ReferenceHeader>References</ReferenceHeader>
                    <References href="https://prezi.com/z5quaa8fmyvz/pre-colonial-period/#:~:text=Early%20Filipinos%20practiced%20a%20system,are%20exempted%20at%20paying%20tax." target="_blank">https://prezi.com/z5quaa8fmyvz/pre-colonial-period/#:~:text=Early%20Filipinos%20practiced%20a%20system,are%20exempted%20at%20paying%20tax.</References>
                    <References href="https://www.sfu.ca/fuga/history/hist02.html#:~:text=Under%20Spanish%20rule%2C%20the%20indigenous,these%20forced%20portions%20%22tributes%22." target="_blank">https://www.sfu.ca/fuga/history/hist02.html#:~:text=Under%20Spanish%20rule%2C%20the%20indigenous,these%20forced%20portions%20%22tributes%22.</References>
                    <References href="https://prezi.com/j88gy118wqi7/the-philippines-under-spanish-colonial-rule/#:~:text=Filipinos%20between%2016%20to%2060,by%20the%20King%20in%201884." target="_blank">https://prezi.com/j88gy118wqi7/the-philippines-under-spanish-colonial-rule/#:~:text=Filipinos%20between%2016%20to%2060,by%20the%20King%20in%201884.</References>
                    <References href="https://prezi.com/p/c_qyy4o9mc35/taxation-during-the-spanish-period/#:~:text=Cedulas%20were%20first%20issued%20based,required%20to%20obtain%20a%20cedula." target="_blank">https://prezi.com/p/c_qyy4o9mc35/taxation-during-the-spanish-period/#:~:text=Cedulas%20were%20first%20issued%20based,required%20to%20obtain%20a%20cedula.</References>
                    <References href="https://www.bir.gov.ph/index.php/legal-matters/tax-guide-on-philippine-taxation.html" target="_blank">https://www.bir.gov.ph/index.php/legal-matters/tax-guide-on-philippine-taxation.html</References>
                    <References href="https://www.youtube.com/watch?v=wZ8A81tI3XQ" target="_blank">https://www.youtube.com/watch?v=wZ8A81tI3XQ</References>
                </ReferenceContainer>
            </PresentContainer>
        </Element>
    )
}