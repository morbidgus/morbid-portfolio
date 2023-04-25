import styled from "styled-components";

export const ExperienceElementContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media only screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 500px;

  > * {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1080px) {
    margin: 0 auto;
    width: 80%;
  }
`;

export const JobDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  @media only screen and (max-width: 1080px) {
    margin: 0 auto;
  }
`;

export const JobTitle = styled.span`
  font-size: 96px;
  color: #0d0f10;
  font-weight: bold;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #dcdcdc;

  @media only screen and (max-width: 480px) {
    font-size: 70px;
  }
`;

export const JobPosition = styled.span`
  font-size: 16px;
  color: #dcdcdc;
  margin-bottom: 8px;
`;

export const DatePeriod = styled.span`
  font-size: 16px;
  color: #dcdcdc;
  margin-bottom: 40px;
`;

export const JobDescription = styled.span`
  font-size: 16px;
  color: #dcdcdc;
  max-width: 500px;
  margin-bottom: 40px;
`;

export const TechStackContainer = styled.div`
  display: flex;
  max-width: 500px;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const StackElementContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const StackElement = styled.span`
  font-size: 16px;
  color: #dcdcdc;
`;

export const SeparatorElement = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #dcdcdc;
  margin-left: 8px;
`;

export const ProjectButton = styled.div`
  padding: 0.75rem 1rem;
  background: linear-gradient(199.56deg, #083535 -0.1%, #12355e 86.89%);
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

export const ActionsContainer = styled.div``;
