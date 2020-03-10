import React, { useState } from 'react';
import styled, { keyframes, Keyframes, css } from 'styled-components';
import { slideInLeft, slideInRight } from 'react-animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircle as fasFaCircle } from '@fortawesome/free-solid-svg-icons'

import Card from '../components/Card';

const slideInLeftAnimation: Keyframes = keyframes`${slideInLeft}`;
const slideInRightAnimation: Keyframes = keyframes`${slideInRight}`;

const TrackerContainer = styled.div<any>`
  color: #009bbd;
  display: flex;
  justify-content: center;

  .fa-circle {
    font-size: 1em;

    :nth-child(n+3) {
      margin-left: 1em;
    }
  }

  .tracker-icon {
    position: relative;
    margin-right: -1em;
    left: ${props => `calc(${props.shift} * 2em)` };
  } 
`;

const CardContainer = styled.div<any>`
  flex: 0 0 100%;
  position: relative;

  right: ${props => `calc(${props.shiftAmount} * 100%)` };
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5em 0;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100%;
`;

const CardGallery: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  let shiftDir = "appear";

  const changeActiveCard = (nextCard: number) => {
    if (activeCard === nextCard) return;
    shiftDir = activeCard > nextCard ? "left" : "right";
    setActiveCard(nextCard);
  }

  return (
    <Container>
      <ContentContainer>
        <CardContainer shiftAmount={activeCard} shiftDir={shiftDir}>
          <Card titleText={"Hello!"} />
        </CardContainer>
        <CardContainer shiftAmount={activeCard} shiftDir={shiftDir}>
          <Card titleText={"Excuse me?"} />
        </CardContainer>
        <CardContainer shiftAmount={activeCard} shiftDir={shiftDir}>
          <Card titleText={"Fuck you"} />
        </CardContainer>
      </ContentContainer>
      <TrackerContainer shiftAmount={activeCard} shiftDir={shiftDir}>
        <FontAwesomeIcon className="tracker-icon" icon={fasFaCircle} />
        <FontAwesomeIcon onClick={() => changeActiveCard(0)} icon={farFaCircle} />
        <FontAwesomeIcon onClick={() => changeActiveCard(1)} icon={farFaCircle} />
        <FontAwesomeIcon onClick={() => changeActiveCard(2)} icon={farFaCircle} />
      </TrackerContainer>
    </Container>
  )
}

export default CardGallery