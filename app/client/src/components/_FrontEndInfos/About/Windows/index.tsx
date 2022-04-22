import React from 'react';

import './styles.scss';

function AboutWindows() {
  return (
    <main className="main-about-windows">
      <article>
        <p>
          O Windows 10 é a versão mais recente do sistema operacional da Microsoft e representa
          uma série de mudanças relevantes na forma como o SO é produzido, distribuído e mantido
          pela desenvolvedora norte-americana. Ao contrário de edições anteriores,
          o Windows 10 é vendido como um serviço: em vez de um Windows 11, por exemplo, os
          usuários recebem grandes atualizações, que promovem a adição de novos recursos e
          tecnologias de forma gratuita e horizontal, já que todo mundo passa a ter acesso a
          essas novidades.
        </p>
        <br />
        <p>
          Do ponto de vista da usabilidade, o Windows 10 apresenta um design revisitado e que
          busca acabar com as pesadas críticas que acompanharam o ciclo do
          Windows 8 e 8.1 e sua interface desenvolvida para telas sensíveis ao toque.
          Com abordagem mais convencional, o Windows 10 funciona bem em telas touch e em desktops.
        </p>
      </article>
    </main>
  );
}

export default AboutWindows;
