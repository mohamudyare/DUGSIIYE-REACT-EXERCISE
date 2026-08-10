
import React ,  { useReducer } from "react";


const initialState = {
    CounterA : 0 ,
    CounterB : 0
}


const reducer = (state , action) =>{

        switch(action.type){

            case "incrementA" :
                return {...state , CounterA : state.CounterA + 1}
            case "decrementA" :
              return {...state , CounterA : state.CounterA > 0 ? state.CounterA - 1 : 0 }


            case "incrementB" :
                return { ...state , CounterB : state.CounterB + 1}
            case "decrementB" :
             return {...state , CounterB : state.CounterB > 0 ? state.CounterB - 1 : 0 }  
                
            case "reset" :
                return initialState 
            
            default: 
                return state;    
        }
}





 const DoubleCounter = ()=>{

    const[state , dispatch] = useReducer(reducer , initialState)


    return(
        <>
        <div>

            <h1>Double Counter Exercise-13</h1>

            <div>
                <h2>Counter A : {state.CounterA}</h2>
                <button onClick={()=> dispatch({type : "decrementA"})} disabled={state.CounterA === 0}>A-</button>
                <button onClick={()=> dispatch({type : "incrementA"})}>A+</button>
            </div> <br />

            <div>
                <h2>Counter B : {state.CounterB}</h2>
                <button onClick={()=> dispatch({type : "decrementB"})}  disabled={state.CounterB === 0}>B-</button>
                <button onClick={()=> dispatch({type : "incrementB"})}>B+</button>
            </div> <br />

            <button onClick={()=> dispatch({type : "reset"})}>Reset Method</button>

        </div> <br/> <br/>
        </>
    )

 }


 export default DoubleCounter;