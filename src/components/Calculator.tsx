import { ButtonPanel } from "./ButtonPanel";
import { Display } from "./Display";

export const Calculator = () => {
  const buttonHandler = (code: string) => {
    console.log(code);
  };
  return (
    <div>
      <Display />
      <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  );
};
