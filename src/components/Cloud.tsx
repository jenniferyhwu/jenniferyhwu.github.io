import React from "react";
import styled from "styled-components";
import { Cloud as CloudIcon } from "react-feather";
import { useWindowSize } from "src/utils/useWindowSize";
import GlobalConstants from "src/theme/globalConstants";

export interface CloudProps {
  title: string;
  description: string;
  hackathon: string;
  award: string;
  devpost: string;
  github: string;
  image: string;
}

const CloudHeadingContainer = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  background: #ffedf2;
  box-shadow: 3px 4px 26px 2px rgba(61, 105, 122, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  z-index: 2;

  @media (max-width: ${GlobalConstants.breakpoint.tablet}px) {
    background: white;
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${GlobalConstants.breakpoint.mobile}px) {
    width: 280px;
    height: 280px;
    padding: 2em;
  }
`;

const CloudInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: calc(100% - 320px);
  padding: 2em;
  padding-left: 1em;
  margin: 1.5em;

  @media (max-width: ${GlobalConstants.breakpoint.medium}px) {
    padding: 0.5em;
  }
`;

const CloudText = styled.p`
  color: #19798d;
  font-weight: 300;
  font-family: Roboto;
  font-size: 1.2em;
  line-height: 1.5em;
  margin: 0.5em;

  @media (max-width: ${GlobalConstants.breakpoint.medium}px) {
    font-size: 1em;
  }
`;

const CloudDevpostContainer = styled.div`
  background: none;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -40px;
  right: 10px;
  height: 150px;
  width: 150px;
  z-index: 3;

  @media (max-width: ${GlobalConstants.breakpoint.medium}px) {
    bottom: -60px;
    right: -10px;
  }
`;

const CloudGithubContainer = styled(CloudDevpostContainer)`
  bottom: -40px;
  right: 120px;
  height: 100px;
  width: 100px;

  @media (max-width: ${GlobalConstants.breakpoint.medium}px) {
    bottom: -60px;
    right: 100px;
  }
`;

const CloudLink = styled.a<{ color: string }>`
  position: absolute;
  text-decoration: none;
  margin-top: 8%;
  z-index: 4;
  color: ${(props) => props.color};
`;

const CloudHeading = styled.h2`
  letter-spacing: 0.2em;
  font-size: 2em;
  color: #b86167;
  margin: 0;
  margin-bottom: 0.5em;
  text-align: center;

  @media (max-width: ${GlobalConstants.breakpoint.tablet}px) {
    color: #009bbd;
  }
`;

const CloudHeadingText = styled.p`
  color: #94474c;
  margin: 0;
  text-align: center;

  @media (max-width: ${GlobalConstants.breakpoint.tablet}px) {
    color: #009bbd;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 125px;
  display: flex;
  background: white;
  box-shadow: 3px 4px 26px 2px rgba(61, 105, 122, 0.07);
  margin: 30px 0;

  @media (max-width: ${GlobalConstants.breakpoint.tablet}px) {
    width: auto;
  }

  .devpost-cloud {
    fill: #fffade;
  }

  .github-cloud {
    fill: #f7ebff;
  }
`;

const Cloud: React.FC<CloudProps> = (item) => {
  const { windowWidth } = useWindowSize();
  const isTablet = windowWidth <= GlobalConstants.breakpoint.tablet;

  return (
    <Container>
      <CloudHeadingContainer>
        <CloudHeading>{item.title}</CloudHeading>
        <CloudHeadingText>{item.hackathon}</CloudHeadingText>
        <CloudHeadingText>-</CloudHeadingText>
        <CloudHeadingText>{item.award}</CloudHeadingText>
      </CloudHeadingContainer>
      {isTablet ? null : (
        <>
          <CloudInfoContainer>
            <CloudText>{item.description}</CloudText>
          </CloudInfoContainer>
          <CloudDevpostContainer>
            <CloudLink href={item.devpost} color="#8c5900">
              Devpost
            </CloudLink>
            <CloudIcon
              className="cloud-shaped devpost-cloud"
              color="#fffade"
              size={200}
            />
          </CloudDevpostContainer>
          <CloudGithubContainer>
            <CloudLink href={item.github} color="#8553ad">
              GitHub
            </CloudLink>
            <CloudIcon
              className="cloud-shaped github-cloud"
              color="#f7ebff"
              size={120}
            />
          </CloudGithubContainer>
        </>
      )}
    </Container>
  );
};

export default Cloud;
