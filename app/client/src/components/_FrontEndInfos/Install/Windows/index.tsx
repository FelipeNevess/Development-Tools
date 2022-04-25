import React from 'react';

import Main from '../../../Main';

import download1 from './img/down-part1.png';
import download2 from './img/down-part2.png';
import download3 from './img/down-part3.png';
import download4 from './img/down-part4.png';
import download5 from './img/down-part5.png';

import Download from './Dowload';

import './styles.scss';

function Install() {
  return (
    <Main mainClass='main-install-windows'>
      <article>
        <div>
          <p>
            Passo 1. Caso ainda não tenha feito o download, entre no site da
            <a
              href='https://www.microsoft.com/pt-br/software-download/windows10'
              target="_blank"
              rel="noreferrer"
            > Microsoft</a> e faça o download;
          </p>
          <figure>
            <img src={download1} alt="download-1" />
          </figure>
          <p>
            Se você deseja atualizar seu PC atual, escolha Atualizar este PC agora.
            Isso iniciará o processo de atualização e você pode parar de seguir o restante deste guia.
            Outra opção é fazer isso por meio de arquivos ISO. Nesse caso, clique em Criar mídia de
            instalação para outro PC {'>'} Avançar
          </p>
          <figure>
            <img src={download2} alt="download-2" />
          </figure>
          <p>
            Se você selecionou atualizar seu PC atual, Windows 10 de novembro de 2021 A atualização
            começará a ser baixada e pronto. Para outro PC, será solicitado que você selecione Idioma,
            Edição e Arquitetura. Escolha os detalhes do ISO do Windows 10 que você deseja baixar.
            Depois de decidir o que deseja baixar, clique em Avançar .
          </p>
          <figure>
            <img src={download3} alt="download-3" />
          </figure>
          <p>Selecione o ISO arquivo opção e onde deseja salvá-lo.</p>
          <figure>
            <img src={download4} alt="download-4" />
          </figure>
          <p>Clique em Avançar para iniciar o processo de download.</p>
          <figure>
            <img src={download5} alt="download-5" />
          </figure>
        </div>
      </article>
    </Main>
  );
}

const conj = {
  Download,
  Install
}

export default conj;
