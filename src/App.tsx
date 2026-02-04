import { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { TodoList } from "./TodoList";

function App() {
  const [secretRevealed, setSecretRevealed] = useState<boolean>(false);

  const handleSecretButtonClick = () => {
    setSecretRevealed(true);
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <>
      {secretRevealed && <h1>NEVER GONNA GIVE YOU UP!</h1>}
      <button className="secret-button" onClick={handleSecretButtonClick}>
        Secret Button
      </button>
      <Counter />
      <TodoList />
    </>
  );
}

export default App;
