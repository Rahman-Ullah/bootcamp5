import React, { useState } from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';
function App() {
  let myvalue = useState(0);
  return (
    <div>
      <CounterContext.Provider value={myvalue}>
      <Parent />
      </CounterContext.Provider>
    
    </div>
  );
}

export default App;
