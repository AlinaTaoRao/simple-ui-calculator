import "./CalcItem.css";

/* for way 3: generate calc item.   */

/* try 1: ternary, array.at(-1), works */
// export const CalcItem = ({ itemClass, flexItemClass, values}) => {
//   console.log("values: ", values);
//   return (
//     <div className={itemClass}>
//       {values.map((value, index) =>
//         value === values.at(-1) ? (
//           <input key={index} type="submit" value={value} className={flexItemClass}/>
//         ) : (
//           <input key={index} type="submit" value={value} />
//         )
//       )}
//     </div>
//   );
// };

/* try 2: ternary, array.length -1 , works, best way */
export const CalcItem = ({ itemClass, flexItemClass, values}) => {
    console.log("values: ", values);
    return (
      <div className={itemClass}>
        {values.map((value, index) =>
          index === values.length - 1 ? (
            <input key={index} type="submit" value={value} className={flexItemClass}/>
          ) : (
            <input key={index} type="submit" value={value} />
          )
        )}
      </div>
    );
  };
