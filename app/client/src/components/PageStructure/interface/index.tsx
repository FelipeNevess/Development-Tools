import { ReactNode } from 'react';

import { IRequest as IR } from '../../_FrontEndInfos/interface';

export interface IRequest {
  icon: ReactNode;
  title: string;
  filter?: JSX.Element;
  filterLinux?: JSX.Element;
  filterPage?: IR | undefined;
}