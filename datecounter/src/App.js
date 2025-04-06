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

  const date = calculateDate(count);

  return (
    <>
      <div>
        <MinusButton setFunc={setStep} delta={1} />
        Step: {step}
        <PlusButton setFunc={setStep} delta={1} />
      </div>

      <div>
        <MinusButton setFunc={setCount} delta={step} />
        Count: {count}
        <PlusButton setFunc={setCount} delta={step} />
      </div>

      <p>
        {count === 0 && `Today is ${date}`}
        {count > 0 &&
          `${count} day${count > 1 ? "s" : ""} from today is ${date}`}
        {count < 0 && `${-count} day${count < -1 ? "s" : ""} ago was ${date}`}
      </p>
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

function calculateDate(delta) {
  const today = new Date();
  const newDate = new Date();
  newDate.setDate(today.getDate() + delta);

  return newDate.toDateString();
}

export default App;
