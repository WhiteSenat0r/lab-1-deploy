import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext";

/**
 * Custom hook to access theme context
 * @throws Error if used outside of ThemeProvider
 * @returns ThemeContextType with theme and toggleTheme function
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
