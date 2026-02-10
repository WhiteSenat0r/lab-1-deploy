import { createContext, useState, useEffect, ReactNode } from "react";

// Define the ThemeMode enum
export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

// Define the shape of the context value
export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

// Create the context with undefined as initial value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to wrap the app
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.Dark);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
  };

  // Apply theme to document root element whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
