import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster />
    </Provider>
  </StrictMode>,
);
