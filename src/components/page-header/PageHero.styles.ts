import styled from "styled-components";

export const PageHeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 90vh;
  width: 100%;
  background: linear-gradient(
    36.45deg,
    #0c0f10 -5.5%,
    #0c0f10 60.09%,
    #083741 101.28%
  );
`;

export const JobPositionContainer = styled.span`
  font-size: 24px;
  color: #dcdcdc;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FirstNameContainer = styled.span`
  font-size: 128px;
  color: white;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 68px;
  }
`;

export const LastNameContainer = styled.span`
  font-size: 128px;
  color: #0d0f10;
  font-weight: bold;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #dcdcdc;

  @media only screen and (max-width: 768px) {
    font-size: 68px;
  }
`;
