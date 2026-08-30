import React from 'react';
import styled from 'styled-components';

import { SectionTitle } from './App.js'
import { ColorScheme } from '../theme/styleConstants.js'

const ContactInfo = styled.div`
  background: ${ColorScheme.mainLight};
  border: 1px solid ${ColorScheme.border};
  border-radius: 6px;
  padding: 18px 20px;
  margin-bottom: 28px;

  p {
    margin: 4px 0;
  }
`;

const FormDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 520px;
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: 600;
`

const FormInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid ${ColorScheme.border};
  border-radius: 4px;
  margin-bottom: 14px;
  font: inherit;
`

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
  padding: 8px 10px;
  border: 1px solid ${ColorScheme.border};
  border-radius: 4px;
  margin-bottom: 14px;
  font: inherit;
`

const Submit = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background: ${ColorScheme.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: ${ColorScheme.third};
  }
`

const EmailMe = styled.p`
  text-align: center;
  padding: 4%;
`

function Contact() {
  return (
    <div>
      <SectionTitle>Get in Touch</SectionTitle>

      <ContactInfo>
        <p>Block 29 Lot 9 Fiesta Communities, San Rafael, Tarlac City 2300, Philippines</p>
        <p>+63 976 022 0800</p>
        <p><a href="mailto:jhontab@gmail.com"><strong>jhontab@gmail.com</strong></a></p>
      </ContactInfo>

      {/* <FormDiv>
        <form action="https://formspree.io/jhontab@gmail.com" method="POST" id="contactform">
          <div>
            <FormLabel>Name:</FormLabel>
            <FormInput type="text" name="name" />
          </div>
          <div>
            <FormLabel>Email:</FormLabel>
            <FormInput type="text" name="_replyto" />
          </div>
          <div>
            <FormLabel>Comment:</FormLabel>
            <CommentInput name="comment" />
          </div>
          <Submit type="submit">Submit</Submit>
        </form>
      </FormDiv>

      <EmailMe>Or, just email me directly at <a href="mailto:jhontab@gmail.com" target="_blank" rel="noreferrer"><strong>jhontab@gmail.com</strong></a>.</EmailMe>
     */}
     
    </div>
  );
}

export default Contact;
