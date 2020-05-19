import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  link: string;
  subtitle: string;
  timePeriod: string;
  description: string;
  tools: string[];
  background?: string;
}

const Text = styled.p`
  color: #19798d;
  font-size: 1.3em;
  font-weight: 300;
  font-family: Roboto;
  line-height: 1.5em;
  margin-bottom: 0;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Header = styled.h2`
  color: #009bbd;
  letter-spacing: 0.2em;
  margin-top: 0;
`;

const SubHeader = styled(Header)`
  letter-spacing: 0.05em;
  font-size: 1em;
  margin: 0;
`;

const NoteText = styled.p`
  color: white;
  font-weight: 300;
  font-size: 0.9em;
  margin: 0;
`;

const Note = styled.div`
  background: #009bbd;
  padding: 5px 7px;
`;

const NotesContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 20px;
  height: 30px;

  > :not(:first-child) {
    margin-left: 15px;
  }
`;

const Container = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  width: 100%;
  //border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07), 0 6px 15px 0 rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 16em;
  padding: 3em 4em;
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

const LinkContainer = styled.a`
  text-decoration: none;
`;

const Card: React.FC<CardProps> = ({ title, link, subtitle, timePeriod, description, tools, background = "white"}) => {
  const isMobile = window.innerWidth <= 500;

  return (
    <LinkContainer href={link}>
      <Container background={background}>
        {isMobile ? null : <NotesContainer>
          {tools.map(tool => 
            <Note key={tool}>
              <NoteText>{tool}</NoteText>
            </Note>
          )}
        </NotesContainer>}
        <Header>{title}</Header>
        <SubHeader>{subtitle} | {timePeriod}</SubHeader>
        <Text>{description}</Text>
      </Container>
    </LinkContainer>
  )
}

export default Card