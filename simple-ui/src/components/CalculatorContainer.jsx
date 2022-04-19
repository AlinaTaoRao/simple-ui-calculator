import "./styles.css";
import { CalcItem1 } from "./calc-item-1/CalcItem1.jsx";
import { CalcItem2 } from "./calc-item-2/CalcItem2.jsx";
import { CalcItem3 } from "./calc-item-3/CalcItem3.jsx";
import { CalcItem4 } from "./calc-item-4/CalcItem4.jsx";
import { CalcItem5 } from "./calc-item-5/CalcItem5.jsx";

export const CalculatorContainer = () => {
  return (
    <div className="calculator-container">
      <input
        className="display-header"
        type="text"
        placeholder="468 % 2 = 234"
      />
      <CalcItem1 />
      <CalcItem2 />
      <CalcItem3 />
      <CalcItem4 />
      <CalcItem5 />
    </div>
  );
};
