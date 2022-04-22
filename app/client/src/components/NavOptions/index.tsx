import React from 'react';
import { Link } from 'react-router-dom';
import { IRequest } from './interface';

import './styles.scss';

function NavOptions({
  installation,
  projects,
  requirements,
  settings,
  pageName
}: IRequest) {
  return (
    <nav className="nav-filter">
      <ul>
        <Link to={ `/${pageName}/about` }>Sobre</Link>
        { installation && (<Link to={ `/${pageName}/install` }>Instalação</Link>) }
        { projects && (<Link to={ `/${pageName}/projects`}>Projetos</Link>) }
        { requirements && (<Link to={ `/${pageName}/requirements`}>Requisitos</Link>) }
        { settings && (<Link to={ `/${pageName}/settings`}>Configurações</Link>) }
      </ul>
    </nav>
  );
}

export default NavOptions;
