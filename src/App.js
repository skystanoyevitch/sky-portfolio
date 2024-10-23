import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="bg-slate-900">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
