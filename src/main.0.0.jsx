/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 */

/* import { createRoot } from "react-dom/client";
import { createElement } from "react";
import "./index.css";
import App from "./App.jsx";
const firstElement = createElement("h1", null, "Home Page");
console.log(firstElement);
createRoot(document.querySelector("#root")).render(firstElement); */

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const firstElement = <h1>Hello from JSX</h1>;
console.log(firstElement);
createRoot(document.querySelector("#root")).render(firstElement);
