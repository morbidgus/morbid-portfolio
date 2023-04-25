import React from "react";

import * as STYLE from "./ContactSection.styles";
import { ContactSectionProps } from "./ContactSection.types";

export const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const openInNewTab = (url: string) => () => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <STYLE.ContactContainer id={id}>
      <STYLE.SectionTitle>Contact me</STYLE.SectionTitle>
      <STYLE.ButtonsContainer>
        <STYLE.ContactButton
          onClick={openInNewTab("https://github.com/morbidgus")}
        >
          <STYLE.GithubIcon />
        </STYLE.ContactButton>
        <STYLE.ContactButton
          onClick={openInNewTab(
            "https://www.linkedin.com/in/gustavo-madrid-83a844201/"
          )}
        >
          <STYLE.LinkedInIcon />
        </STYLE.ContactButton>
        <STYLE.ContactButton
          onClick={openInNewTab(
            "mailto:madridgustavo23@gmail.com?subject=Software%20dev%20role%20offer"
          )}
        >
          <STYLE.MailIcon />
        </STYLE.ContactButton>
        <STYLE.ContactButton
          onClick={openInNewTab("https://wa.me/+5492216419543")}
        >
          <STYLE.WspIcon />
        </STYLE.ContactButton>
      </STYLE.ButtonsContainer>
    </STYLE.ContactContainer>
  );
};

export default ContactSection;
