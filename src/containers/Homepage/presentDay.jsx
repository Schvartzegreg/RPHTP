import React from "react"
import { Element } from "react-scroll"
import styled from "styled-components"
import { Marginer } from "../../assets/marginer";
import { theme } from "../../theme";

const PresentContainer = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export function PresentDay(props)
{
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
                <Marginer direction="vertical" margin="15em"/>
            </PresentContainer>
        </Element>
    )
}