function operate(state: State): number {
  const current = parseFloat(state.current);
  if (state.operator === "+") {
    return state.operand + current;
  }
  if (state.operator === "-") {
    return state.operand - current;
  }
  return current;
}

function isNumberButton(button: string) {
  return (
    button === "0" ||
    button === "1" ||
    button === "2" ||
    button === "3" ||
    button === "4" ||
    button === "5" ||
    button === "6" ||
    button === "7" ||
    button === "8" ||
    button === "9"
  );
}

function handleNumberButton(button: string, state: State): State {
  if (state.isNextClear) {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    };
  }
  if (state.current === "0") {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    };
  }
  return {
    current: state.current + button,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false
  };
}

function isOperatorButton(button: string) {
  return button === "+" || button === "-";
}

function handleOperatorButton(button: string, state: State): State {
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true
    };
  }
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: button,
    isNextClear: true
  };
}

function isEquelButton(button: string) {
  return button === "=";
}

function handleEquelButton(button: string, state: State): State {
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: null,
    isNextClear: true
  };
}

export const calculate = (button: string, state: State): State => {
  if (isNumberButton(button)) {
    return handleNumberButton(button, state);
  }
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state);
  }
  if (isEquelButton(button)) {
    return handleEquelButton(button, state);
  }
};

export type State = {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
};
