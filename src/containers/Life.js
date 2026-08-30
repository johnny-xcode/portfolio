import React from 'react';

import { SectionTitle } from './App.js'

function Life() {
  return (
    <div>
      <SectionTitle>Education &amp; More</SectionTitle>

      <div className="border border-border rounded-md p-3.5 mb-4 bg-white">
        <h5 className="m-0 mb-1 text-[1.05rem] text-secondary">BS Computer Science</h5>
        <p className="m-0 mb-0.5">Systems Technology Institute (STI), Tarlac City</p>
        <p className="m-0 text-[0.85rem] text-[#66707a]">2001 - 2008</p>
      </div>

      <div className="border border-border rounded-md p-3.5 mb-4 bg-white">
        <h5 className="m-0 mb-1 text-[1.05rem] text-secondary">References</h5>
        <p className="m-0 mb-0.5">Contact person / professional references available upon request.</p>
      </div>
    </div>
  );
}

export default Life;
