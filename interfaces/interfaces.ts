export interface IContent {
  id: number;
  title: string;
  desc: string;
}

export interface IContentData {
  athletes: IContent[];
  players: IContent[];
}

export interface ContentProps {
  data: IContent[];
}
