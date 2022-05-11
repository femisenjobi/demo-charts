import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="App">
      This is the Home page
    </div>
  );
}
function Flows() {
  return (
    <div className="App">
      This is the flows page
    </div>
  );
}
function StepTypes() {
  return (
    <div className="App">
      This is the flows page
    </div>
  );
}
function FlowSteps() {
  return (
    <div className="App">
      This is the flows page
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flows">Flows</Link></li>
        <li><Link to="/step-types">Step Types</Link></li>
        <li><Link to="/flow-steps">Flow Steps</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flows" element={<Flows />} />
        <Route path="/step-types" element={<StepTypes />} />
        <Route path="/flow-steps" element={<FlowSteps />} />
      </Routes>
    </div>
  );
}

export default App;
