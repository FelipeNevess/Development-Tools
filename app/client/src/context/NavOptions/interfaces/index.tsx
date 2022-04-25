export interface IContextSelected {
  context: {
    selected: string,
    setSelected: (value: string) => void;
  };
}
