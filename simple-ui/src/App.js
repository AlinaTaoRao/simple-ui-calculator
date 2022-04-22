import "./App.css";
import { CalculatorContainer } from "./components/CalculatorContainer.jsx"; //for way 1 and way 2
import {CalcItem} from './CalcItem.jsx'; // for way 3

/* for way 1 and way 2, works */
// function App() {
//   return (
//    <header>
//      <CalculatorContainer/>
//    </header>
//   );
// }

// export default App;

/* way 3: generate calc items */

function App() {
  const calcData = [
    { values: ["AC", "DEL", "%", "/"] },
    { values: ["7", "8", "9", "x"] },
    { values: ["4", "5", "6", "+"] },
    { values: ["1", "2", "3", "AC"] },
    { values: ["0", ".", "="] },
  ];

  return (
    <header>
      <div className="calculator-container">
        <input
          className="display-header"
          type="text"
          placeholder="468 % 2 = 234"
        />
        {calcData.map((item, index) => (<CalcItem key = {index} itemClass={`calc-item-${index + 1}`} flexItemClass={`flex-item-${index + 1}`} values= {item.values}/>))}
      </div>
    </header>
  );
}

export default App;
