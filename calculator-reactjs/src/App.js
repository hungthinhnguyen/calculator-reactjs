import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const symbols = ["+", "-", "*", "/", "."];
  const handleClick = (e) => {
    if (symbols.includes(e) && symbols.includes(result.slice(-1))) {
      return;
    }
    setResult(result + e);
  };

  const del = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result.toString()));
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className="container">
      <form>
        <input readOnly type="text" value={result || "0"} />
      </form>

      <div className="keypad">
        <button onClick={del} id="del">
          DEL
        </button>
        <button onClick={backspace} id="backspace">
          C
        </button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate} className="result">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
