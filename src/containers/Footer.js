import React from 'react';

function Footer() {
  return (
    <footer className="bg-secondary text-[#cbd8e2] text-center px-6 py-5">
      <div className="max-w-[920px] mx-auto">
        <p className="my-1 text-[0.85rem]">© {new Date().getFullYear()} Johnny Acierto Tabong</p>
        <p className="my-1 text-[0.85rem]">Full-Stack Developer | Laravel | React JS | C# .NET</p>
      </div>
    </footer>
  );
}

export default Footer;
