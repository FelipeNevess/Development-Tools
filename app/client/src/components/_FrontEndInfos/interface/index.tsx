export interface IRequest {
  about?: JSX.Element,
  installations?: {
    Download: () => JSX.Element;
    Install: () => JSX.Element;
  },
  settings?: JSX.Element,
  requirements?: JSX.Element,
  projects?: JSX.Element
}