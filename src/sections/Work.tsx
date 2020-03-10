import React from 'react';
import styled from 'styled-components';
import CardGallery from '../components/CardGallery';

const Header = styled.h1`
  color: #009bbd;
  letter-spacing: 0.3em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Work: React.FC = () => {
  return (
    <Container>
      <Header>WHAT I DO</Header>
      <CardGallery />
    </Container>
  )
}

export default Work