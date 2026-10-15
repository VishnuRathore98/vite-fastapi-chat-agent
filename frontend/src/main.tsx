import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import App from "./App.jsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
