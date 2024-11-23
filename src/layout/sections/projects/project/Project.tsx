import React from 'react';
import styled from "styled-components";

type ProjectPropsType = {
    src: string
    alt: string
}

export const Project = ($props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={$props.src} alt={$props.alt}/>
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
    border-radius: 1em;
    padding: 1em;
`
const Image = styled.img`
    width: 375px;
    height: 260px;
    object-fit: cover;
    max-width: 100%;
`
const Title = styled.h3`
    text-align: center;
`
const Description = styled.div`
`
const Button = styled.button``