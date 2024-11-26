import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {SocialIcons} from "../../components/socialIcons/SocialIcons";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ["Home","About","Tech Stack", "Projects", "Contact"];
const icons = ["github","linkedin", "telegram"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper direction={"row"} justify='space-between' align="center">
                    <Logo/>
                    <Menu menuItems={items}/>
                    <SocialIcons icons={icons}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: inherit;
    font-size: 20px;
`