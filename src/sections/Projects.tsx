import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Gallery from "src/components/Gallery";
import Cloud, { CloudProps } from "src/components/Cloud";
import { useWindowSize } from "src/utils/useWindowSize";
import GlobalConstants from "src/theme/globalConstants";

const projects: CloudProps[] = [
  {
    title: "LitDubs",
    description:
      "Pick a video! Then a language! And voila - a video with its audio dubbed over with the translation.",
    hackathon: "BrickHacks 2019",
    award: "Best Use of Google Cloud Platform",
    devpost: "https://devpost.com/software/lit-dubs",
    github: "https://github.com/kevin51jiang/lit-dubs",
    image: "process.env.PUBLIC_URL + '/me.png'",
  },
  {
    title: "Cali Or Bust",
    description:
      "Bad at interviews? Get some practice with a data-driven app that’ll tell it to you like it is!",
    hackathon: "TOHacks 2019",
    award: "Best Use of Voiceflow",
    devpost: "https://devpost.com/software/tohacks2019",
    github: "https://github.com/jenniferyhwu/TOHacks2019",
    image: "process.env.PUBLIC_URL + '/me.png'",
  },
  {
    title: "Cordelia",
    description:
      "The first thing we did in Boston was get lost because no one had data. Turns out combining maps and SMS solves a similar problem :D",
    hackathon: "BostonHacks 2018",
    award: "Best Use of HERE.com",
    devpost: "https://devpost.com/software/bostonhacks-6mabpz",
    github: "https://github.com/jenniferyhwu/Cordelia",
    image: "process.env.PUBLIC_URL + '/me.png'",
  },
  {
    title: "Siloed",
    description:
      "When we made this, we told ourselves it was so dumb that we'd never put it on any resume or portfolio.",
    hackathon: "TerribleHacks 2019",
    award: "Most Millenial Hack",
    devpost: "https://devpost.com/software/siloed",
    github: "https://github.com/jenniferyhwu/siloed",
    image: "process.env.PUBLIC_URL + '/me.png'",
  },
];

const Header = styled.h1`
  color: #009bbd;
  letter-spacing: 0.3em;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em 0;
`;

// function group<T>(arr: T[], groupSize: number) {
//   const temparray = [];
//   for (let i = 0, j = arr.length; i < j; i += groupSize) {
//     temparray.push(arr.slice(i, i + groupSize));
//   }
//   return temparray;
// }

const getGalleryElements = (groupSize: number) => {
  return projects.map((item) => <Cloud {...item} />);
};

const Projects: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const isTablet = windowWidth <= GlobalConstants.breakpoint.tablet;
  const isMobile = windowWidth <= GlobalConstants.breakpoint.mobile;

  const [content, setContent] = useState(
    getGalleryElements(isMobile ? 1 : isTablet ? 2 : 3)
  );

  useCallback(
    () => setContent(getGalleryElements(isMobile ? 1 : isTablet ? 2 : 3)),
    [isTablet, isMobile]
  );

  return (
    <Container>
      <Header>MY PROJECTS</Header>
      <Gallery numberOfItems={content.length} content={content} />
    </Container>
  );
};

export default Projects;
