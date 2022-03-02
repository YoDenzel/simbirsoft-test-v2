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

export type TScheduleOfTheLeague = {
  competition: TTeamsCompetition;
  count: number;
  filtres: {};
  matches: Array<TScheduleLeagueMatches>;
};

export type TScheduleLeagueMatches = {
  id: number;
  awayTeam: TTeamsArea;
  homeTeam: TTeamsArea;
  group: null;
  lastUpdated: string;
  matchday: number;
  odds: {};
  referees: TReferees;
  score: TScore;
  season: TSeason;
  stage: string;
  status: string;
  utcDate: string;
};

type TReferees = {
  id: number;
  name: string;
  role: string;
  nationality: string;
};

export type TScore = {
  duration: string;
  extraTime: TTimeScore;
  fullTime: TTimeScore;
  halfTime: TTimeScore;
  penalties: TTimeScore;
  winner: string;
};

type TTimeScore = {
  homeTeam: number | null;
  awayTeam: number | null;
};

type TSeason = {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: string;
};

export type TTeamsCompetition = {
  id: number;
  area: TTeamsArea;
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
};

export type TMappedDataTeams = {
  id: string;
  date: string;
  teams: string;
  res: string | number | null;
  status: string;
  time: string;
};
