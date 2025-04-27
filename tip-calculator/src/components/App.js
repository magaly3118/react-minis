import Bill from "./Bill";
import Output from "./Output";
import Tip from "./Tip";
import Reset from "./Reset";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill amount={bill} setBill={setBill} />
      <Tip who={"you"} tip={tip1} setTip={setTip1} />
      <Tip who={"your friend"} tip={tip2} setTip={setTip2} />

      {bill > 0 && (
        <>
          <Output bill={bill} percent1={tip1} percent2={tip2} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
