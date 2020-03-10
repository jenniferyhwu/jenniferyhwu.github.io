import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: #19798d;
  font-size: 1.4em;
  font-weight: 300;
  font-family: Roboto;
  line-height: 1.5em;
`;

const Header = styled.h1`
  color: #009bbd;
  letter-spacing: 0.3em;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const About: React.FC = () => {
  return (
    <Container>
      <Header>ABOUT ME</Header>
      <SubContainer>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </SubContainer>
    </Container>
  )
}

export default About