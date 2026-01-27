import { useState } from "react";

const MIN_VALUE = -1000;
const MAX_VALUE = 1000;

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  // Increment handler with limit check
  const increment = () => {
    setCount((prev) => Math.min(prev + 1, MAX_VALUE));
  };

  // Decrement handler with limit check
  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, MIN_VALUE));
  };

  // Reset handler
  const reset = () => {
    setCount(0);
  };

  // Handle direct input with NaN validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input
    if (value === "" || value === "-") {
      setCount(0);
      return;
    }

    const numValue = parseInt(value, 10);

    // Handle NaN cases - keep previous value
    if (isNaN(numValue)) {
      return;
    }

    // Clamp value within limits
    const clampedValue = Math.max(MIN_VALUE, Math.min(MAX_VALUE, numValue));
    setCount(clampedValue);
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <p>Current count: {count}</p>
        <input
          type="number"
          value={count}
          onChange={handleInputChange}
          min={MIN_VALUE}
          max={MAX_VALUE}
        />
      </div>
      <div>
        <button onClick={decrement} disabled={count <= MIN_VALUE}>
          -1
        </button>
        <button onClick={increment} disabled={count >= MAX_VALUE}>
          +1
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <small>
          Limits: {MIN_VALUE} to {MAX_VALUE}
        </small>
      </div>
    </div>
  );
};
