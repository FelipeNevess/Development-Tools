import { AiFillHome } from 'react-icons/ai';
import { GoTools } from 'react-icons/go';
import { FaWindows, FaLinux, FaLightbulb, FaUbuntu, FaTasks, FaClipboardList } from 'react-icons/fa';
import { SiGooglechrome, SiVisualstudio } from 'react-icons/si';

import IICons from '../interfaces';

const Icons: IICons[] = ([
  {
    inc: GoTools,
    title: 'Ferramentas',
  },
  {
    inc: FaWindows,
    title: 'Windows Install',
  },
  {
    inc: SiGooglechrome,
    title: 'Google Chrome Configurações',
  },
  {
    inc: FaLinux,
    title: 'Linux Install',
  },
  {
    inc: FaClipboardList,
    title: 'Atividades',
  },
  {
    inc: FaUbuntu,
    title: 'WSL-2 Install',
  },
  {
    inc: FaLightbulb,
    title: 'Dicas',
  },
  {
    inc: FaTasks,
    title: 'Projetos',
  },
  {
    inc: SiVisualstudio,
    title: 'Visual Studio Code Configurações',
  },
]);

export { Icons, AiFillHome };
