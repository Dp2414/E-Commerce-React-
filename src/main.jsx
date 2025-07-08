import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/Context.jsx";

// ✅ Setup LocatorJS before rendering the app
// if (import.meta.env.DEV) {
//   import("@locator/runtime").then((m) => m.setupLocatorUI());
// }
createRoot(document.getElementById("root")).render(
    <CartProvider>
      <App />
    </CartProvider>
);
