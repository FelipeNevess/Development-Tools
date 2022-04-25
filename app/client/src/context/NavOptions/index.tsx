import React, { createContext, useMemo, useState } from 'react';

import { IContextSelected } from './interfaces';
import { DEFAULT_VALUES } from './DefaultValues';

export const NavOptionsContext = createContext<IContextSelected>(DEFAULT_VALUES);

export function NavOptionsProvider({ children}) {
  const [selected, setSelected] = useState<string>('Sobre');

  const obj = useMemo(() => ({
    context: {
      selected,
      setSelected,
    }
  }), [selected]);

  return <NavOptionsContext.Provider value={obj}>
      {children}
    </NavOptionsContext.Provider>;
}
