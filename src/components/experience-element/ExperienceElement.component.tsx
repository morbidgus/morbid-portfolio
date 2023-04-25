import React from "react";

import * as STYLE from "./ExperienceElement.styles";
import { ExperienceElementProps } from "./ExperienceElement.types";

export const ExperienceElement: React.FC<ExperienceElementProps> = ({
  title,
  position,
  date,
  description,
  stack,
  link,
  imageUrl,
}) => {
  const openInNewTab = (url: string) => () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <STYLE.ExperienceElementContainer>
      <STYLE.ImageContainer>
        <img src={imageUrl} alt="company" />
      </STYLE.ImageContainer>

      <STYLE.JobDescriptionContainer>
        <STYLE.JobTitle>{title}</STYLE.JobTitle>
        <STYLE.JobPosition>{position}</STYLE.JobPosition>
        <STYLE.DatePeriod>{date}</STYLE.DatePeriod>
        <STYLE.JobDescription>{description}</STYLE.JobDescription>

        <STYLE.TechStackContainer>
          {stack.map((tech) => (
            <STYLE.StackElementContainer>
              <STYLE.StackElement>{tech.name}</STYLE.StackElement>
              {tech.hasSeparator && <STYLE.SeparatorElement />}
            </STYLE.StackElementContainer>
          ))}
        </STYLE.TechStackContainer>

        <STYLE.ActionsContainer>
          <STYLE.ProjectButton onClick={openInNewTab(link)}>
            Open project
          </STYLE.ProjectButton>
        </STYLE.ActionsContainer>
      </STYLE.JobDescriptionContainer>
    </STYLE.ExperienceElementContainer>
  );
};

export default ExperienceElement;
