import React, { useContext, useEffect } from 'react';

import { DarkModeContext } from '../../context/DarkModeProvider';

import './styles.scss';

function DarkMode() {
  const { active, setActive } = useContext(DarkModeContext).context;

  const handleClick = (): void => {
    localStorage.setItem('darkMode', JSON.stringify(!active));
    setActive(!active);
  }

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));

    if (darkMode !== null) {
      setActive(Boolean(darkMode));
    }
  }, []);

  return (
    <div className={ `content-mode-${active}` }>
      <button
        type="button"
        onClick={ handleClick }
        className={ `button-active-${active}` }
      />
    </div>
  );
}

export default DarkMode;
