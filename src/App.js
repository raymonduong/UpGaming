import logo from "./logo.svg";
import "./App.css";
import "atropos/css";
import Atropos from "atropos/react";
import "bootstrap/dist/css/bootstrap.min.css";
<link rel="stylesheet" href="path/to/atropos.css" />;
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

export default function App() {
  return (
    <div id="app">
      {/* Atropos */}
      <Atropos className="my-atropos">{/* ... */}</Atropos>
    </div>
  );
}
