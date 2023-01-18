import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about";
import Cases from "./pages/cases";



function App() {
  return (
    <div className="App">
      <div className="cursor"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<Cases />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
