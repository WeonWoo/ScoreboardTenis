type SEX = "male" | "female";

type LineUpListItem = {
  id: number;
  name: string;
  sex: SEX;
  club?: string[];
  startDate?: string;
};

type GAME_TYPE = "Doubles" | "Singles";
