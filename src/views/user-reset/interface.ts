export interface DocumentNode {
  id: string;
  class: string;
  data: string;
  input: InputNode;
  button: ButtonNode;
  tip: TipNode;
}

export interface PageStructure {
  [key: string]: DocumentNode;
}

interface InputNode {
  class: string;
  type: string;
  placeholder: string;
  change: () => void;
}

interface ButtonNode {
  hasButton: boolean;
  text: string;
  method: () => void;
}

interface TipNode {
  showTip: boolean;
  text: string;
}
