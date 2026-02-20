import { PageLayout } from "./components/layout";
import "./App.css";

/**
 * Main App component
 *
 * Renders the PageLayout component which includes:
 * - Sidebar with navigation
 * - Header with search and user profile
 * - Current subscription tier block
 * - Connected LLM providers block
 */
function App() {
  return <PageLayout />;
}

export default App;
