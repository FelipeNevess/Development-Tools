import React from 'react';
import { IRequest } from './interface';

function NavBar({ children, navClass, reff }: IRequest) {
  return (
    <nav className={navClass}>
      <ul ref={ reff }>
        { children }
      </ul>
    </nav>
  );
}

export default NavBar;
