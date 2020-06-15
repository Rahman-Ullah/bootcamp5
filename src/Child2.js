import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';
const Chile2 = ()=>{
    let [value, dispatch]=useReducer(CounterReducer,0);
    return(
        <div>
            <h2>This is second Child using Counter Reducer</h2>
           Value Reducer state is  = {value} 
           <br />
           <button onClick={()=>{dispatch('INCREMENT')}}>Increment Reducer</button>
        </div>
    )
}
export default Chile2;