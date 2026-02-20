import { useState, useEffect } from "react";
import { TodoList } from "./TodoList";
import { PageLayout } from "./components/layout";
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
    <PageLayout>
      <div className="space-y-4">
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            onClick={toggleTheme}
          >
            {theme === ThemeMode.Light ? 'Light' : 'Dark'}
          </button>
          <button
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            onClick={handleSecretButtonClick}
          >
            Secret Button
          </button>
        </div>
        <TodoList />
      </div>
    </PageLayout>
  );
}

export default App;
