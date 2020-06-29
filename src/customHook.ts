import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useLogUpdateState<T>(
  initialValue: T,
  label: string
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log(`${label} updated to ${value} with a custom hook`);
  }, [value, label]);

  return [value, setValue];
}
