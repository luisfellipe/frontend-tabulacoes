export type Item = {
  id: string;
  index: number; //index do item na lista
  item: string;
};

export type Content = {
  item: string;
  id: string;
  index: number; //index do content na lista
  subgroup: Item[];
};

export type Skill = {
  id: string;
  name: string;
};

export type JSONFile = {
  name: string;
  skills: string[];
  content: [
    {
      item: string;
      subgroup: string[];
    }
  ];
};
