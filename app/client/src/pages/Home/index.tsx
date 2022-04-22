import React, { useContext } from 'react';

import { Menu, DarkMode } from '../../components';
import { DarkModeContext } from '../../context/DarkModeProvider';

import Logo from '../../assets/logo.png';

import './styles.scss';

function Home() {
  const { active } = useContext(DarkModeContext).context;

  return (
    <>
      <DarkMode />
      <main>
        <section className={`content-home dark-mode-${active}`}>
          <figure>
            <img src={ Logo } alt="logo" />
          </figure>
          <Menu />
        </section>
      </main>
    </>
  );
}

export default Home;
