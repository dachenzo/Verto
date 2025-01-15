import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "bootstrap/dist/css/bootstrap.css";
import "./Global.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
