import "./styles.css";

/* way 1: works */
// export const CalcItem5 = () => {
//   return (
//     <div className="calc-item-5">
//       <input type="submit" value="0" />
//       <input type="submit" value="." />
//       <input className="flex-item-5" type="submit" value="=" />
//     </div>
//   );
// };

/* way 2: {} expression, works */
export const CalcItem5 = () => {
    const type = "submit";
    const values = ["0", "."];
    return (
      <div className="calc-item-5">
        {values.map((value, index) => (
          <input key={index} type={type} value={value} />
        ))}
  
        <input className="flex-item-5" type="submit" value="="  />
      </div>
    );
  };

