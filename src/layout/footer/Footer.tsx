import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialIcons} from "../../components/socialIcons/SocialIcons";

const items = ["Home","About","Tech Stack", "Projects", "Contact"];
const icons = ["github","linkedin", "telegram"]

export const Footer = () => {
    return (
        <StyledFooter>
            <MenuWrapper>
                <Logo/>
                <Menu menuItems={["+91 12345 09876","info@example.com"]}/>
                <SocialIcons icons={icons}/>
            </MenuWrapper>
            <MenuWrapper borderTop="1px solid white">
                <Menu menuItems={items}/>
                <Description>Designed and built by Pavan MG with Love & Coffee</Description>
            </MenuWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
`
type MenuWrapperPropsType = {
    borderTop?: string
}

const MenuWrapper = styled.div<MenuWrapperPropsType>`
    display: flex;
    width: 1200px;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    border-top: ${props => props.borderTop || ''};
`
const Description = styled.span`
    color: #A7A7A7;
`