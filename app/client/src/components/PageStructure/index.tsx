import React, { useContext } from 'react';

import { Menu } from '..';
import { IRequest } from './interface';
import DarkMode from '../DarkMode';

import { DarkModeContext }  from '../../context/DarkModeProvider';
import Selected from '../Selected';

import './styles.scss';

function PageStructure({
  icon,
  title,
  filter,
  filterLinux,
  filterPage
}: IRequest): JSX.Element {
  const { active } = useContext(DarkModeContext).context;

  return (
    <>
      <DarkMode />
      <section className={`section-page dark-mode-${active}`}>
        <div className="content-page">
          <div className="con-1">
            <div>
              <i>{ icon }</i>
              <h4>{ title }</h4>
            </div>
          </div>
          <div className="con-2">
            { filter }
            { filterLinux }
            {
              filterPage &&
              <Selected
                about={ filterPage.about }
                installations={ filterPage.installations }
                settings={ filterPage.settings }
              />
            }
          </div>
        </div>
        <Menu />
      </section>
    </>
  );
}

export default PageStructure;
