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
  teams: TTeams[];
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
  role?: string;
  nationality: string | null;
};

export type TScore = {
  duration: string;
  extraTime: TTimeScore;
  fullTime: TTimeScore;
  halfTime: TTimeScore;
  penalties: TTimeScore;
  winner: string | null;
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
  winner?: null | string;
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

export type TTeamName = {
  awayTeam: TTeamsArea;
  competition: TCompetition;
  homeTeam: TTeamsArea;
  group: null;
  id: number;
  lastUpdated: string;
  matchday: number;
  odds: {};
  referees: TReferees[];
  score: TScore;
  season: TSeason;
  stage: string;
  status: string;
  utcDate: string;
};

export type TParticularTeam = {
  count: number;
  filters: {};
  matches: TTeamMatches[];
};

export type TTeamMatches = {
  awayTeam: TTeamsArea;
  competition: TCompetition;
  homeTeam: TTeamsArea;
  group: null;
  id: number;
  lastUpdated: string;
  matchday: number;
  odds: {};
  referees: TReferees[];
  score: TScore;
  season: TSeason;
  stage: string;
  status: string;
  utcDate: string;
  attendance: number;
};

type TCompetition = {
  area: TTeamArea;
  id: number;
};

type TTeamArea = {
  code: string;
  ensignUrl: string;
  name: string;
};
