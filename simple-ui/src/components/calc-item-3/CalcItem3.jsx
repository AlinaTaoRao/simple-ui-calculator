import "./styles.css";

/* way 1: works */
// export const CalcItem3 = () => {
//   return (
//     <div className="calc-item-3">
//       <input type="submit" value="4" />
//       <input type="submit" value="5" />
//       <input type="submit" value="6" />
//       <input className="flex-item-3" type="submit" value="+" />
//     </div>
//   );
// };

/* way 2: {} expression, works */
export const CalcItem3 = () => {
    const type = "submit";
    const values = ["4", "5", "6"];
    return (
      <div className="calc-item-3">
        {values.map((value, index) => (
          <input key={index} type={type} value={value} />
        ))}
  
        <input className="flex-item-3" type="submit" value="+" />
      </div>
    );
  };
