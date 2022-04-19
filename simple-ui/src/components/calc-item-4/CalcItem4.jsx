import "./styles.css";

/* way 1: works */
// export const CalcItem4 = () => {
//   return (
//     <div className="calc-item-4">
//       <input type="submit" value="1" />
//       <input type="submit" value="2" />
//       <input type="submit" value="3" />
//       <input className="flex-item-4" type="submit" value="AC" />
//     </div>
//   );
// };

/* way 2: {} expression, works */
export const CalcItem4 = () => {
    const type = "submit";
    const values = ["1", "2", "3"];
    return (
      <div className="calc-item-4">
        {values.map((value, index) => (
          <input key={index} type={type} value={value} />
        ))}
  
        <input className="flex-item-4" type="submit" value="AC" />
      </div>
    );
  };
