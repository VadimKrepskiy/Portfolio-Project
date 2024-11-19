import React from 'react';
import styled from "styled-components";

type TechnologyPropsType = {
    title: string
    progress: number
}

export const Technology = (props: TechnologyPropsType) => {
    return (
        <StyledTechnology>
            <Title>{props.title}</Title>
            <Line max="100" value={props.progress}/>
        </StyledTechnology>
    );
};
const StyledTechnology = styled.div`
    width: 500px;
    max-width: 100%;
`
const Title = styled.h3`
margin-bottom: 0;`
const Line = styled.progress`
    width: 100%;
`