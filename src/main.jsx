import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./greeting.jsx";
import Animals from "./animals.jsx";
import Person from "./person.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Person />
  </StrictMode>
);
