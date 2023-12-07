import { useState } from "react";
import Count from "./Components/Count";
import Decrement from "./Components/Decrement";
import Increment from "./Components/Increment";
import Reset from "./Components/Reset";
import "./style.css"

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container center">
        <Count Counter={count} />
      <div className="counter-container">
        <Increment increase={count} number={setCount} />
        <Decrement decrease={count} decnumber={setCount} />
        <Reset reload={setCount} />

        {/* <h1>{Count}</h1>
      <button onClick={()=> {setCount(Count + 1)} }>Increment</button>
      <button onClick={()=> {setCount(Count - 1)} }>Decrement</button>
      <button onClick={()=> {setCount(0)} }>Reset</button> */}
      </div>
    </div>
  );
};

export default App;