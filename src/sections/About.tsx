import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: #19798d;
  font-size: 1.4em;
  font-weight: 300;
  font-family: Roboto;
  line-height: 1.5em;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Header = styled.h1`
  color: #009bbd;
  letter-spacing: 0.3em;

  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 50%;

  @media (min-width: 769px) {
    margin-right: 5em;
  }
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 5em;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2em;
  }
`;

const About: React.FC = () => {
  return (
    <Container>
      <ProfileImage src={process.env.PUBLIC_URL + '/me.png'} />
      <SubContainer>
        <Header>ABOUT ME</Header>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </SubContainer>
    </Container>
  )
}

export default About