import { createContext, useState } from 'react';

import { IContextTools } from './interfaces';
import { DEFAULT_VALUES } from './DefaultValues';

export const DarkModeContext = createContext<IContextTools>(DEFAULT_VALUES);

export const DarkModeProvider = ({ children}) => {
  const [active, setActive] = useState<boolean>(false);

  const context = {
    active,
    setActive,
  };

  return <DarkModeContext.Provider value={{ context }}>
      {children}
    </DarkModeContext.Provider>;
}
