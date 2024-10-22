import { ChangeEvent, useState, useCallback } from 'react';

export default function useConsumption() {
  const minLength = 1;
  const maxLength = 1000000;
  const [consumption, setConsumption] = useState('');

  const handleChangeConsumption = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === '') {
        return setConsumption('');
      }

      const isValidNumber =
        (/^[1-9]\d*$/.test(value) || value === '0') &&
        parseInt(value) >= minLength &&
        parseInt(value) <= maxLength;

      if (!isValidNumber) return;

      setConsumption(value);
    },
    []
  );

  return { consumption, minLength, maxLength, handleChangeConsumption };
}
