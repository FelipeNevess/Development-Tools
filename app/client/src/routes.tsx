import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Home,
  WindowsAbout,
  WindowsInstall,
  WindowsSettings
} from './pages';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }  />

        <Route path="/windows/about" element={ <WindowsAbout /> }  />
        <Route path="/windows/install" element={ <WindowsInstall /> }  />
        <Route path="/windows/settings" element={ <WindowsSettings /> }  />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
