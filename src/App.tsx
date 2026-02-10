import "./App.css";
import { Counter } from "./Counter";
import { TodoList } from "./TodoList";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleSecretButtonClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Apply theme to document root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? 'Light' : 'Dark'}
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
