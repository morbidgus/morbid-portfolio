import React, { useState } from "react";
import AboutSection from "../components/about-section/AboutSection.component";
import ContactSection from "../components/contact-section/ContactSection.component";
import ExperienceSection from "../components/experience-section/ExperienceSection.component";
import PageHero from "../components/page-header/PageHero.component";
import resume from "../assets/resume.pdf";

import * as STYLE from "./Main.styles";

export const MainPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const scrollToSection = (section: string) => (): void => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleDropDown();
    }
  };

  return (
    <STYLE.MainPageContainer>
      <STYLE.PageHeader>
        <STYLE.ProfileImage
          src={"https://i.ibb.co/TqjHywZ/20220718-170003-1-2.png"}
          alt="Gustavo"
        />
        <STYLE.DropDownButton onClick={toggleDropDown}>
          <STYLE.ChevronIcon isOpen={isOpen} />
        </STYLE.DropDownButton>
        {isOpen && (
          <STYLE.DropDownContainer>
            <STYLE.DropDownOption onClick={scrollToSection("experience")}>
              Experience
            </STYLE.DropDownOption>
            <STYLE.DropDownOption onClick={scrollToSection("about")}>
              About
            </STYLE.DropDownOption>
            <STYLE.DropDownOption onClick={scrollToSection("contact")}>
              Contact
            </STYLE.DropDownOption>
            <STYLE.DownloadOption
              href={resume}
              download="Gustavo Madrid Software Dev Resume"
            >
              Resume
            </STYLE.DownloadOption>
          </STYLE.DropDownContainer>
        )}
      </STYLE.PageHeader>
      <PageHero />
      <ExperienceSection id="experience" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </STYLE.MainPageContainer>
  );
};

export default MainPage;
