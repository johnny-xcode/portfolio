import React from 'react';
import styled from 'styled-components';

import { SectionTitle } from './App.js'
import { ColorScheme } from '../theme/styleConstants.js'

const Card = styled.div`
  border: 1px solid ${ColorScheme.border};
  border-radius: 6px;
  padding: 14px 16px;
  margin-bottom: 16px;
  background: #fff;

  h5 {
    margin: 0 0 4px;
    font-size: 1.05rem;
    color: ${ColorScheme.secondary};
  }

  p {
    margin: 0 0 2px;
  }

  .muted {
    color: #66707a;
    font-size: 0.85rem;
  }
`;

function Life() {
  return (
    <div>
      <SectionTitle>Education &amp; More</SectionTitle>

      <Card>
        <h5>BS Computer Science</h5>
        <p>Systems Technology Institute (STI), Tarlac City</p>
        <p className="muted">2001 - 2008</p>
      </Card>

      <Card>
        <h5>References</h5>
        <p>Contact person / professional references available upon request.</p>
      </Card>
    </div>
  );
}

export default Life;
