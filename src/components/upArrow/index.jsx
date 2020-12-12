import React from "react";
import { GoTriangleUp } from 'react-icons/go';
import styled from "styled-components";

const ArrowContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(113, 113, 113, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover
    {
        background-color: rgba(113, 113, 113, 0.5);
        
    }

`;

const ArrowIcon = styled.div`
    margin-top: 5px;
    color: rgba(1255, 130, 68, 1);
    font-size: 30px;

`;

export function UpArrow()
{
    return<ArrowContainer>
            <ArrowIcon>
                <GoTriangleUp/>
            </ArrowIcon>
        </ArrowContainer>
    
}