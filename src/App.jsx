import { useState, useEffect } from "react";

import "./App.css";
import { Person } from "./components/Main/index";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert(`You changed the counter to ${counter}!`);
  }, [counter]);

  const handleMinus = () => {
    setCounter((prevCounter) => {
      return (prevCounter -= 1);
    });
  };

  const handlePlus = () => {
    setCounter((prevCounter) => {
      return (prevCounter += 1);
    });
  };

  return (
    <>
      <div className="App">
        <button onClick={handleMinus}>-</button>
        <h2>{counter}</h2>
        <button onClick={handlePlus}>+</button>

        {/* <section>
          <Person fName={"Lisa"} lName={"Barlow"} age={28} />
          <Person fName={"Jen"} lName={"Shah"} age={25} />
          <Person fName={"Mary"} lName={"Cosby"} age={21} />
          <Person fName={"Meredith"} lName={"Marks"} age={29} />
          <Person fName={"Whitney"} lName={"Rose"} age={23} />
          <Person fName={"Heather"} lName={"Gay"} age={27} />
        </section> */}
      </div>
    </>
  );
};

export default App;
