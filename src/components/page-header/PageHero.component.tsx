import React from "react";

import * as STYLE from "./PageHero.styles";

export const PageHero: React.FC = () => {
  return (
    <STYLE.PageHeroContainer>
      <STYLE.JobPositionContainer>
        Software developer
      </STYLE.JobPositionContainer>
      <STYLE.NameContainer>
        <STYLE.FirstNameContainer>GUSTAVO</STYLE.FirstNameContainer>
        <STYLE.LastNameContainer>MADRID</STYLE.LastNameContainer>
      </STYLE.NameContainer>
    </STYLE.PageHeroContainer>
  );
};

export default PageHero;
