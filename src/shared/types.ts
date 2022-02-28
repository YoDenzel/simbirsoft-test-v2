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

export type TTeamsData = {
  count: number;
  filters: {};
  teams: TTeams;
};

export type TTeams = {
  id: number;
  area: TTeamsArea;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
};

type TTeamsArea = {
  id: number;
  name: string;
};
