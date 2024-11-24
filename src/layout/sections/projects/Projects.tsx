import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {SectionTitle} from "../../../components/SectionTitle";
import project1 from "../../../assets/images/projects/project1.png";
import project2 from "../../../assets/images/projects/project2.png";
import project3 from "../../../assets/images/projects/project3.png";
import project4 from "../../../assets/images/projects/project4.png";
import project5 from "../../../assets/images/projects/project5.png";
import project6 from "../../../assets/images/projects/project6.png";

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper direction="row" wrap="wrap" gap={"30px"} justify={"center"}>
                <Project src={project1} alt={"project1"}/>
                <Project src={project2} alt={"project2"} />
                <Project src={project3} alt={"project3"} />
                <Project src={project4} alt={"project4"} />
                <Project src={project5} alt={"project5"} />
                <Project src={project6} alt={"project6"} />
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    background-color: inherit;
`