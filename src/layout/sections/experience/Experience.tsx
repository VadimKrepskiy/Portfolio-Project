import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const Experience = () => {
    return (
        <StyledExperience>
            <SectionTitle>Experience</SectionTitle>
            <TimeLine>
                <TimeLineItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.
                </TimeLineItem>
                <TimeLineItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.
                </TimeLineItem>
                <TimeLineItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.
                </TimeLineItem>
            </TimeLine>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    background-color: cadetblue;
`
const TimeLine = styled.ul`
    list-style: none;
    position: relative;
    width: 900px;
    display: flex;
    margin: auto;
    gap: 1em;
    padding-left:0;
    ::before{
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: violet;
        position: absolute;
        top: 0;
        left: 0;
    }
`
const TimeLineItem = styled.li`
    width: 300px;
    position: relative;
`