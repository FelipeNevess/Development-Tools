import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Home,
  Windows,
} from './pages';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }  />

        <Route path="/windows" element={ <Windows /> }  />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
