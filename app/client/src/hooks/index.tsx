import { useEffect } from 'react';

import { IRequest } from './interfaces';

export const useEffectHook = ({ darkMode, setActive }: IRequest,) => {
  useEffect(() => {
    if (darkMode !== null) {
      setActive(Boolean(darkMode));
    }

  }, [darkMode, setActive]);
}