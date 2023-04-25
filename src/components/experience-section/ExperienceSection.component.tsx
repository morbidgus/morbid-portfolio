import React from "react";
import ExperienceElement from "../experience-element/ExperienceElement.component";

import * as STYLE from "./ExperienceSection.styles";
import { ExperienceSectionProps } from "./ExperienceSection.types";

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
  type TechDto = {
    name: string;
    hasSeparator: boolean;
  };
  type ExperienceDto = {
    title: string;
    position: string;
    date: string;
    description: string;
    stack: TechDto[];
    link: string;
    imageUrl: string;
  };

  const experienceData: ExperienceDto[] = [
    {
      title: "GOSPACE",
      position: "Software developer",
      date: "02/2021 - 04/2023",
      description:
        "The world’s first AI-powered connected workplace platform that automatically links virtual teams with physical space while reducing your office spend and CO2 footprint",
      stack: [
        { name: "React", hasSeparator: true },
        { name: "React native", hasSeparator: true },
        { name: "Typescript", hasSeparator: true },
        { name: "Javascript", hasSeparator: true },
        { name: "ThreeJS", hasSeparator: true },
        { name: "Styled components", hasSeparator: true },
        { name: "Material UI", hasSeparator: true },
        { name: "NestJS", hasSeparator: true },
        { name: "TeamsFx", hasSeparator: false },
      ],
      link: "https://www.gospace.com/",
      imageUrl: "https://i.ibb.co/PMYWkn5/Group-26-page-0001.jpg",
    },
    {
      title: "RATHER",
      position: "Front-end developer",
      date: "2020 - 2021",
      description:
        "A social media web application for movies and TV show lovers allows users to score content, create and share lists, follow people, check trailers, and receive personalized recommendations. It's a great place to connect with other fans and discover new content that aligns with your interests.",
      stack: [
        { name: "React", hasSeparator: true },
        { name: "NestJS", hasSeparator: true },
        { name: "TailwindCSS", hasSeparator: false },
      ],
      link: "https://www.linkedin.com/company/ratherlabs/",
      imageUrl: "https://i.ibb.co/0KRHHBB/rather.png",
    },
  ];
  return (
    <STYLE.ExperienceContainer id={id}>
      <STYLE.SectionTitle>Experience</STYLE.SectionTitle>
      {experienceData.map((experience) => (
        <ExperienceElement
          title={experience.title}
          position={experience.position}
          date={experience.date}
          description={experience.description}
          stack={experience.stack}
          imageUrl={experience.imageUrl}
          link={experience.link}
        />
      ))}
    </STYLE.ExperienceContainer>
  );
};

export default ExperienceSection;
