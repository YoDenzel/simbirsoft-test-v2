import { useEffect, useState } from 'react';

type TProps = {
  key: string;
  defaultValue: string;
};

type TReturnedValue = [string, (v: string) => void];

function getStorageValue({ key, defaultValue }: TProps) {
  const value = localStorage.getItem(key);
  return value || defaultValue;
}

export const useLocalStorage = ({
  key,
  defaultValue,
}: TProps): TReturnedValue => {
  const [value, setValue] = useState(() =>
    getStorageValue({
      key,
      defaultValue,
    }),
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};
