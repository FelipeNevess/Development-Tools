import React, { createContext, useMemo, useState } from 'react';

import { IContextTools } from './interfaces';
import { DEFAULT_VALUES } from './DefaultValues';

export const DarkModeContext = createContext<IContextTools>(DEFAULT_VALUES);

export function DarkModeProvider({ children}) {
  const [active, setActive] = useState<boolean>(false);

  const obj = useMemo(() => ({
    context: {
      active,
      setActive,
    }
  }), [active]);

  return <DarkModeContext.Provider value={obj}>
      {children}
    </DarkModeContext.Provider>;
}
