import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  function handleClick() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      {count === 0
        ? "Today is "
        : count > 0
        ? `Next ${count} days will be `
        : `Last ${Math.abs(count)} days was `}
      <span>{date.toDateString()}</span>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleClick}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
