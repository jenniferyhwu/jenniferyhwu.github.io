import React from "react";
import styled from "styled-components";
import GlobalStyle from "./theme/globalStyles";
import About from "./sections/About";
import Work from "./sections/Work";
import Links from "./sections/Links";
import Background from "./components/Background";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import GlobalConstants from "./theme/globalConstants";

const Container = styled.div`
  background: none;
  min-height: 100vh;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  padding: 8vw 10vw;
  padding-bottom: 3em;

  @media (max-width: ${GlobalConstants.breakpoint.tablet}px) {
    min-width: 100vw;
    padding: 10vh 5vw;
  }

  @media (max-width: ${GlobalConstants.breakpoint.smallTablet}px) {
    padding: 5vh 5vw;
  }
`;

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <WrapperContainer>
      <Background />
      <Container>
        <GlobalStyle />
        <About />
        <Links />
        <Work />
        <Projects />
        <Footer />
      </Container>
    </WrapperContainer>
  );
}

export default App;
