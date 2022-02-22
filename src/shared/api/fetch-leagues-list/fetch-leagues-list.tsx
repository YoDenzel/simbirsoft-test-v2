import { TCompetitionsData } from '../../types';

export const fetchLeaguesList = async (): Promise<TCompetitionsData> => {
  const response = await fetch(
    'http://api.football-data.org/v2/competitions/',
    {
      method: 'GET',
      headers: {
        'X-auth-token': `${process.env.REACT_APP_API_KEY}`,
      },
    },
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = response.json();
  return data;
};
