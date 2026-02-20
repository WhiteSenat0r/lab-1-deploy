import { PageLayout } from "./components/layout/PageLayout";

function App() {
  return (
    <PageLayout>
      <div
        className="flex-1 flex items-center justify-center p-8"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="max-w-2xl w-full">
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-family-heading)",
              color: "var(--color-foreground)"
            }}
          >
            Welcome to Beezi Platform
          </h1>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            The sidebar has been implemented based on the Figma design. This is a placeholder
            content area where other components like the header, tabs, and content blocks will be added.
          </p>
          <div
            className="p-6 border rounded-lg"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-card)"
            }}
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--color-foreground)" }}
            >
              Implementation Status
            </h2>
            <ul
              className="space-y-2"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              <li>✅ TailwindCSS configured</li>
              <li>✅ Design tokens and CSS variables added</li>
              <li>✅ Sidebar component implemented</li>
              <li>✅ PageLayout structure created</li>
              <li>⏳ Page header (to be implemented)</li>
              <li>⏳ Tab navigation (to be implemented)</li>
              <li>⏳ Content blocks (to be implemented)</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default App;
