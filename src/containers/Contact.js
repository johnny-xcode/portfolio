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

      {/* <div className="mx-auto w-full max-w-[520px]">
        <form action="https://formspree.io/jhontab@gmail.com" method="POST" id="contactform">
          <div>
            <label className="block mb-1 font-semibold">Name:</label>
            <input className="w-full p-2 border border-border rounded mb-3" type="text" name="name" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email:</label>
            <input className="w-full p-2 border border-border rounded mb-3" type="text" name="_replyto" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Comment:</label>
            <textarea className="w-full h-24 p-2 border border-border rounded mb-3" name="comment" />
          </div>
          <button className="block w-full p-2.5 bg-primary text-white rounded font-semibold cursor-pointer hover:bg-third" type="submit">Submit</button>
        </form>
      </div>

      <p className="text-center p-[4%]">Or, just email me directly at <a href="mailto:jhontab@gmail.com" target="_blank" rel="noreferrer"><strong>jhontab@gmail.com</strong></a>.</p>
     */}
    </div>
  );
}

export default Contact;
