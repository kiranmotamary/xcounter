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
    <div style={{paddingLeft:"10px"}}>
        <h1>Counter App</h1>
        <p>Count: {value}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
)
}
export default Counter;