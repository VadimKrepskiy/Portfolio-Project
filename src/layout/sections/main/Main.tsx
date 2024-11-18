import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo.png"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper>
                <MainTitle>Lorem ipsum dolor amet</MainTitle>
                <Text><p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <p>elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <p>dolore magna aliqua.</p>
                </Text>
                <Button>Let`s Begin</Button>
            </FlexWrapper>
            <Photo src={photo}/>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: yellow;
    align-items: center;
    padding-top: 3em;
`
const MainTitle = styled.h1`
    margin-top: 0;
`
const Text = styled.div`
    margin-bottom: 2rem;
    p{
        margin: 0;
    }
`
const Photo = styled.img`
    width: 234px;
    height: 276px;
    object-fit: cover;
`
const Button = styled.button`
    max-width: 100%;
    width: 100px;
    padding: 0.5em 1em;
    border-radius: 1em;
`