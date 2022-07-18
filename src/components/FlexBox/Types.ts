type Item = {
  id: string;
  index: number; //index do item na lista
  item: string;
};

type Content = {
  item: string;
  id: string;
  index: number; //index do content na lista
  subgroup: Item[];
};

type Tabulation = {
  content: Content;
  skills: string[];
};

export type { Item };
export type { Content };
export type { Tabulation };
