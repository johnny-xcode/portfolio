import React from 'react';

import { SectionTitle } from './App.js'

function Contact() {
  return (
    <div>
      <SectionTitle>Get in Touch</SectionTitle>

      <div className="bg-mainLight border border-border rounded-md p-5 mb-7">
        <p className="my-1">Block 29 Lot 9 Fiesta Communities, San Rafael, Tarlac City 2300, Philippines</p>
        <p className="my-1">+63 976 022 0800</p>
        <p className="my-1"><a href="mailto:jhontab@gmail.com"><strong>jhontab@gmail.com</strong></a></p>
      </div>

    </div>
  );
}

export default Contact;
