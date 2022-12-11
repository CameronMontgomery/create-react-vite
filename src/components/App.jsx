import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="app">
      React + Vite
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
