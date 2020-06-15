import React, { useContext } from 'react';
import Child from './Child';
import CounterContext from './CounterContext';
import Chile2 from './Child2';

const Parent = () =>{
    let Gvalue = useContext(CounterContext);
    return(
        <div>
           <Child  />
           <Chile2 />
        </div>
    );
}
export default Parent;