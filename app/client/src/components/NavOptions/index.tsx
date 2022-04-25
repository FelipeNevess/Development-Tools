import React, { useEffect } from 'react';

import NavBar from '../NavBar';
import { HandleSelected  } from '../../utils';

import { IRequest } from './interface';

import './styles.scss';

function NavOptions({
  installation,
  projects,
  requirements,
  settings,
}: IRequest) {
  const { handleClick, result } = HandleSelected();

  useEffect(() => {
    handleClick();
  }, [handleClick, result]);

  return (
    <NavBar
      navClass='nav-filter'
      reff={ result }
    >
      <li>
        <a href="#about">
          <span className="selected">Sobre</span>
        </a>
      </li>
      {
        installation && (<li>
          <a href="#install">
            <span>Instalação</span>
          </a>
        </li>)
      }
      {
        projects && (<li>
          <a href="#projects">
            <span>Projetos</span>
          </a>
        </li>)
      }
      { requirements && (<li>
          <a href="#requirements">
            <span>Requisitos</span>
          </a>
        </li>)
      }
      {
        settings && (<li>
          <a href="#settings">
            <span>Configurações</span>
          </a>
        </li>)
      }
    </NavBar>
  );
}

export default NavOptions;
