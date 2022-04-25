import React from 'react';

import { IRequest } from './interfaces';

function Main({ children, mainClass }: IRequest) {
  return (
    <main className={ mainClass }>
      { children }
    </main>
  );
}

export default Main;
