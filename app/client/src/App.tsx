import React from 'react';

import Routes from './routes';
import { GlobalContext } from './context';

function App() {
  return (
    <main>
      <GlobalContext>
        <Routes />
      </GlobalContext>
    </main>
  );
}

export default App;
