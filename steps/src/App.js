import { useState } from "react";

const timesUnicode = "\u00D7";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const isActiveStep = (current_step, check_step) => {
  return current_step >= check_step ? "active" : "";
};

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {isOpen ? timesUnicode : "+"}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {[1, 2, 3].map((num) => {
              return <div className={`${isActiveStep(step, num)}`}>{num}</div>;
            })}
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ onClick, children }) {
  const style = { backgroundColor: "#7950f2", color: "#fff" };

  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

export default App;
