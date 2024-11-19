import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {SectionTitle} from "../../../components/SectionTitle";

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper direction="row" wrap="wrap" gap={"30px"} justify={"center"}>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    background-color: deeppink;
`