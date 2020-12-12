import React from 'react';
import styled from 'styled-components/macro';
import { theme } from "../../theme";

const CreatorsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const CreatorTitle = styled.h2`
    font: Montserrat;
    color: ${theme.primary};
    font-size: 25px;
`

const CreatorImage = styled.img`
    width: 5em;
    height: 5em;
    border: solid 1px;
    border-radius: 50%;
`

export function Creators(props)
{
    const { imgUrl, title} = props;
    return(
        <CreatorsContainer>
            <CreatorTitle>{title}</CreatorTitle>
            <CreatorImage src={imgUrl}/>
        </CreatorsContainer>
    );
    
}