import styled from "styled-components";

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #0d0f10;
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
