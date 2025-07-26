// App.js
import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import StrongHabit from "./Pages/StrongHabit/StrongHabit";
import CustomCursor from "./components/CustomCursor";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen w-full bg-background dark:bg-dark-background font-sans text-text-primary dark:text-dark-text-primary transition-colors duration-300">
      {/* Ensure full screen coverage with consistent background */}
      <div className="fixed inset-0 bg-background dark:bg-dark-background -z-10" />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/strong-habit/*" element={<StrongHabit />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
