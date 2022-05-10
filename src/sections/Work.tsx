import React from "react";
import styled from "styled-components";
import Card from "src/components/Card";

const work = [
  {
    title: "NerdWallet",
    link: "https://www.nerdwallet.com/",
    subtitle: "Software Engineer Intern",
    timePeriod: "Jan 2022 - Apr 2022",
    description: "Adding support for unified tooling and creating new React components from implemention to A/B testing",
    tools: ["react", "redux", "graphql", "typescript", "jest", "mocha"],
    background: "#f5fdff",
  },
  {
    title: "PagerDuty (Frontend Team)",
    link: "https://www.pagerduty.com/",
    subtitle: "Software Developer Intern",
    timePeriod: "May 2021 - Aug 2021",
    description: "Driving a revamp of the invoices service, migrating apps to containers, and investigating design systems",
    tools: ["react", "redux", "javascript", "ruby", "aws s3", "jest"],
    background: "#f5fdff",
  },
  {
    title: "PagerDuty (Sustainability Team)",
    link: "https://www.pagerduty.com/",
    subtitle: "Software Developer Intern",
    timePeriod: "Sep 2020 - Dec 2020",
    description: "Refactoring to microservices and dynamic partitioning in Kafka",
    tools: ["ruby", "elixir", "kafka", "react", "redux", "javascript", "jest"],
    background: "#ebf9ff",
  },
  {
    title: "Hack the North",
    link: "https://2020.hackthenorth.com/",
    subtitle: "Frontend Developer",
    timePeriod: "Mar 2020 - Jan 2021",
    description:
      "Creating the 2020 site, attendee dashboard, hacker applications, component library, and more at Canada's biggest hackathon",
    tools: ["react", "typescript", "styled-components", "jest", "cypress"],
    background: "#ebf9ff",
  },
  {
    title: "FreshBooks",
    link: "https://www.freshbooks.com/",
    subtitle: "Full Stack Developer Intern",
    timePeriod: "Jan 2020 - Apr 2020",
    description:
      "Internal tooling and improving the third-party developer experience",
    tools: ["python", "ruby", "ember.js", "javascript"],
    background: "#e0f6ff",
  },
  {
    title: "Evertz",
    link: "https://evertz.com/",
    subtitle: "Software Developer Intern",
    timePeriod: "May 2019 - Aug 2019",
    description:
      "Building out the web client for a cloud orchestration product from the ground up",
    tools: ["angular", "typescript", "java"],
    background: "#e0f6ff",
  },
];

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
      {work.map((item) => {
        return <Card key={item.title} {...item} />;
      })}
    </Container>
  );
};

export default Work;
