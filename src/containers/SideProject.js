import React from "react";

import { SectionTitle } from "./App.js";

function SideProject() {
  return (
    <div>
      <SectionTitle>Side Project</SectionTitle>

      <div className="border border-border rounded-md p-4 bg-white">
        <p className="m-0 mb-1 text-[1.1rem] font-bold text-secondary">PERN Stack App</p>
        <p className="m-0 mb-2.5">
          A web application built with the PERN stack — PostgreSQL, Express, React,
          and Node.js. Explore it live below.
        </p>
        <ul className="list-none p-0 flex flex-wrap gap-1.5 mb-3">
          {["PostgreSQL", "Express", "React", "Node.js"].map((t) => (
            <li
              key={t}
              className="px-2.5 py-1 text-white bg-primary rounded uppercase text-[10px] font-medium tracking-[0.5px]"
            >
              {t}
            </li>
          ))}
        </ul>
        <a
          href="https://pern-pugg.onrender.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-2 bg-primary text-white rounded font-semibold no-underline hover:bg-third hover:text-white hover:no-underline"
        >
          Visit the app
        </a>
      </div>
    </div>
  );
}

export default SideProject;
