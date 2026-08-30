import React from "react";
import styled from "styled-components";

import { SectionTitle } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const Card = styled.div`
  border: 1px solid ${ColorScheme.border};
  border-radius: 6px;
  padding: 16px 18px;
  margin-bottom: 18px;
  background: #fff;

  .title {
    margin: 0 0 4px;
    font-size: 1.1rem;
    font-weight: 700;
    color: ${ColorScheme.secondary};
  }

  .org {
    margin: 0 0 2px;
    font-weight: 600;
  }

  .dates {
    font-size: 0.8rem;
    color: #66707a;
    margin: 0 0 4px;
  }

  .stack {
    font-size: 0.8rem;
    color: #7a858f;
    font-style: italic;
    margin: 0 0 8px;
  }

  .desc {
    margin: 0 0 10px;
  }
`;

const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
`;

const WorkImage = styled.img`
  max-width: 100%;
  border: 1px solid ${ColorScheme.border};
  border-radius: 4px;
  flex: 1 1 40%;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
`;

const UsedItem = styled.li`
  padding: 5px 10px 4px;
  color: #fff;
  background: ${ColorScheme.primary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const sharedImages = [
  { src: require("../assets/WSM1.png"), alt: "WSM screenshot 1" },
  { src: require("../assets/WSM2.png"), alt: "WSM screenshot 2" },
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
    dates: "Mar 2023 - Dec 2025",
    stack: "C#, .NET WinForms, EF Core 3.1, Laravel 7/8/10, React 17, React Query, MySQL, SQL Server, IIS",
    desc: "Developed and maintained an HR attendance management system using QR codes, alongside the Helpdesk Ticket Tracking System, POS, Back Office, and Head Office systems. Built inventory tracking and stock movement modules and enhanced reporting capabilities.",
    images: sharedImages,
    tags: ["C# .NET", "React 17", "Laravel", "EF Core", "SQL Server"],
  },
  {
    title: "FamilyMart POS System",
    org: "Action. Able Inc. — Microsoft C# Developer",
    dates: "Jul 2020 - Feb 2023",
    stack: "C#, .NET WinForms, EF Core 3.1, Laravel 7/8, MySQL, SQL Server, IIS",
    desc: "Developed and maintained the FamilyMart POS system and built C# console applications to synchronize POS and Head Office data, improving performance, stability, and scalability.",
    images: sharedImages,
    tags: ["C# .NET", "WinForms", "EF Core", "MySQL"],
  },
  {
    title: "POS & Back-Office Modernization",
    org: "Cindy's Bakery and Restaurant — Programmer Lead",
    dates: "Dec 2015 - Jun 2020",
    stack: "C#, ASP.NET Web API, WCF, CodeIgniter 3, MySQL, MS SQL Server, SSRS",
    desc: "Led the migration of legacy VB6/VB.NET desktop applications to C# WinForms, architected real-time data synchronization APIs between distributed POS stores and head office, and built SSRS report server capabilities.",
    images: sharedImages,
    tags: ["C# WinForms", "ASP.NET Web API", "CodeIgniter", "SSRS"],
  },
];

function RecentWork() {
  return (
    <div>
      <SectionTitle>Recent Work</SectionTitle>
      {projects.map((project, idx) => (
        <Card key={idx}>
          <p className="title">{project.title}</p>
          <p className="org">{project.org}</p>
          <p className="dates">{project.dates}</p>
          <p className="stack">{project.stack}</p>
          <p className="desc">{project.desc}</p>
          {project.images.length > 0 && (
            <ImageRow>
              {project.images.map((img, i) => (
                <WorkImage key={i} src={img.src} alt={img.alt} />
              ))}
            </ImageRow>
          )}
          <UsedList>
            {project.tags.map((tag, i) => (
              <UsedItem key={i}>{tag}</UsedItem>
            ))}
          </UsedList>
        </Card>
      ))}
    </div>
  );
}

export default RecentWork;
