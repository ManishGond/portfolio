export type Tag = {
  id: number;
  name: string;
  path: string;
};

export type ProjectProps = {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: Tag[];
  setPreview: React.Dispatch<React.SetStateAction<string | null>>;
};

export type ProjectDetailsProps = Omit<ProjectProps, 'setPreview'> & {
  closeModal: () => void;
};
