import { useState, React, useEffect } from "react";
import "./App.css";
const App = () => {
  const [operator, setOperator] = useState("+");
  let [globalCount, setGlobalcount] = useState(0);
  let [result, setResult] = useState("");
  const handleOperatorChange = (symbol) => {
    setOperator(symbol);
  };
  const handleSubmit = (event) => {
    const in1 = document.querySelector(".input1");
    const in2 = document.querySelector(".input2");
    event.preventDefault();
    setGlobalcount(globalCount + 1);

    if (operator === "+") {
      setResult(parseInt(in1.value) + parseInt(in2.value));
    } else if (operator === "-") {
      setResult(parseInt(in1.value) - parseInt(in2.value));
    } else if (operator === "*") {
      setResult(parseInt(in1.value) * parseInt(in2.value));
    } else if (operator === "/") {
      setResult(parseInt(in1.value) / parseInt(in2.value));
    }
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Calculator</h1>
        </div>
        <div className="globalcounter">
          <h2>Total Operations: {globalCount}</h2>
        </div>
        <input type="text" placeholder="input 1" className="input1" />
        <h2>{operator}</h2>
        <input type="text" placeholder="input 2" className="input2" />
        <div className="operationsdiv">
          <input
            type="button"
            data-symbol="+"
            value="+"
            className="add"
            id="operations"
            onClick={() => handleOperatorChange("+")}
          />
          <input
            type="button"
            data-symbol="-"
            value="-"
            className="subtract"
            onClick={() => handleOperatorChange("-")}
            id="operations"
          />
          <input
            type="button"
            value="*"
            data-symbol="*"
            className="multiply"
            onClick={() => handleOperatorChange("*")}
            id="operations"
          />
          <input
            type="button"
            data-symbol="/"
            value="/"
            className="divide"
            id="operations"
            onClick={() => handleOperatorChange("/")}
          />
        </div>
        <div className="submitbutton">
          <input
            type="submit"
            value="submit"
            className="submit"
            onClick={handleSubmit}
          />
        </div>
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
        <div className="resetinput">
          <input type="button" value="reset" className="reset" />
        </div>
      </div>
    </>
  );
};

export default App;
