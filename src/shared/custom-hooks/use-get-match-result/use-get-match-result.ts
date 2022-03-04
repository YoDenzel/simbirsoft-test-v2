import { TScore } from '../../types';

export const useGetMatchResult = (item: TScore) => {
  if (item.fullTime.awayTeam === null)
    return 'Матч еще не сыгран или результат отстутствует';
  const fullTime = `${item.fullTime.homeTeam}:${item.fullTime.awayTeam}`;
  const extraTime =
    item.extraTime.homeTeam === null
      ? ''
      : `(${item.extraTime.homeTeam}:${item.extraTime.awayTeam})`;
  const penalty =
    item.penalties.homeTeam === null
      ? ''
      : `(${item.penalties.homeTeam}:${item.penalties.awayTeam})`;
  return `${fullTime} ${extraTime} ${penalty}`;
};
