import React, { useState, useEffect } from 'react';
import styled, { keyframes, Keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faCircle as fasFaCircle,
  faChevronRight as fasChevronRight,
  faChevronLeft as fasChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ChevronsLeft, ChevronsRight } from 'react-feather';

interface GalleryProps {
  numberOfItems: number,
  content: React.ReactElement[]
}

// clean this styling up!!!
// make tracker dot animation nicer
const TrackerContainer = styled.div<{ shiftAmount: number, numberOfItems: number }>`
  color: #009bbd;
  display: flex;
  justify-content: center;

  .fa-circle {
    font-size: 1em;

    &:nth-child(n+3) {
      margin-left: 1em;
    }
  }

  .tracker-icon {
    position: absolute;
    transition: all 0.4s cubic-bezier(.45,.02,.04,1.02);
    transform: ${props => `translateX(calc(-${props.numberOfItems - 0.5}em + 50% + ${props.shiftAmount} * 2em))` };
  } 
`;

const ItemContainer = styled.div`
  flex: 0 0 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ContentContainer = styled.div<{shiftAmount: number}>`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5em;
  transition: all 0.4s cubic-bezier(.45,.02,.04,1.02);
  transform: ${props => `translateX(calc(-1 * ${props.shiftAmount} * 100%))` };
`;

const SubContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 100vw;
  }

  .disabled {
    stroke: gainsboro;
  }

  .chevronsLeft {
    margin-left: -64px;

    @media (max-width: 767px) {
      margin-left: -12px;
      margin-right: -48px;
      z-index: 2;
      width: 48px;
      height: 48px;
    }
  }

  .chevronsRight {
    margin-right: -64px;

    @media (max-width: 767px) {
      margin-right: -12px;
      margin-left: -48px;
      z-index: 2;
      width: 48px;
      height: 48px;
    }
  }
`;

const Gallery: React.FC<GalleryProps> = ({ numberOfItems, content }) => {
  const [activeItem, setActiveItem] = useState(0);

  const changeToItem = (item: number) => {
    if (activeItem === item) return;
    setActiveItem(item);
  }

  const changeNextItem = () => {
    if (activeItem === numberOfItems - 1) return;
    setActiveItem(activeItem + 1);
  }

  const changePrevItem = () => {
    if (activeItem === 0) return;
    setActiveItem(activeItem - 1);
  }

  return (
    <>
      <Container>
        <ChevronsLeft color="#009bbd" size={64} className={"chevronsLeft " + (activeItem === 0 ? 'disabled' : '')} onClick={changePrevItem} />

        <SubContainer>
          <ContentContainer shiftAmount={activeItem}>
            {content.map((item, i) => 
              <ItemContainer key={i}>
                {item}
              </ItemContainer>
            )}
          </ContentContainer>
        </SubContainer>

        <ChevronsRight color="#009bbd" size={64} className={"chevronsRight " + (activeItem === numberOfItems - 1 ? 'disabled' : '')} onClick={changeNextItem} />
      </Container>

      <TrackerContainer shiftAmount={activeItem} numberOfItems={numberOfItems}>
        <FontAwesomeIcon className="tracker-icon" icon={fasFaCircle} />

        {content.map((_, i) => 
          <FontAwesomeIcon key={i} icon={farFaCircle} onClick={() => changeToItem(i)}/>
        )}

      </TrackerContainer>
    </>
  )
}

export default Gallery