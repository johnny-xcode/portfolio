import React from "react";
import styled from "styled-components";

import { SectionTitle } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const Card = styled.div`
  border: 1px solid ${ColorScheme.border};
  border-radius: 6px;
  padding: 16px 18px;
  background: #fff;

  .title {
    margin: 0 0 4px;
    font-size: 1.1rem;
    font-weight: 700;
    color: ${ColorScheme.secondary};
  }

  .desc {
    margin: 0 0 10px;
  }
`;

const VisitButton = styled.a`
  display: inline-block;
  padding: 9px 16px;
  background: ${ColorScheme.primary};
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: ${ColorScheme.third};
    text-decoration: none;
    color: #fff;
  }
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0 0 12px;
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

function SideProject() {
  return (
    <div>
      <SectionTitle>Side Project</SectionTitle>

      <Card>
        <p className="title">PERN Stack App</p>
        <p className="desc">
          A web application built with the PERN stack — PostgreSQL, Express, React,
          and Node.js. Explore it live below.
        </p>
        <UsedList>
          <UsedItem>PostgreSQL</UsedItem>
          <UsedItem>Express</UsedItem>
          <UsedItem>React</UsedItem>
          <UsedItem>Node.js</UsedItem>
        </UsedList>
        <VisitButton
          href="https://pern-pugg.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visit the app
        </VisitButton>
      </Card>
    </div>
  );
}

export default SideProject;
