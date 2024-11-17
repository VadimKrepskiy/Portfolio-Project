import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const SocialIcons = (props: { icons: Array<string>}) => {
    return (
        <StyledSocialIcons>
            {props.icons.map(icon =>
                {
                    return <a href="#"><Icon iconId={icon}/></a>;
                }
            )}
        </StyledSocialIcons>
    );
};

const StyledSocialIcons = styled.div`
    display: flex;
    gap:20px;
`