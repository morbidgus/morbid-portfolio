import styled from "styled-components";
import Vectors from "../../assets/Vectors";

export const AboutContainer = styled.div`
  display: flex;
  background: #0d0f10;
  width: 100%;
  padding: 5rem 0;
  flex-direction: column;
  justify-content: center;
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

export const AboutTextContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutText = styled.span`
  color: white;
  font-size: 24px;
  text-align: center;
`;

export const StackContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const CodeStackIcon = styled(Vectors.CodeIcon)`
  margin-bottom: 1rem;
`;

export const DesignStackIcon = styled(Vectors.DesignIcon)`
  margin-bottom: 1rem;
`;

export const StackSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TechStackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const StackElement = styled.span`
  color: #dcdcdc;
`;

export const StackSeparator = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #dcdcdc;
  margin-left: 8px;
`;
