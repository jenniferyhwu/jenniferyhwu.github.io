import React from 'react';
import styled, { Keyframes, keyframes, css } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAnimation: Keyframes = keyframes`${fadeInDown}`;

const ME2 = "Hi! I'm Jennifer, and I'm a software developer in my second year of CS at the University of Waterloo! I'm passionate about building things that empower everyday people to dream and create."
const ME3 = "I'm Jennifer, and I'm a software developer in my second year of Computer Science at the University of Waterloo. I'm passionate about building things that empower everyday people to dream and create."
const ME = "I'm Jennifer, and I'm a software developer in my second year of Computer Science at the University of Waterloo. I'm passionate about building things that empower everyday people to dream and create, but mostly I just like coding with fun people 😄"

const Text = styled.p`
  color: #19798d;
  font-size: 1.2em;
  font-weight: 300;
  font-family: Roboto;
  line-height: 1.6em;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Header = styled.h1`
  color: #009bbd;
  letter-spacing: 0.15em;
  margin-bottom: 0.3em;

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

// const Swoop = styled.div`
//   height: 100px;
//   width: 250px;
//   border-radius: 100% 0;
//   background: white;
//   position: absolute;
//   left: -130px;
//   bottom: 0px;
//   z-index: -1;

//   &::after {
//     content: '';
//     height: 130px;
//     width: 220px;
//     background: #e1feff;
//     border-radius: 80% 0;
//     position: absolute;
//     top: -30px;
//     left: -60px;
//     transform: rotateZ(-10deg);
//   }
// `;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 1em 3em;
  box-shadow: 3px 4px 26px 2px rgba(61, 105, 122, .07);
  position: relative;
  animation: ${css`0.8s ${fadeInDownAnimation}`};

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    background: none;
    padding: 0;
    box-shadow: none;
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
        <Header>Hey there!</Header>
        <Text>{ME}</Text>
      </SubContainer>
    </Container>
  )
}

export default About