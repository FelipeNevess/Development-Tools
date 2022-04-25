import React, { useContext } from 'react';

import { DarkModeContext } from '../../context/DarkModeProvider';
import { useEffectHook } from '../../hooks';

import './styles.scss';

function DarkMode() {
  const { active, setActive } = useContext(DarkModeContext).context;
  const darkMode = JSON.parse(localStorage.getItem('darkMode')) as string;

  const handleClick = (): void => {
    localStorage.setItem('darkMode', JSON.stringify(!active));
    setActive(!active);
  };

  useEffectHook({ darkMode, setActive });

  return (
    <header>
      <div className={`content-mode-${active}`}>
        <input
          type="button"
          onClick={handleClick}
          className={`button-active-${active}`}
        />
      </div>
    </header>
  );
}

export default DarkMode;
