import { useState } from "react";
const Counter = () => {
    const[count,setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(count + 1)
    }

    const handleDecrement = () => {
        setCounter(count - 1)
    }

    return (
        <div>
            <button className="increase" onClick={handleIncrement}> Increase </button>
            <span>{count}</span>
            <button className="decrease" onClick={handleDecrement}> Decrease </button>
        </div>
    )
}

export default Counter;