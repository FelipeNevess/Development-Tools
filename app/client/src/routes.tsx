import React from 'react';

import {
  Home,
  Windows
} from './pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <Home /> }  />
        <Route path="/windows"  element={ <Windows /> }  />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
