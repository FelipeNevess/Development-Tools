import { MutableRefObject, ReactNode } from "react";

export interface IRequest {
  navClass?: string;
  liClass?: string;
  reff?: MutableRefObject<HTMLUListElement>;
  children: ReactNode;
}