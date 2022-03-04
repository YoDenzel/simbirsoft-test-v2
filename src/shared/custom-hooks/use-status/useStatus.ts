export const useStatus = (status: string) => {
  if (status === 'SCHEDULED') return 'Запланирован';
  else if (status === 'LIVE') return 'В прямом эфире';
  else if (status === 'IN_PLAY') return 'В игре';
  else if (status === 'PAUSED') return 'Пауза';
  else if (status === 'FINISHED') return 'Завершен';
  else if (status === 'POSTPONED') return 'Отложен';
  else if (status === 'SUSPENDED') return 'Приостановлен';
  return 'Отменен';
};
