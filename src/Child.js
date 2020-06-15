import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child=()=>{
    let GlobalCont = useContext(CounterContext);
    return(
        <div>
          <h2>This is first Child using Counter Context</h2>
          Value Context state is = {GlobalCont}  <br />
          <button onClick={()=>{GlobalCont[1](GlobalCont[0]+1)}}>Increment Context</button>
        </div>
    );
}
export default Child;