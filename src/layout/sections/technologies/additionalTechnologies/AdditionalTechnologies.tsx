import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";

export const AdditionalTechnologies = () => {
    return (
        <StyledAdditionalTechnologies>
            <Title>Additional Technologies</Title>
            <FlexWrapper direction={"row"} gap={"10px"}>
                <Icon iconId={"git-skill"} width="100" height="100" viewBox="0 0 100 100"></Icon>
                <Icon iconId={"github-skill"} width="100" height="100" viewBox="0 0 100 100"></Icon>
                <Icon iconId={"figma-skill"} width="100" height="100" viewBox="0 0 100 100"></Icon>
            </FlexWrapper>
        </StyledAdditionalTechnologies>
    );
};

const StyledAdditionalTechnologies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.h2`
`
