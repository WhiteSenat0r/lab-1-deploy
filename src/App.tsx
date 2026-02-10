import { useState, useEffect } from "react";
import { TodoList } from "src/TodoList";
import "./App.css";

enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.Dark);

  const handleSecretButtonClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
  };

  // Apply theme to document root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === ThemeMode.Light ? 'Light' : 'Dark'}
      </button>
      <button className="secret-button" onClick={handleSecretButtonClick}>
        Secret Button
      </button>
      <TodoList />
    </>
  );
}

export default App;
