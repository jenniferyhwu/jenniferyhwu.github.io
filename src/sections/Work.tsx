import React from 'react';
import styled from 'styled-components';
import Card from 'src/components/Card';

const work = [
  {
    title: "Hack the North",
    subtitle: "Frontend Developer",
    description: "Building out the 2020 site, attendee dashboard, component library, and more at Canada's biggest hackathon",
    tools: ["react", "typescript", "styled-components"],
    background: "#f5fdff"
  },
  {
    title: "FreshBooks",
    subtitle: "Full Stack Developer Intern (API team)",
    description: "Working on internal tooling as well as new features for third-party developers",
    tools: ["python", "ruby", "ember.js", "javascript"],
    background: "#ebf9ff"
  },
  {
    title: "Evertz",
    subtitle: "Software Developer Intern (FLEX team)",
    description: "Implementing a client-side dashboard for the team's cloud orchestration tool",
    tools: ["angular", "typescript", "java"],
    background: "#e0f6ff"
  }
]

const Header = styled.h1`
  color: #009bbd;
  letter-spacing: 0.3em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0;
`;

const Work: React.FC = () => {
  return (
    <Container>
      <Header>MY WORK</Header>
      {work.map(item => {
        return <Card key={item.title} {...item} />
      })}
    </Container>
  )
}

export default Work