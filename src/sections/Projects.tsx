import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from 'src/components/Card';
import Gallery from 'src/components/Gallery';

const projects: GalleryElementProps[] = [
  {
    title: "LitDubs",
    description: "Frontend Developer - building out the 2020 site, attendee dashboard, component library, and various other tools",
    image: "process.env.PUBLIC_URL + '/me.png'"
  },
  {
    title: "Cali-Or-Bust",
    description: "Frontend Developer - building out the 2020 site, attendee dashboard, component library, and various other tools",
    image: "process.env.PUBLIC_URL + '/me.png'"
  },
  {
    title: "Siloed",
    description: "Full Stack Developer Intern (API team) - working on internal tooling as well as new features for third-party developers",
    image: "process.env.PUBLIC_URL + '/me.png'"
  },
  {
    title: "Cordelia",
    description: "Software Developer Intern (FLEX team) - implementing a client-side dashboard for the team's cloud orchestration tool",
    image: "process.env.PUBLIC_URL + '/me.png'"
  },
  {
    title: "Wallai",
    description: "Software Developer Intern (FLEX team) - implementing a client-side dashboard for the team's cloud orchestration tool",
    image: "process.env.PUBLIC_URL + '/me.png'"
  },
  {
    title: "Eigenfaces",
    description: "Full Stack Developer Intern (API team) - working on internal tooling as well as new features for third-party developers",
    image: "process.env.PUBLIC_URL + '/me.png'"
  },
  {
    title: "IScribe",
    description: "Full Stack Developer Intern (API team) - working on internal tooling as well as new features for third-party developers",
    image: "process.env.PUBLIC_URL + '/me.png'"
  },
]

interface GalleryElementProps {
  title: string;
  description: string;
  image: string;
}

const GalleryElementContainer = styled.div`
  border-radius: 50%;
  background: white;
  box-shadow: 3px 4px 26px 2px rgba(61, 105, 122, .07);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10em;
  width: 10em;
  padding: 2em;
  margin: 1.5em;

  @media (max-width: 767px) and (min-width: 400px) {
    height: 12em;
    width: 12em;
  }
`;

const Header = styled.h1`
  color: #009bbd;
  letter-spacing: 0.3em;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em 0;
`;

function group<T>(arr: T[], groupSize: number) {
  const temparray = []; 
  for (let i=0,j=arr.length; i<j; i+=groupSize) {
      temparray.push(arr.slice(i,i+groupSize));
  }
  return temparray;
}

const getGalleryElements = (groupSize: number) => {
  const popBubble = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transition = "all .15s ease-out";
    e.currentTarget.style.transform = "scale(1.08)";
  }

  const unPopBubble = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transition = "all .2s ease-in";
    e.currentTarget.style.transform = "scale(1)";
  }

  return group(projects, groupSize).map(items => 
    <SubContainer>
      {items.map(item => {
        return <GalleryElementContainer onMouseEnter={popBubble} onMouseLeave={unPopBubble}>
          {item.title}
        </GalleryElementContainer>
      })}
    </SubContainer>
  )
}

const Projects: React.FC = () => {
  const isMobile = window.innerWidth <= 767;
  const isTablet = window.innerWidth <= 1024 && window.innerWidth >= 768;
  const content = getGalleryElements(isMobile ? 1 : (isTablet ? 2 : 3));
  
  return (
    <Container>
      <Header>MY PROJECTS</Header>
      <Gallery numberOfItems={content.length} content={content} />
    </Container>
  )
}

export default Projects