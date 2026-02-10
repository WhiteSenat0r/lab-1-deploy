import { ThemeMode } from "../enums/ThemeMode";

// Define the shape of the context value
export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}
