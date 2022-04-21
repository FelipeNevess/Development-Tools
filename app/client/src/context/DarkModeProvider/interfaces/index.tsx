export interface Iprops {
  children: JSX.Element | JSX.Element[];
}

export interface IContextTools {
  context: {
    active: boolean,
    setActive: (value: boolean) => void;
  };
}
