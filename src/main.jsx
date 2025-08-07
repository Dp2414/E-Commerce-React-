import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ Add this
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      {" "}
      {/* ✅ Wrap everything in HashRouter */}
      <CartProvider>
        <App />
      </CartProvider>
    </HashRouter>
  </StrictMode>
);
