import "./App.css";
import { Counter } from "./Counter";
import { TodoList } from "./TodoList";
import { useTheme } from "./hooks/useTheme";
import { ThemeMode } from "./contexts/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  const handleSecretButtonClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === ThemeMode.Light ? 'Light' : 'Dark'}
      </button>
      <button className="secret-button" onClick={handleSecretButtonClick}>
        Secret Button
      </button>
      <Counter />
      <TodoList />
    </>
  );
}

export default App;
