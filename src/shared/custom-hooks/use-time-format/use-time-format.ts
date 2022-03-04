import { format, parseISO } from 'date-fns';

type TProps = {
  time: string;
  dateFormat: string;
};

export const useTimeFormat = ({ time, dateFormat }: TProps) => {
  const parsedTime = parseISO(time);
  return format(parsedTime, dateFormat);
};
