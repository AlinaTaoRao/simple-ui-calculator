import "./styles.css";

/* way 1: works */
// export const CalcItem2 = () => {
//   return (
//     <div className="calc-item-2">
//       <input type="submit" value="7" />
//       <input type="submit" value="8" />
//       <input type="submit" value="9" />
//       <input className="flex-item-2" type="submit" value="×" />
//     </div>
//   );
// };

/* way 2: {} expression, works */
export const CalcItem2 = () => {
    const type = "submit";
    const values = ["7", "8", "9"];
    return (
      <div className="calc-item-2">
        {values.map((value, index) => (
          <input key={index} type={type} value={value} />
        ))}
  
        <input className="flex-item-2" type="submit" value="x" />
      </div>
    );
  };
