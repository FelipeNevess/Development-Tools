import { ReactNode } from 'react';

export interface IRequest {
  icon: ReactNode;
  title: string;
  filter?: JSX.Element
  filterLinux?: JSX.Element
}