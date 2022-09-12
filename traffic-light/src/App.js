import React from 'react';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1)
const

  return (
    <div className="app">
      <Button>Next</Button>
      <div>
        <Light />
        <Light />
        <Light />
      </div>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}> {children}</button>
}
function Light({ active }) {
  return <div className=' '></div>

}

export default App;