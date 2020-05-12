import React from 'react';
import styled from 'styled-components';
import { GitHub, FileText, Linkedin, Send } from 'react-feather';

const icons: Record<string, any> = {
  resume: <FileText color="#00add2" size={32} strokeWidth={1} />,
  github: <GitHub color="#00add2" size={32} strokeWidth={1} />,
  linkedin: <Linkedin color="#00add2" size={32} strokeWidth={1} />,
  contact: <Send color="#00add2" size={32} strokeWidth={1} />
}

const links = [
    {
      label: "resume",
      path: process.env.PUBLIC_URL + "/resume.pdf"
    },
    {
      label: "github",
      path: "https://github.com/jenniferyhwu"
    },
    {
      label: "linkedin",
      path: "https://www.linkedin.com/in/jyhwu"
    },
    {
      label: "contact",
      path: "mailto:jyhwuuu@gmail.com"
    },
  ]

const InfoLink = styled.a`
  color: #00add2;
  font-size: 1em;
  text-decoration: none;
  margin: 0 1em;

  &.highlight {
    color: #00add2;
  }
`;

const InfoLinkSubContainer = styled.div`
  display: flex;
  align-items: center;

  .separator-icon {
    margin: 0 30px;
  }
`;

const InfoLinksContainer = styled.div`
  display: flex;
`;

const Text = styled.p`
  color: #00add2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7em;

  @media (max-width: 767px) {
    margin-top: 4em;
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <InfoLinksContainer>
        {links.map(item => 
          <InfoLinkSubContainer key={item.label}>
            <InfoLink href={item.path}>
              {icons[item.label]}
            </InfoLink>
          </InfoLinkSubContainer>
        )}
      </InfoLinksContainer>
      <Text>Made with 🐣 by Jennifer Wu</Text>
    </Container>
  )
}

export default Footer