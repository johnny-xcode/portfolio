import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header.js'
import Footer from './Footer.js'

export function SectionTitle({ children }) {
  return (
    <h3 className="inline-block m-0 uppercase text-[1.4rem] tracking-[1px] text-secondary border-b-2 border-primary pb-1.5 mb-5">
      {children}
    </h3>
  );
}

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-accent">
      <Header />
      <main className="flex-1 w-full max-w-[920px] mx-auto px-6 py-8 pb-12 bg-white shadow-sm">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
