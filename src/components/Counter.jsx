import { useState } from "react";

export default function Counter(){
    const [count, setCount]=useState(0);
    const [incrementBy, setIncrementBy]=useState(0);

    function increment(){
        setCount(count + incrementBy);
    }

    function decrement(){
        setCount(count-1);
    }

    function IncrementBy(){
        setIncrementBy(incrementBy+1);
    }

    function DecrementBy(){
        setIncrementBy(incrementBy-1);
    }

    return(
        <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h1>Increment By: {incrementBy}</h1>
        <button onClick={IncrementBy}>Increment By</button>
        <button onClick={DecrementBy}>Decrement By</button>
        </div>
    )


}
