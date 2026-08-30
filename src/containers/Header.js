import React from 'react';
import { NavLink, Link } from 'react-router-dom'

function Header() {
  const navClass =
    "px-3 py-1.5 rounded text-[0.92rem] text-[#d7e3ec] hover:text-white hover:bg-white/10 no-underline";

  return (
    <header className="bg-secondary text-white px-6 shadow-md">
      <div className="w-full max-w-[920px] mx-auto flex items-center justify-between flex-wrap py-3">
        <Link to="/" className="text-white font-bold text-[1.1rem] tracking-wide hover:text-white hover:no-underline">
          Johnny Acierto Tabong
        </Link>
        <nav className="flex flex-wrap gap-1">
          <NavLink to="/" end className={({ isActive }) => `${navClass} ${isActive ? "bg-primary text-white" : ""}`}>
            About
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => `${navClass} ${isActive ? "bg-primary text-white" : ""}`}>
            Skills
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => `${navClass} ${isActive ? "bg-primary text-white" : ""}`}>
            Experience
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => `${navClass} ${isActive ? "bg-primary text-white" : ""}`}>
            Recent Work
          </NavLink>
          <NavLink to="/side-project" className={({ isActive }) => `${navClass} ${isActive ? "bg-primary text-white" : ""}`}>
            Side Project
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${navClass} ${isActive ? "bg-primary text-white" : ""}`}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
