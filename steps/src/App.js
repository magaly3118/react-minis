import { useState } from "react";

const timesUnicode = "\u00D7";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const purpleButton = { backgroundColor: "#7950f2", color: "#fff" };

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

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button style={purpleButton} onClick={handlePrevious}>
              Previous
            </button>
            <button style={purpleButton} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
