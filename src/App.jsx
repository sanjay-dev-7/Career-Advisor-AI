import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CareerAdvisor from "./pages/CareerAdvisor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-advisor" element={<CareerAdvisor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;