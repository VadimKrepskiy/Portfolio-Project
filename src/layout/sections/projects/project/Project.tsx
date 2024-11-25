import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import linkChain from "../../../../assets/images/linkChain.svg";

type ProjectPropsType = {
    src: string
    alt: string
    description?: string
    title?: string
}

export const Project = ($props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={$props.src} alt={$props.alt}/>
            <FlexWrapper padding="0 1em" width="314px" maxWidth="100%">
                <Title>{$props.title || "Project Tile goes here"}</Title>
                <Description>
                    {$props.description || "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                </Description>
                <FlexWrapper direction="row" justify="space-between">
                    <Link href="" icon={`${linkChain}`}>Live Preview</Link>
                    <Link href="" icon={`${linkChain}`}>View Code</Link>
                </FlexWrapper>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    border-radius: 1em;
    background: #363636;
    width: 375px;
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Image = styled.img`
    width: 375px;
    height: 260px;
    object-fit: cover;
    max-width: 100%;
`
const Title = styled.h3`
    text-align: center;
    margin:0;
`
const Description = styled.div`
    max-width: 100%;
    overflow-wrap: break-word;
    line-height: 26px;
    font-size: 18px;
`
type LinkPropsType = {
    icon: string
}
const Link = styled.a<LinkPropsType>`
    :before{
        background: url(${props => props.icon}) no-repeat center;
        content: '';
        display: block;
        left: 0;
        width: 20px;
        height: 20px;
        margin-right: 0.5em;
    }
    display: flex;
    color: white;
`