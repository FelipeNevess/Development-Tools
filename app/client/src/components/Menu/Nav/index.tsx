import React from 'react';

import { Icons, AiFillHome } from './Utils/icons';

function Nav() {
  return (
    <nav>
      <ul>
        <li className="l10">
          <span className="span-home">Home</span>
          { <AiFillHome /> }
        </li>
        <div>
          {
            Icons.map((icon, i) => {
              if (i > 0) {
                return (
                  <li className={`l${i}`} key={i} >
                    <span>{ icon.title }</span>
                    { <icon.inc /> }
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
