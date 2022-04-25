import React from 'react';

import { DarkModeProvider } from './DarkModeProvider';
import { NavOptionsProvider } from './NavOptions';

import { Iprops } from './DarkModeProvider/interfaces';

export function GlobalContext({ children }: Iprops) {
  return (
    <NavOptionsProvider>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
    </NavOptionsProvider>
  );
}
