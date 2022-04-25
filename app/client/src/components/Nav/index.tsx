import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Icons, AiFillHome } from './utils/icons';
import { DarkModeContext } from '../../context/DarkModeProvider';
import NavBar from '../NavBar';

function Nav() {
  const { active } = useContext(DarkModeContext).context;

  return (
    <NavBar>
      <li className="l10">
        <span className="span-home">Home</span>
        <Link to="/">
          <AiFillHome className={`cvg10-${active} svg-dark-${active}` } />
        </Link>
      </li>
      <div>
        {
          Icons.map((icon, i) => i > 0 && (
            <li className={`l${i}`} key={icon.title} >
              <span>{ icon.title }</span>
              <Link to={`/${icon.to}`}>
                <icon.inc className={`cvg${i}-${active} svg-dark-${active}`} />
              </Link>
            </li>
          ))
        }
      </div>
    </NavBar>
  );
}

export default Nav;
