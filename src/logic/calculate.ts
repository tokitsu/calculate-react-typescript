export const calculate = (button: string, state: State): State => {
  return state;
};

export type State = {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
};
