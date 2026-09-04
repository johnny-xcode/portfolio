import React, { useState } from "react";

import { SectionTitle } from "./App.js";

const sharedImages = [
  { src: require("../assets/wsm/WSM1.png"), alt: "WSM screenshot 1" },
  { src: require("../assets/wsm/WSM2.png"), alt: "WSM screenshot 2" },
  { src: require("../assets/wsm/WS3.png"), alt: "WSM screenshot 3" },
  { src: require("../assets/wsm/WS4.png"), alt: "WSM screenshot 4" },
  { src: require("../assets/wsm/WS8.png"), alt: "WSM screenshot 5" },
];

const sharedImagesHR = [
  { src: require("../assets/hr/hr1.png"), alt: "hr screenshot 1" },
   { src: require("../assets/hr/hr2.png"), alt: "hr screenshot 1" },
];

const projects = [
  {
    title: "Retail Pricing / Wet Stock Management System (RPS/WSM)",
    org: "Phoenix Petroleum Philippines Inc. — Systems Developer",
    dates: "Jan 2026 - Sep 2026",
    stack: "Laravel 12, React JS 18, TypeScript, Zustand, AWS Services",
    desc: "Designed and developed an enterprise retail pricing and wet stock management system, contributing to system architecture, code reviews, database optimization, and production deployments.",
    images: sharedImages,
    tags: ["Laravel 12", "React 18", "TypeScript", "Zustand", "AWS"],
  },

  {
    title: "HR Attendance Management System (QR Code)",
    org: "Phoenix Petroleum Philippines Inc.",
    dates: "Mar 2024 - Dec 2025",
    stack: "Laravel 10, React 17, React Query, MySQL",
    desc: "Developed and maintained an HR attendance management system using QR codes.",
    images: sharedImagesHR,
     tags: ["Laravel 10", "React 17", "Javascript", "React Query", "AWS"],
  },

  {
    title: "FamilyMart POS System",
    org: "Action. Able Inc. — Microsoft C# Developer",
    dates: "Jul 2020 - Feb 2023",
    stack: "C#, .NET WinForms, EF Core 3.1, Laravel 7/8, MySQL, SQL Server, IIS",
    desc: "Developed and maintained the FamilyMart POS system and built C# console applications to synchronize POS and Head Office data, improving performance, stability, and scalability.",
    tags: ["C# .NET", "WinForms", "EF Core", "MySQL"],
  },
  
  {
    title: "POS & Back-Office Modernization",
    org: "Cindy's Bakery and Restaurant — Programmer Lead",
    dates: "Dec 2015 - Jun 2020",
    stack: "C#, ASP.NET Web API, WCF, CodeIgniter 3, MySQL, MS SQL Server, SSRS",
    desc: "Led the migration of legacy VB6/VB.NET desktop applications to C# WinForms, architected real-time data synchronization APIs between distributed POS stores and head office, and built SSRS report server capabilities.",
    tags: ["C# WinForms", "ASP.NET Web API", "CodeIgniter", "SSRS"],
  },
];

function RecentWork() {
  const [expanded, setExpanded] = useState({});

  const toggle = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div>
      <SectionTitle>Recent Work</SectionTitle>
      {projects.map((project, idx) => (
        <div key={idx} className="border border-border rounded-md p-4 mb-4 bg-white">
          <p className="m-0 mb-1 text-[1.1rem] font-bold text-secondary">{project.title}</p>
          <p className="m-0 mb-0.5 font-semibold">{project.org}</p>
          <p className="m-0 mb-1 text-[0.8rem] text-[#66707a]">{project.dates}</p>
          <p className="m-0 mb-2 text-[0.8rem] text-[#7a858f] italic">{project.stack}</p>
          <p className="m-0 mb-2.5">{project.desc}</p>
          {project.images && project.images.length > 0 && (
            <>
              <div className="flex flex-wrap gap-2.5 my-2.5">
                {project.images
                  .slice(0, expanded[idx] ? project.images.length : 1)
                  .map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      className="max-w-full border border-border rounded flex-[1_1_40%]"
                    />
                  ))}
              </div>
              <button
                onClick={() => toggle(idx)}
                className="mt-4 mb-2 px-3.5 py-1.5 text-[0.85rem] font-semibold text-white bg-[linear-gradient(135deg,#0b7285,#2f4858)] rounded cursor-pointer transition-opacity hover:opacity-90"
              >
                {expanded[idx] ? "Show Less" : `Show All (${project.images.length} photos)`}
              </button>
            </>
          )}
          <ul className="list-none p-0 flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag, i) => (
              <li
                key={i}
                className="px-2.5 py-1 text-white bg-primary rounded uppercase text-[10px] font-medium tracking-[0.5px]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecentWork;
