import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./Pages/Home";
import { GlobalStyles } from "./styles/global";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>
);
