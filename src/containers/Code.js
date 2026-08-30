import React from "react";
import styled from "styled-components";

import { SectionTitle } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${ColorScheme.mainLight};
  border: 1px solid ${ColorScheme.border};
  border-left: 4px solid ${ColorScheme.primary};
  border-radius: 6px;
  padding: 14px 16px;

  h5 {
    margin: 0 0 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.85rem;
    color: ${ColorScheme.secondary};
  }

  p {
    margin: 0;
  }
`;

const CoreSkills = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    background: ${ColorScheme.white};
    border: 1px solid ${ColorScheme.border};
    color: ${ColorScheme.secondary};
    border-radius: 20px;
    padding: 5px 14px;
    font-size: 0.85rem;
    margin: 0;
  }
`;

function Code() {
  return (
    <div>
      <SectionTitle>Technical Skills</SectionTitle>

      <Grid>
        <Card><h5>Languages</h5><p>PHP, C#, VB.NET, VB6, Java</p></Card>
        <Card><h5>Frontend</h5><p>React JS, JavaScript, TypeScript, jQuery, Bootstrap, Zustand</p></Card>
        <Card>
          <h5>Frameworks</h5>
          <p>Laravel (7, 8, 11, 12), CodeIgniter 3, .NET WinForms, EF Core, LINQ, WCF, Hibernate</p>
        </Card>
        <Card><h5>Databases</h5><p>SQL Server, MySQL, PostgreSQL</p></Card>
        <Card><h5>Tools</h5><p>Git, JasperReports, Crystal Reports, SSRS</p></Card>
        <Card><h5>Knowledge</h5><p>Node.js / Express</p></Card>
        <Card><h5>Platforms &amp; Cloud</h5><p>IIS, AWS</p></Card>
      </Grid>

      <hr style={{ margin: '30px 0' }} />

      <SectionTitle>Core Skills</SectionTitle>
      <CoreSkills>
        <li>Full-Stack Web Development</li>
        <li>Laravel Development</li>
        <li>React JS Development</li>
        <li>C# .NET Desktop (WinForms)</li>
        <li>POS System Development</li>
        <li>Inventory Management Systems</li>
        <li>REST API Development</li>
        <li>Database Design &amp; Optimization</li>
        <li>Code Reviews</li>
        <li>Software Design &amp; Architecture</li>
        <li>Legacy System Modernization</li>
      </CoreSkills>
    </div>
  );
}

export default Code;
