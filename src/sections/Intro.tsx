import React from 'react';
import styled from 'styled-components';

const InfoLink = styled.a`
  color: #7ec0ce;
  font-size: 1.2em;
  text-decoration: none;
`;

const InfoLinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  > :not(:first-child) {
    margin-left: 30px;
  }
`;

const Tagline = styled.h2`
  color: #00add2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Intro: React.FC = () => {
  return (
    <Container>
      <Tagline>Insert tagline here, I can't think of anything</Tagline>
      <InfoLinksContainer>
        <InfoLink>github</InfoLink>
        <InfoLink>linkedin</InfoLink>
        <InfoLink>contact</InfoLink>
        <InfoLink>resume</InfoLink>
      </InfoLinksContainer>
    </Container>
  )
}

export default Intro