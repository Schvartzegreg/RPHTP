import React from 'react';
import { TopSection } from './topSection';
import styled from "styled-components";
import { TitleNavigation } from './titleNav';
import { Precolonial } from './precolonialPeriod';
import "../../index.css"

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export function Homepage(props) 
{
    return <PageContainer>
        <TopSection />
        <TitleNavigation/>
        <Precolonial/>
    </PageContainer>;
}