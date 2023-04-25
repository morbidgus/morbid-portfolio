type TechDto = {
  name: string;
  hasSeparator: boolean;
};

export type ExperienceElementProps = {
  title: string;
  position: string;
  date: string;
  description: string;
  stack: TechDto[];
  link: string;
  imageUrl: string;
};
