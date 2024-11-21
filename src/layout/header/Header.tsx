import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {SocialIcons} from "../../components/socialIcons/SocialIcons";
import {Logo} from "../../components/logo/Logo";

const items = ["Home","About","Tech Stack", "Projects", "Contact"];
const icons = ["github","linkedin", "telegram"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <SocialIcons icons={icons}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: inherit;
`