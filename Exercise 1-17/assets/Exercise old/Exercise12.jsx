import { useState } from 'react'


const Counter = ()=> {

    const [count , setCount] =  useState(0);

    const increment = ()=>  setCount(count + 1);

    const decrement = ()=> {
        if(count > 0)  setCount(count - 1);
    }

    return(
        <>
        <div>
            <h1>Exercie 12</h1> <br/> 
            <h2>Count : {count}</h2>
            <button onClick={decrement} disabled={count === 0}>Decrement</button>
            <button onClick={increment}> Increment </button>   
        </div> <br/> <br/>
        </>
    )
}

export default Counter;