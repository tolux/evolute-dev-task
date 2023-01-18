export interface Data {
  id: number;
  name: string;
  status: statusType;
  species: specieType;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface paginationComponentProps {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (value: number) => void;
}

export type statusType = "Alive" | "Dead" | "unknown";

export type specieType =
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Poopybutthole"
  | "Mythological Creature"
  | "Animal";
