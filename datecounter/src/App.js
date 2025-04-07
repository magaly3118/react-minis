import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = calculateDate(count); // today + count

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      {
        // step slider
      }
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>

      {
        // count input and buttons
      }
      <div>
        <MinusButton setFunc={setCount} delta={step} />
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <PlusButton setFunc={setCount} delta={step} />
      </div>

      {
        // date display
      }
      <p>
        {count === 0 && `Today is ${date}`}
        {count > 0 &&
          `${count} day${count > 1 ? "s" : ""} from Today is ${date}`}
        {count < 0 && `${-count} day${count < -1 ? "s" : ""} ago was ${date}`}
      </p>

      {
        // reset button, not displayed if nothing to reset
      }
      {(count !== 0 || step !== 1) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}

function PlusButton({ setFunc, delta, minus }) {
  return (
    <button
      onClick={() => {
        setFunc((s) => s + delta);
      }}
    >
      {minus ? "-" : "+"}
    </button>
  );
}

function MinusButton({ setFunc, delta }) {
  return <PlusButton setFunc={setFunc} delta={-delta} minus={true} />;
}

// today - count
function calculateDate(delta) {
  const today = new Date();
  const newDate = new Date();
  newDate.setDate(today.getDate() + delta);

  return newDate.toDateString();
}

export default App;
