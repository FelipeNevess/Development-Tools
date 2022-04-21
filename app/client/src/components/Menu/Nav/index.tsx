import React, { useContext } from 'react';

import { Icons, AiFillHome } from './utils/icons';
import { DarkModeContext } from '../../../context/DarkModeProvider';

function Nav() {
  const { active } = useContext(DarkModeContext).context;

  return (
    <nav>
      <ul>
        <li className="l10">
          <span className="span-home">Home</span>
          { <AiFillHome className={`cvg10-${active} svg-dark-${active}` } /> }
        </li>
        <div>
          {
            Icons.map((icon, i) => {
              if (i > 0) {
                return (
                  <li className={`l${i}`} key={i} >
                    <span>{ icon.title }</span>
                    { <icon.inc className={`cvg${i}-${active} svg-dark-${active}`} /> }
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
