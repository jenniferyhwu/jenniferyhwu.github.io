import React from "react";
import styled, { keyframes, Keyframes, css } from "styled-components";
import { rollIn } from "react-animations";
import { GitHub, FileText, Linkedin, Send } from "react-feather";
import GlobalConstants from "src/theme/globalConstants";

const icons: Record<string, any> = {
  resume: <FileText color="white" size={64} strokeWidth={1} />,
  github: <GitHub color="white" size={64} strokeWidth={1} />,
  linkedin: <Linkedin color="white" size={64} strokeWidth={1} />,
  contact: <Send color="white" size={64} strokeWidth={1} />,
};

const rollInAnimation: Keyframes = keyframes`${rollIn}`;

interface BubbleProps {
  icon: string;
}

const Container = styled.div`
  background: #009bbd;
  border-radius: 50%;
  box-shadow: 4px 10px 8px 0 rgba(0, 0, 0, 0.07),
    0 10px 15px 0 rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6em;
  width: 6em;
  padding: 2em;
  margin: 2em;
  animation: ${css`1s ${rollInAnimation}`};

  @media (max-width: ${GlobalConstants.breakpoint.medium}px) {
    height: 4em;
    width: 4em;
    margin: 1em;
  }
`;

const Bubble: React.FC<BubbleProps> = ({ icon }) => {
  const popBubble = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transition = "all .15s ease-out";
    e.currentTarget.style.transform = "scale(1.08)";
    //e.currentTarget.style.background = "#ffb5c5";
  };

  const unPopBubble = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transition = "all .2s ease-in";
    e.currentTarget.style.transform = "scale(1)";
    //e.currentTarget.style.background = "#009bbd";
  };

  return (
    <Container onMouseEnter={popBubble} onMouseLeave={unPopBubble}>
      {icons[icon]}
    </Container>
  );
};

export default Bubble;
