import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  background?: string;
}

const Text = styled.p`
  color: #19798d;
  font-size: 1.3em;
  font-weight: 300;
  font-family: Roboto;
  line-height: 1.5em;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Header = styled.h2`
  color: #009bbd;
  letter-spacing: 0.2em;
`;

const Container = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  //border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07), 0 6px 15px 0 rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  height: 15em;
  padding: 2em;
  margin: 20px;
  position: relative;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;

  @media (max-width: 767px) {
    margin: 20px 0;
    width: 100vw;
    height: 16em;
    padding: 20px;
  }

  &::after {
    content: '';
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.13), 0 6px 15px 0 rgba(0, 0, 0, 0.07);
    opacity: 0;
    height: 100%;
    width: 100%;
    //border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.01);
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Card: React.FC<CardProps> = ({ title, description, background = "white"}) => {
  return (
    <Container background={background}>
      <Header>{title}</Header>
      <Text>{description}</Text>
    </Container>
  )
}

export default Card