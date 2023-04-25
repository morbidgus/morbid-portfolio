import styled from "styled-components";
import Vectors from "../../assets/Vectors";

export const ContactContainer = styled.div`
  display: flex;
  background: linear-gradient(180deg, #0c0f10 0%, #112e37 100%);
  width: 100%;
  padding: 5rem 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.span`
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 1.5s steps(20, end), blink-caret 0.75s step-end infinite;
  color: white;
  font-size: 18px;
  margin-bottom: 5rem;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 6em;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

export const ContactButton = styled.div`
  cursor: pointer;

  &:hover {
    animation: move 0.5s infinite alternate;
  }

  @keyframes move {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-5px);
    }
  }
`;

export const GithubIcon = styled(Vectors.GithubIcon)`
  width: 60px;
  height: 60px;
`;

export const LinkedInIcon = styled(Vectors.LinkedInIcon)`
  width: 60px;
  height: 60px;
`;

export const MailIcon = styled(Vectors.MailIcon)`
  width: 60px;
  height: 60px;
`;

export const WspIcon = styled(Vectors.WspIcon)`
  width: 60px;
  height: 60px;
`;
