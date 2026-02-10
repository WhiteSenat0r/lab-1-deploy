import { useState } from "react";

export const Clicker = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  // Handle button click - increment count
  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Clicker</h1>
      <div>
        <p>Click count: {clickCount}</p>
        {clickCount >= 100 && (
          <p>
            <strong>Surprise! 🎉</strong>
          </p>
        )}
      </div>
      <div>
        <button onClick={handleClick}>Click me!</button>
      </div>
    </div>
  );
};
