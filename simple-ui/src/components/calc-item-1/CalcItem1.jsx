import "./styles.css";

/* way 1: works */
// export const CalcItem1 = () => {
//     return (
//         <div className="calc-item-1">
//           <input type="submit" value="AC" />
//           <input type="submit" value="DEL" />
//           <input type="submit" value="%" />
//           <input className="flex-item-1" type="submit" value="/" />
//         </div>
//     );
// };

/* way 2: {} expression, works */
export const CalcItem1 = () => {
  const type = "submit";
  const values = ["AC", "DEL", "%"];
  return (
    <div className="calc-item-1">
      {values.map((value, index) => (
        <input key={index} type={type} value={value} />
      ))}

      <input className="flex-item-1" type="submit" value="/" />
    </div>
  );
};
