import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: #19798d;
  font-size: 1.3em;
  font-weight: 300;
  font-family: Roboto;
  line-height: 1.5em;
`;

const Header = styled.h2`
  color: #009bbd;
  letter-spacing: 0.3em;
`;

const Container = styled.div`
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.17), 0 6px 15px 0 rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  padding: 2em;
  margin: 20px;
`;

const Card: React.FC<any> = (props: any) => {
  return (
    <Container>
      <Header>{props.titleText}</Header>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet.
      </Text>
    </Container>
  )
}

export default Card