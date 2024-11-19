import React from 'react';
import styled from "styled-components";

export const Project = () => {
    return (
        <StyledProject>
            <Image src={""}/>
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
    padding: 10px;
`
const Image = styled.img`
`
const Title = styled.h3`
    margin-top: 0;
    text-align: center;
`
const Description = styled.div`
`
const Button = styled.button``