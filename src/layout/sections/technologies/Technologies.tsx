import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Technology} from "./technology/Technology";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {AdditionalTechnologies} from "./additionalTechnologies/AdditionalTechnologies";

export const Technologies = () => {
    return (
        <StyledTechnologies>
            <SectionTitle>Technologies</SectionTitle>
            <FlexWrapper gap={"10px"} align={"center"}>
                <Technology title="HTML5" progress={80}/>
                <Technology title="CSS" progress={75}/>
                <Technology title="Styled components" progress={60}/>
            </FlexWrapper>
            <AdditionalTechnologies/>
        </StyledTechnologies>
    );
};
const StyledTechnologies = styled.section`
    background-color: brown;
`