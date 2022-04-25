import { AiFillHome } from 'react-icons/ai';
import { GoTools } from 'react-icons/go';
import { FaWindows, FaLinux, FaLightbulb, FaUbuntu, FaTasks, FaClipboardList } from 'react-icons/fa';
import { SiGooglechrome, SiVisualstudio } from 'react-icons/si';

import IICons from '../interfaces';

const Icons: IICons[] = ([
  {
    inc: GoTools,
    title: 'Ferramentas',
    to: 'ferramentas',
  },
  {
    inc: FaWindows,
    title: 'Windows Install',
    to: 'windows'
  },
  {
    inc: SiGooglechrome,
    title: 'Google Chrome Configurações',
    to: 'google-chome'
  },
  {
    inc: FaLinux,
    title: 'Linux Install',
    to: 'linux'
  },
  {
    inc: FaClipboardList,
    title: 'Atividades',
    to: 'atividades'
  },
  {
    inc: FaUbuntu,
    title: 'WSL-2 Install',
    to: 'wsl-2'
  },
  {
    inc: FaLightbulb,
    title: 'Dicas',
    to: 'dicas'
  },
  {
    inc: FaTasks,
    title: 'Projetos',
    to: 'projetos'
  },
  {
    inc: SiVisualstudio,
    title: 'Visual Studio Code Configurações',
    to: 'visual-studio-code'
  },
]);

export { Icons, AiFillHome };
