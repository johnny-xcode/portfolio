import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../theme/styleConstants.js'

const FooterDiv = styled.footer`
  background: ${ColorScheme.secondary};
  color: #cbd8e2;
  text-align: center;
  padding: 20px 24px;
`;

const FooterInner = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

const Line = styled.p`
  margin: 4px 0;
  font-size: 0.85rem;
`;

const Credit = styled.p`
  margin: 8px 0 0;
  font-size: 0.72rem;
  color: #8fa6b5;

  a {
    color: #b8ccd9;
  }
`;

function Footer() {
  return (
    <FooterDiv>
      <FooterInner>
        <Line>© {new Date().getFullYear()} Johnny Acierto Tabong</Line>
        <Line>Full-Stack Developer | Laravel | React JS | C# .NET</Line>
      </FooterInner>
    </FooterDiv>
  );
}

export default Footer;
