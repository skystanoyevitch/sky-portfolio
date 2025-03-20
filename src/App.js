import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import StrongHabit from "./Pages/StrongHabit/StrongHabit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-terminal-black font-vt">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/strong-habit/*" element={<StrongHabit />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
