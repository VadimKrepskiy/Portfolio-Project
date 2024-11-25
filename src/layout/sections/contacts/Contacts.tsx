import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <Form>
                <Field title="Name" placeholder="Example"/>
                <Field title="Email" placeholder="Value"/>
                <Message title="Message" placeholder="Hi, I will..."/>
            </Form>
        </StyledContacts>
    );
};
const StyledContacts = styled.section`
    
`
const Form = styled.form`
    margin: auto;
    width: 532px;
    max-width: 100%;
    color: #A7A7A7;
`
type FieldPropsType = {
    title: string
    placeholder?: string
}
const Field = (props: FieldPropsType) =>
{
    return <FlexWrapper>
        <Title>{props.title}</Title>
        <StyledField placeholder={props.placeholder || ''} />
    </FlexWrapper>
}
const Title = styled.label``

const StyledField = styled.input`
    width: 100%;
    height: 48px;
    border: 2px solid transparent;
    background: linear-gradient(#191919,#191919) padding-box,
    linear-gradient(#A7A7A7,#A7A7A7) border-box;
    border-radius: 4px;
    margin-bottom: 16px;
    padding: 1em;
    :hover{
        background: linear-gradient(#191919,#191919) padding-box,
        linear-gradient(to right,#13B0F5,#E70FAA) border-box;
    }
`
const Message = (props: FieldPropsType) =>{
    return <FlexWrapper>
        <Title>{props.title}</Title>
        <StyledMessage placeholder={props.placeholder || ''} />
    </FlexWrapper>
}
const StyledMessage = styled.textarea`
    width: 100%;
    height: 165px;
    border: 2px solid transparent;
    background: linear-gradient(#191919,#191919) padding-box,
    linear-gradient(#A7A7A7,#A7A7A7) border-box;
    border-radius: 4px;
    margin-bottom: 16px;
    padding: 1em;
    :hover{
        background: linear-gradient(#191919,#191919) padding-box,
        linear-gradient(to right,#13B0F5,#E70FAA) border-box;
    }
`