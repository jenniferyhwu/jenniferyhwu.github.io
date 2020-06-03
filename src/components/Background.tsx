import React from "react";
import styled from "styled-components";
import GlobalConstants from "src/theme/globalConstants";

const BackgroundLayer = styled.div`
  background: #e1feff;
  opacity: 0.3;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;

  @media (max-width: ${GlobalConstants.breakpoint.tablet}px) {
    background: #bff1ff;
  }
`;

const Background: React.FC = () => {
  return <BackgroundLayer />;
};

export default Background;
