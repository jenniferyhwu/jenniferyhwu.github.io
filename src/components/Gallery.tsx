import React, { useState } from "react";
import styled from "styled-components";
import { ChevronsLeft, ChevronsRight, Circle } from "react-feather";
import { useSwipeable } from "react-swipeable";
import GlobalConstants from "src/theme/globalConstants";
import Button from "./Button";

interface GalleryProps {
  numberOfItems: number;
  content: React.ReactElement[];
}

// clean this styling up!!!
// make tracker dot animation nicer
const TrackerContainer = styled.div<{
  shiftAmount: number;
  numberOfItems: number;
}>`
  color: #009bbd;
  display: flex;
  justify-content: center;
  position: relative;

  svg {
    font-size: 1em;

    &:nth-child(n + 3) {
      margin-left: 1em;
    }
  }

  .tracker-icon {
    position: absolute;
    transition: all 0.4s cubic-bezier(0.45, 0.02, 0.04, 1.02);
    transform: ${(props) =>
      `translateX(calc(-${props.numberOfItems + 0.5}em + 50% + ${
        props.shiftAmount
      } * 2.5em))`};
    fill: #009bbd;
  }
`;

const ItemContainer = styled.div`
  flex: 0 0 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: ${GlobalConstants.breakpoint.smallMobile}px) {
    padding: 0;
  }
`;

const ContentContainer = styled.div<{ shiftAmount: number }>`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5em;
  transition: all 0.4s cubic-bezier(0.45, 0.02, 0.04, 1.02);
  transform: ${(props) => `translateX(calc(-1 * ${props.shiftAmount} * 100%))`};
`;

const SubContainer = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .chevrons {
    color: #009bbd;
    z-index: 2;

    svg {
      width: 64px;
      height: 64px;

      @media (max-width: ${GlobalConstants.breakpoint.mobile}px) {
        width: 48px;
        height: 48px;
      }
    }
  }

  .chevronsLeft {
    margin-left: -64px;

    @media (max-width: ${GlobalConstants.breakpoint.tablet}px) {
      margin-left: -12px;
      margin-right: -48px;
    }
  }

  .chevronsRight {
    margin-right: -64px;

    @media (max-width: ${GlobalConstants.breakpoint.tablet}px) {
      margin-right: -12px;
      margin-left: -48px;
    }

    @media (max-width: ${GlobalConstants.breakpoint.tablet}px) {
    }
  }
`;

const Gallery: React.FC<GalleryProps> = ({ numberOfItems, content }) => {
  const [activeItem, setActiveItem] = useState(0);

  const changeToItem = (item: number) => {
    if (activeItem === item) return;
    setActiveItem(item);
  };

  const changeNextItem = () => {
    if (activeItem === numberOfItems - 1) return;
    setActiveItem(activeItem + 1);
  };

  const changePrevItem = () => {
    if (activeItem === 0) return;
    setActiveItem(activeItem - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: changeNextItem,
    onSwipedRight: changePrevItem,
  });

  return (
    <>
      <Container>
        <Button
          className={
            "chevrons chevronsLeft " + (activeItem === 0 ? "disabled" : "")
          }
          onClick={changePrevItem}
        >
          <ChevronsLeft />
        </Button>

        <SubContainer className="here">
          <ContentContainer shiftAmount={activeItem} {...handlers}>
            {content.map((item, i) => (
              <ItemContainer key={i}>{item}</ItemContainer>
            ))}
          </ContentContainer>
        </SubContainer>

        <Button
          className={
            "chevrons chevronsRight " +
            (activeItem === numberOfItems - 1 ? "disabled" : "")
          }
          onClick={changeNextItem}
        >
          <ChevronsRight />
        </Button>
      </Container>

      <TrackerContainer shiftAmount={activeItem} numberOfItems={numberOfItems}>
        <Circle className="tracker-icon" />

        {content.map((_, i) => (
          <Circle key={i} onClick={() => changeToItem(i)} />
        ))}
      </TrackerContainer>
    </>
  );
};

export default Gallery;
