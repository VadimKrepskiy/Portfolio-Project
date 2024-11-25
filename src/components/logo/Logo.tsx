import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo href="">
            Vadim Krepskiy
        </StyledLogo>
    );
};
const StyledLogo = styled.a`
    background: linear-gradient(to right,#13B0F5,#E70FAA);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.2em;
    font-weight: bold;
`