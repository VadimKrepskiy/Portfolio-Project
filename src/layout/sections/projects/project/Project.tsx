import React from 'react';
import styled from "styled-components";
import projectImage1 from "../../../../assets/images/project 1.png"

export const Project = () => {
    return (
        <StyledProject>
            <Image src={projectImage1}/>
            <Title>Project</Title>
            <Description>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p>sed do eiusmod tempor incididunt ut labore et dolore </p>
                <p>magna aliqua.</p>
            </Description>
            <Button>Look It Up</Button>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    border: 1px solid blue;
    border-radius: 1em 0 1em 0;
    padding: 1em;
`
const Image = styled.img`
    width: 580px;
    height: 300px;
    object-fit: cover;
    max-width: 100%;
`
const Title = styled.h3`
    text-align: center;
`
const Description = styled.div`
`
const Button = styled.button``