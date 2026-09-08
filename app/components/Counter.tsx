'use client';
import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <h3 data-testid='count-display'>Count: {counter}</h3>
            <button style={{border: '1rem solid red'}} onClick={() => setCounter(counter+1)}>Increment</button>

        </>
    )


}



export default Counter;