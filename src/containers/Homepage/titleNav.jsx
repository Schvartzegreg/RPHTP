import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';

import titlenavbackground from "../../assets/images/titlenavbackground.jpg"

const TNContainer = styled.div`
    width: 100%;
    min-height: 500px;
    background-img: url(${titlenavbackground}):
`

export function TitleNavigation(props)
{
    return (
    <Element name="titleNavigation">
        <TNContainer>
           
        </TNContainer>
    </Element>
    )
    
}