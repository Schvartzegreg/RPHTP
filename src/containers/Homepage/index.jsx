import React from 'react';
import { TopSection } from './topSection';
import styled from "styled-components";
import { TitleNavigation } from './titleNav';
import { Precolonial } from './precolonialPeriod';
import "../../index.css"
import { SpanishPeriod } from './spanishPeriod';
import { PresentDay } from './presentDay';

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
        <SpanishPeriod/>
        <PresentDay/>
    </PageContainer>;
}