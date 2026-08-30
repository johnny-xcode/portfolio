import React from "react";

import { SectionTitle } from "./App.js";

function Code() {
  return (
    <div>
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-mainLight border border-border border-l-4 border-l-primary rounded-md p-3.5">
          <h5 className="m-0 mb-2 uppercase tracking-[0.5px] text-[0.85rem] text-secondary">Languages</h5>
          <p className="m-0">PHP, C#, VB.NET, VB6, Java</p>
        </div>
        <div className="bg-mainLight border border-border border-l-4 border-l-primary rounded-md p-3.5">
          <h5 className="m-0 mb-2 uppercase tracking-[0.5px] text-[0.85rem] text-secondary">Frontend</h5>
          <p className="m-0">React JS, JavaScript, TypeScript, jQuery, Bootstrap, Zustand</p>
        </div>
        <div className="bg-mainLight border border-border border-l-4 border-l-primary rounded-md p-3.5">
          <h5 className="m-0 mb-2 uppercase tracking-[0.5px] text-[0.85rem] text-secondary">Frameworks</h5>
          <p className="m-0">Laravel (7, 8, 11, 12), CodeIgniter 3, .NET WinForms, EF Core, LINQ, WCF, Hibernate</p>
        </div>
        <div className="bg-mainLight border border-border border-l-4 border-l-primary rounded-md p-3.5">
          <h5 className="m-0 mb-2 uppercase tracking-[0.5px] text-[0.85rem] text-secondary">Databases</h5>
          <p className="m-0">SQL Server, MySQL, PostgreSQL</p>
        </div>
        <div className="bg-mainLight border border-border border-l-4 border-l-primary rounded-md p-3.5">
          <h5 className="m-0 mb-2 uppercase tracking-[0.5px] text-[0.85rem] text-secondary">Tools</h5>
          <p className="m-0">Git, JasperReports, Crystal Reports, SSRS</p>
        </div>
        <div className="bg-mainLight border border-border border-l-4 border-l-primary rounded-md p-3.5">
          <h5 className="m-0 mb-2 uppercase tracking-[0.5px] text-[0.85rem] text-secondary">Knowledge</h5>
          <p className="m-0">Node.js / Express</p>
        </div>
        <div className="bg-mainLight border border-border border-l-4 border-l-primary rounded-md p-3.5">
          <h5 className="m-0 mb-2 uppercase tracking-[0.5px] text-[0.85rem] text-secondary">Platforms &amp; Cloud</h5>
          <p className="m-0">IIS, AWS</p>
        </div>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <SectionTitle>Core Skills</SectionTitle>
      <ul className="list-none p-0 flex flex-wrap gap-2">
        {[
          "Full-Stack Web Development",
          "Laravel Development",
          "React JS Development",
          "C# .NET Desktop (WinForms)",
          "POS System Development",
          "Inventory Management Systems",
          "REST API Development",
          "Database Design & Optimization",
          "Code Reviews",
          "Software Design & Architecture",
          "Legacy System Modernization",
        ].map((skill) => (
          <li
            key={skill}
            className="bg-white border border-border text-secondary rounded-full px-3.5 py-1.5 text-[0.85rem]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Code;
