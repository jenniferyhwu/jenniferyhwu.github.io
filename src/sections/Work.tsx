import React from 'react';
import styled from 'styled-components';
import Card from 'src/components/Card';

const work = [
  {
    title: "Hack the North",
    description: "Frontend Developer - building out the 2020 site, attendee dashboard, component library, and more at Canada's biggest hackathon",
    background: "#f5fdff"
  },
  {
    title: "FreshBooks",
    description: "Full Stack Developer Intern (API team) - working on internal tooling as well as new features for third-party developers",
    background: "#ebf9ff"
  },
  {
    title: "Evertz",
    description: "Software Developer Intern (FLEX team) - implementing a client-side dashboard for the team's cloud orchestration tool",
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