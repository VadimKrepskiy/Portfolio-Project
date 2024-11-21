import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo.png"
import background from "../../../assets/images/Abstract.svg"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify="space-between" align={"center"} width="1350px" maxWidth="100%" direction="row" position="relative">
                    <Text>Hi 👋!<br/>
                        My name is<br/>
                        <Name>Vadim Krepskiy</Name>
                        <MainTitle>I am a Web Developer</MainTitle>
                    </Text>
                <PhotoWrapper>
                    <Photo src={photo}/>
                </PhotoWrapper>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: inherit;
    align-items: center;
    padding-top: 3em;
`
const MainTitle = styled.h1`
    margin-top: 0;
    font-size: inherit;
`
const Text = styled.p`
    margin-bottom: 2rem;
    font-weight: bold;
    font-size: 58px;
    color: white;
`
const PhotoWrapper = styled.div`
    width: 628px;
    height: 628px;
    background-image: url(${background});
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
`
const Photo = styled.img`
    width: 349px;
    height: 349px;
    object-fit: cover;
    max-width: 100%;
`

const Name = styled.span`
    background: linear-gradient(to right,#13B0F5,#E70FAA);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`