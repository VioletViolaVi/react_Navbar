import "./App.css";
import { Person } from "./components/Main/index";

const App = () => {
  return (
    <>
      <div className="App">
        <Person fName={"Lisa"} lName={"Barlow"} age={28} />
        <Person fName={"Jen"} lName={"Shah"} age={25} />
        <Person fName={"Mary"} lName={"Cosby"} age={21} />
        <Person fName={"Meredith"} lName={"Marks"} age={29} />
        <Person fName={"Whitney"} lName={"Rose"} age={23} />
        <Person fName={"Heather"} lName={"Gay"} age={27} />
      </div>
    </>
  );
};

export default App;
