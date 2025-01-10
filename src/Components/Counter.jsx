import React,{useState} from "react";
const Counter=()=>{
    const [value,setValue]=useState(0)
    const handleIncrement=()=>{
        setValue((prevValue) => prevValue + 1);
    }
    const handleDecrement=()=>{
        setValue((prevValue) => prevValue - 1);
    }
return (
    <div>
        <h1>Counter App</h1>
         Count: {value}
         <div>
         <button onClick={handleIncrement}>Increment</button>
         <button onClick={handleDecrement}>Decrement</button>
         </div>

    </div>
)
}
export default Counter;