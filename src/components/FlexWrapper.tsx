import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    width?: string
    maxWidth?: string
    position?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || ''};
    width: ${props => props.width || ''};
    max-width: ${props => props.maxWidth || ''};
    position: ${props => props.position || ''};
`