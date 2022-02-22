export type TCompetitionsData = {
  count: number;
  filters: {};
  competitions: Array<TCompetitionsList>;
};

export type TCompetitionsList = {
  code: string;
  currentSeason: TCurrentSeason;
  area: TArea;
  emblemaUrl: string;
  id: number;
  lastUpdated: string;
  name: string;
  numberOfAvailableSeasons: number;
  plan: string;
};

export type TCurrentSeason = {
  currentMatchday: number;
  endDate: string;
  id: number;
  startDate: string;
  winner: null | string;
};

export type TArea = {
  countryCode: string;
  ensignUrl: null | string;
  id: number;
  name: string;
};
