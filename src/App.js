import { useState } from "react";
import { Display } from "./components/display/Display";
import "./App.css";
import { Buttons } from "./components/buttonContainer/Buttons";

const App = () => {
  //Declare local vatiable for display text
  const [displayText, setDisplayText] = useState("");
  const [history, sethistory] = useState("");
  const [total, setTotal] = useState();
  const [calculatorON, setCalculatorOn] = useState(true);
  //Receive buttons value when clicked.
  const handleOnButtonClick = (buttonValue) => {
    //receive value when button is clicked

    if (total) {
      setTotal(null);
    }

    //total and return
    if (buttonValue === "=") {
      const ttl = eval(displayText);

      // make total prank
      let extra = Math.ceil(Math.random() * 10);
      if (extra > 3) {
        extra = 0;
      }

      setTotal(ttl + extra);
      sethistory(displayText);
      setDisplayText("");
      return;
    }

    //C button
    if (buttonValue === "C") {
      const str = displayText.slice(0, -1);
      return setDisplayText(str);
    }

    //AC button
    if (buttonValue === "AC") {
      setDisplayText("");
      return;
    }

    //ON/OFF button
    if (buttonValue === "ON") {
      setDisplayText("");

      return;
    }

    //OFF button
    if (buttonValue === "OFF") {
      return setCalculatorOn(false);
    }

    console.log(buttonValue);
    //concat all the input value
    setDisplayText(displayText + buttonValue);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "red" }}>Prank Calulator</h1>
      <div className="container">
        <div className="calculator">
          <div style={{ textAlign: "right", margin: "10px" }}>
            {total && history}
          </div>
          <div className="display">
            <Display txtDisp={displayText} total={total} history={history} />

            {calculatorON ? (
              <Buttons buttonClick={handleOnButtonClick} />
            ) : (
              <button className="btnOn" onClick={() => setCalculatorOn(true)}>
                ON
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
