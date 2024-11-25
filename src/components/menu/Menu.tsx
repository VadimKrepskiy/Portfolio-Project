import React from 'react';
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="#">{item}</a>
                    </li>;
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    ul {
        padding: 0;
        display: flex;
        gap: 30px;
        justify-content: space-between;
        list-style: none;
    }
    a{
        color: #A7A7A7;
        text-decoration: none;
    }
`