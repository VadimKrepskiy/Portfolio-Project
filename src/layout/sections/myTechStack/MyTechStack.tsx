import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const MyTechStack = () => {
    return (
        <StyledTechStack>
            <SectionTitle>My Tech Stack</SectionTitle>
            <Title>Technologies I`ve been working with recently</Title>
            <FlexWrapper direction="row" justify="space-between" gap="80px" wrap="wrap" width="1200px" maxWidth="100%">
                <a href=""><Icon iconId="html" width="120" height="120" viewBox="0 0 120 120"/></a>
                <a href=""><Icon iconId="css" width="120" height="120" viewBox="0 0 120 120"/></a>
                <a href=""><Icon iconId="js" width="120" height="120" viewBox="0 0 120 120"/></a>
                <a href=""><Icon iconId="react" width="120" height="120" viewBox="0 0 120 120"/></a>
                <a href=""><Icon iconId="react" width="120" height="120" viewBox="0 0 120 120"/></a>
                <a href=""><Icon iconId="bootstrap" width="120" height="120" viewBox="0 0 90 90"/></a>
                <a href=""><Icon iconId="tailwind" width="120" height="120" viewBox="0 0 120 120"/></a>
                <a href=""><Icon iconId="sass" width="120" height="120" viewBox="0 0 116 90"/></a>
                <a href=""><Icon iconId="git" width="120" height="120" viewBox="0 0 105 105"/></a>
                <a href=""><Icon iconId="greensock" width="120" height="120" viewBox="0 0 120 120"/></a>
                <a href=""><Icon iconId="vscode" width="120" height="120" viewBox="0 0 120 120"/></a>
                <a href=""><Icon iconId="github" width="120" height="120" viewBox="5 5 21 21"/></a>
            </FlexWrapper>
        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h3`
    margin: 0 0 4em;
    text-align: center;
    color: #A7A7A7;
    font-size: 32px;
`