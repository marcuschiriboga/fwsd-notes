import { NewButton } from "./button";
import { useState } from "react";
export const ButtonComponent = ({
  count,
  updateCountAdd,
  updateCountSubtract,
}) => {
    const [num, setNum] = useState(0)
    // if refactored
  return (
    <div className="card" style={{outline:"2px solid black"}}>
      <NewButton
        count={count}
        doMaths={()=>setNum(num+1)}
        color={"red"}
        text={"num+1"}
      />
      <div style={{ fontSize: `${num}px` }}>{num}</div>
      <NewButton
        count={count}
        doMaths={()=>setNum(num+1)}
        color={"blue"}
        text={"num-1"}
      />
    </div>
  );
};



// Example of interior functions

// function largeFunction(param1, param2 ){
// // 100 lines of code 
//     function innerFunction(otherData){
//         if (param2 ==otherData){doSomething()}
//     }
//     innerFunction(param1)
// //100 more lines of code
// }
