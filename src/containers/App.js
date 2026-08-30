import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './Header.js'
import Footer from './Footer.js'
import { ColorScheme } from '../theme/styleConstants.js'

const SiteWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: ${ColorScheme.accent};
`;

const ContainerDiv = styled.main`
  flex: 1;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: 32px 24px 48px;
  background: ${ColorScheme.white};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export const SectionTitle = styled.h3`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${ColorScheme.secondary};
  border-bottom: 2px solid ${ColorScheme.primary};
  display: inline-block;
  padding-bottom: 6px;
  margin: 0 0 20px;
`;

function App() {
  return (
    <SiteWrapper>
      <Header />
      <ContainerDiv>
        <Outlet />
      </ContainerDiv>
      <Footer />
    </SiteWrapper>
  );
}

export default App;
