import React from "react";
import styled, { Keyframes, keyframes, css } from "styled-components";
import { fadeIn } from "react-animations";
import Bubble from "src/components/Bubble";
import { useWindowSize } from "src/utils/useWindowSize";
import GlobalConstants from "src/theme/globalConstants";
import LinkContainer from "src/components/LinkContainer";

const links = [
  {
    label: "RESUME",
    icon: "resume",
    path: process.env.PUBLIC_URL + "/resume.pdf",
  },
  {
    label: "GITHUB",
    icon: "github",
    path: "https://github.com/jenniferyhwu",
  },
  {
    label: "LINKEDIN",
    icon: "linkedin",
    path: "https://www.linkedin.com/in/jyhwu/",
  },
  {
    label: "EMAIL",
    icon: "contact",
    path: "mailto:jyhwuuu@gmail.com",
  },
];

const fadeInAnimation: Keyframes = keyframes`${fadeIn}`;

const BubbleLabel = styled.h3`
  color: #7ec0ce;
  font-size: 1.2em;
  margin-top: 0;
`;

const Tagline = styled.h2`
  color: #00add2;
  text-align: center;
`;

// const SubTagline = styled(Tagline)`
//   color: #7ec0ce;
//   font-size: 1em;
//   margin-top: 0;
// `;

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${GlobalConstants.breakpoint.smallTablet}px) {
    max-width: 475px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
  animation: ${css`1s ${fadeInAnimation}`};

  @media (max-width: ${GlobalConstants.breakpoint.smallTablet}px) {
    margin: 1em 0;
  }
`;

const Highlight: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const isSmallTablet = windowWidth <= GlobalConstants.breakpoint.smallTablet;

  return (
    <Container>
      <Tagline>Looking for 2023 New Grad SWE Opportunities!</Tagline>
      <SubContainer>
        {links.map((item) => {
          return (
            <LinkContainer key={item.label} href={item.path} target="_blank">
              <BubbleContainer>
                <Bubble icon={item.icon} />
                {isSmallTablet ? null : (
                  <BubbleLabel key={item.label}>{item.label}</BubbleLabel>
                )}
              </BubbleContainer>
            </LinkContainer>
          );
        })}
      </SubContainer>
    </Container>
  );
};

export default Highlight;
