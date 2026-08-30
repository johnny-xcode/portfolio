import React from "react";

import { SectionTitle } from "./App.js";

const jobs = [
  {
    role: "Systems Developer",
    company: "Phoenix Petroleum Philippines Inc.",
    dates: "Jan 2026 - September 2026",
    stack: "Laravel 12, React JS 18, TypeScript, Zustand, AWS Services",
    points: [
      "Design and develop the Retail Pricing / Wet Stock Management System (RPS/WSM).",
      "Participate in system architecture, code reviews, database optimization, and production deployments.",
    ],
  },
  {
    role: "IT Consultant - Application Developer",
    company: "Phoenix Petroleum Philippines Inc.",
    dates: "Mar 2023 - Dec 2025",
    stack: "C#, .NET WinForms, EF Core 3.1, Laravel 7/8/10, React 17, React Query, MySQL, SQL Server, IIS, AWS Services",
    points: [
      "Enhance and support the Helpdesk Ticket Tracking System.",
      "Continued to develop and maintain the HR Attendance Management System using QR Code until production.",
      "Maintained POS, Back Office, and Head Office systems.",
      "Developed inventory tracking and stock movement modules and enhanced reporting capabilities.",
      "Supported business-critical applications and resolved production issues.",
    ],
  },
  {
    role: "Microsoft C# Developer",
    company: "Action. Able Inc.",
    dates: "Jul 2020 - Feb 2023",
    stack: "C#, .NET WinForms, EF Core 3.1, Laravel 7/8, MySQL, SQL Server, IIS",
    points: [
      "Developed and maintained the FamilyMart POS System.",
      "Built C# console applications to synchronize POS and Head Office data.",
      "Improved performance, stability, and scalability; performed code reviews, debugging, testing, and feature enhancements.",
    ],
  },
  {
    role: "Programmer Lead",
    company: "Cindy's Bakery and Restaurant",
    dates: "Dec 2015 - Jun 2020",
    stack: "C#, ASP.NET Web API, WCF, Core PHP (Legacy), CodeIgniter 3, VB6, VB.NET, MySQL, MS SQL Server, SSRS",
    points: [
      "Spearheaded the modernization roadmap and led the migration of legacy VB6/VB.NET desktop applications to maintainable C# WinForms applications.",
      "Designed and developed custom online ordering and delivery management portals using legacy Core PHP architecture.",
      "Architected an internal ticketing system in Core PHP and modernized it into CodeIgniter 3.",
      "Developed scalable ASP.NET Web APIs for real-time data synchronization between distributed POS stores and main/head office.",
      "Created Report Server (SSRS) for Head Office reports, pulling data for daily, weekly, and monthly sales reports including slow and fast moving products.",
    ],
  },
  {
    role: "MS Access Developer",
    company: "Data Stream Solutions GmbH",
    dates: "Jan 2014 - May 2015",
    stack: "MS Access, C#, VB.NET",
    points: [
      "Built automated business intelligence and custom reporting tools to simplify complex data entry and reporting workflows.",
    ],
  },
  {
    role: "Junior Java / FoxPro Programmer",
    company: "Z Getcare Systems Inc.",
    dates: "Mar 2011 - Mar 2014",
    stack: "Java/J2EE, Hibernate, PostgreSQL, Visual FoxPro, JasperReports, JSP, Struts, PHP",
    points: [
      "Created a Time Management System in Visual FoxPro.",
      "Maintained and converted legacy desktop applications to web-based Java applications (J2EE, Hibernate, JSP).",
      "Created and designed JasperReports for fast, dynamic report output across web application sites.",
      "Built an assessment test page that generates scores based on user input.",
      "Maintained and enhanced company web applications and created client-requested reports.",
      "Experience in HTML, JavaScript, jQuery, and PostgreSQL SQL scripting.",
    ],
  },
  {
    role: "IT Programmer",
    company: "Aderans Philippines Inc.",
    dates: "Jan 2010 - Jan 2011",
    stack: "VB.NET, MS Access, MS SQL Server",
    points: [
      "Maintained Time & Attendance systems for payroll integration and supported manufacturing plant IT operations.",
    ],
  },
];

function Writing() {
  return (
    <div>
      <SectionTitle>Professional Experience</SectionTitle>
      {jobs.map((job, idx) => (
        <div key={idx} className="border border-border rounded-md p-3.5 mb-4 bg-white">
          <p className="m-0 text-[1.05rem] font-bold text-secondary">{job.role}</p>
          <p className="mt-0.5 font-semibold">{job.company}</p>
          <p className="mt-0.5 text-[0.8rem] text-[#66707a]">{job.dates}</p>
          <p className="my-1.5 text-[0.8rem] text-[#7a858f] italic">{job.stack}</p>
          <ul className="mt-1.5 pl-[18px]">
            {job.points.map((pt, i) => (
              <li key={i} className="mb-0.5">{pt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Writing;
