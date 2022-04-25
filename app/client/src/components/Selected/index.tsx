import React, { useCallback, useContext, useEffect } from 'react';

import { NavOptionsContext } from '../../context/NavOptions';
import { IRequest } from '../_FrontEndInfos/interface';

import './styles.scss';

function Selected({
  about,
  installations,
  settings,
  projects,
  requirements
}: IRequest): JSX.Element {
  const { selected, setSelected } = useContext(NavOptionsContext).context;

  const retornJSX = useCallback(() => {
    if (selected === 'Sobre') {
      return (
        <section id="about" >
          { about }
        </section>
      );
    }
    if (selected === 'Instalação') {
      return (
        <div className="block">
          <section id="install" className="dn-true">
            <installations.Install />
          </section>
          {/* <section id="download" className="dn-false">
            <installations.Download />
          </section> */}
        </div>
      );
    }
    if (selected === 'Configurações') {
      return (
        <section id="settings">
          { settings }
        </section>
      );
    }
    if (selected === 'Requisitos') {
      return (
        <section id="requirements">
          { requirements }
        </section>
      );
    }
    if (selected === 'Projetos') {
      return (
        <section id="projects">
          { projects }
        </section>
      );
    }
    return null;
  }, [about, installations, projects, requirements, selected, settings]);

  useEffect(() => {
    setSelected('Sobre');
  }, [retornJSX, setSelected]);

  return (
    <div className="contente-selected">
      { retornJSX() }
    </div>
  );
}

export default Selected;


