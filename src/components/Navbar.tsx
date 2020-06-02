import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #7ec0ce;
  font-size: 1.2em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > :not(:first-child) {
    margin-left: 10vw;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <Text>about me</Text>
      <Text>my work</Text>
      <Text>my life</Text>
    </Container>
  );
};

export default Navbar;
