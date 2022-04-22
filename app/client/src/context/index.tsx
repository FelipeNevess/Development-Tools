import React from 'react';

import { DarkModeProvider } from './DarkModeProvider';
import { Iprops } from './DarkModeProvider/interfaces';

export function GlobalContext({ children }: Iprops) {
  return <DarkModeProvider>
      {children}
    </DarkModeProvider>;
}
