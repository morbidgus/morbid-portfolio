import React from "react";

import * as STYLE from "./AboutSection.styles";
import { AboutSectionProps } from "./AboutSection.types";

export const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  const codeStackData = [
    {
      techName: "React",
      hasSeparator: true,
    },
    {
      techName: "React native",
      hasSeparator: true,
    },
    {
      techName: "Typescript",
      hasSeparator: true,
    },
    {
      techName: "Javascript",
      hasSeparator: true,
    },
    {
      techName: "NextJS",
      hasSeparator: true,
    },
    {
      techName: "NestJS",
      hasSeparator: true,
    },
    {
      techName: "Redux",
      hasSeparator: true,
    },
    {
      techName: "HTML",
      hasSeparator: true,
    },
    {
      techName: "CSS",
      hasSeparator: true,
    },
    {
      techName: "SASS",
      hasSeparator: true,
    },
    {
      techName: "Styled components",
      hasSeparator: true,
    },
    {
      techName: "Bootstrap",
      hasSeparator: true,
    },
    {
      techName: "Tailwind",
      hasSeparator: true,
    },
    {
      techName: "Responsive design",
      hasSeparator: true,
    },
    {
      techName: "Testing/debugging",
      hasSeparator: true,
    },
    {
      techName: "Version control/GIT",
      hasSeparator: true,
    },
    {
      techName: "Vue(currently learning)",
      hasSeparator: false,
    },
  ];

  const designStackData = [
    {
      techName: "Figma",
      hasSeparator: true,
    },
    {
      techName: "Adobe XD",
      hasSeparator: true,
    },
    {
      techName: "UX/UI design patters",
      hasSeparator: true,
    },
    {
      techName: "Wireframing",
      hasSeparator: true,
    },
    {
      techName: "Prototyping",
      hasSeparator: true,
    },
    {
      techName: "Adobe Illustrator",
      hasSeparator: true,
    },
    {
      techName: "Adobe Photoshop",
      hasSeparator: false,
    },
  ];

  return (
    <STYLE.AboutContainer id={id}>
      <STYLE.SectionTitle>About me</STYLE.SectionTitle>
      <STYLE.AboutTextContainer>
        <STYLE.AboutText>
          I'm a software developer and design enthusiast based in Argentina. My
          passion is creating beautiful and intuitive user interfaces. With
          extensive experience in ReactJS, as well as a strong foundation in
          HTML, CSS, and JavaScript, I blend design and code to bring ideas to
          life. Let's work together to create engaging and visually stunning
          user experiences!
        </STYLE.AboutText>
      </STYLE.AboutTextContainer>
      <STYLE.StackContainer>
        <STYLE.CodeStackIcon />
        <STYLE.StackSection>
          {codeStackData.map((tech) => (
            <STYLE.TechStackContainer>
              <STYLE.StackElement>{tech.techName}</STYLE.StackElement>
              {tech.hasSeparator && <STYLE.StackSeparator />}
            </STYLE.TechStackContainer>
          ))}
        </STYLE.StackSection>
      </STYLE.StackContainer>
      <STYLE.StackContainer>
        <STYLE.DesignStackIcon />
        <STYLE.StackSection>
          {designStackData.map((tech) => (
            <STYLE.TechStackContainer>
              <STYLE.StackElement>{tech.techName}</STYLE.StackElement>
              {tech.hasSeparator && <STYLE.StackSeparator />}
            </STYLE.TechStackContainer>
          ))}
        </STYLE.StackSection>
      </STYLE.StackContainer>
    </STYLE.AboutContainer>
  );
};

export default AboutSection;
