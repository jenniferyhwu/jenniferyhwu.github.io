import React from 'react';
import styled, { Keyframes, keyframes, css } from 'styled-components';
import { fadeIn } from 'react-animations';
import Bubble from 'src/components/Bubble';

const links = [
  {
    label: "RESUME",
    icon: "resume",
    path: process.env.PUBLIC_URL + "/resume.pdf"
  },
  {
    label: "GITHUB",
    icon: "github",
    path: "https://github.com/jenniferyhwu"
  },
  {
    label: "LINKEDIN",
    icon: "linkedin",
    path: "https://www.linkedin.com/in/jyhwu/"
  },
  {
    label: "EMAIL",
    icon: "contact",
    path: "mailto:jyhwuuu@gmail.com"
  }
]

const fadeInAnimation: Keyframes = keyframes`${fadeIn}`;

const BubbleLabel = styled.h3`
  color: #7ec0ce;
  font-size: 1.2em;
  margin-top: 0;
`;

const Tagline = styled.h2`
  color: #00add2;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BubbleLinkWrapper = styled.a`
  text-decoration: none;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 767px) {
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 -2em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
  animation: ${css`1s ${fadeInAnimation}`};

  @media (max-width: 767px) {
    margin: 1em 0;
  }
`;

const Highlight: React.FC = () => {
  let isMobile = window.innerWidth <= 750;

  return (
    <Container>
      <Tagline>Looking for Fall 2020 internships!</Tagline>
      <SubContainer>
        {links.map(item => {
          return (
            <BubbleLinkWrapper href={item.path}>
              <BubbleContainer>
                <Bubble key={item.label} icon={item.icon}  />
                {isMobile ? null : <BubbleLabel key={item.label}>{item.label}</BubbleLabel>}
              </BubbleContainer>
            </BubbleLinkWrapper>
          )
        })}
      </SubContainer>
    </Container>
  )
}

export default Highlight