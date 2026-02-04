import "./App.css";
import { Counter } from "./Counter";
import { TodoList } from "./TodoList";

function App() {
  const handleSecretButtonClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <>
      <button className="secret-button" onClick={handleSecretButtonClick}>
        Secret Button
      </button>
      <Counter />
      <TodoList />
    </>
  );
}

export default App;
