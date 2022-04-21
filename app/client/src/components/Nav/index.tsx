import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Icons, AiFillHome } from './utils/icons';
import { DarkModeContext } from '../../context/DarkModeProvider';

function Nav() {
  const { active } = useContext(DarkModeContext).context;

  return (
    <nav>
      <ul>
        <li className="l10">
          <span className="span-home">Home</span>
          <Link to="/">
            { <AiFillHome className={`cvg10-${active} svg-dark-${active}` } /> }
          </Link>
        </li>
        <div>
          {
            Icons.map((icon, i) => {
              if (i > 0) {
                return (
                  <li className={`l${i}`} key={i} >
                    <span>{ icon.title }</span>
                    <Link to={`${icon.to}`}>
                      { <icon.inc className={`cvg${i}-${active} svg-dark-${active}`} /> }
                    </Link>
                  </li>
                );
              }
            })
          }
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
