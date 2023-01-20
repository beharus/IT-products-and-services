import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about";
import Cases from "./pages/cases";
import ErrorPage from "./error-page";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Services from "./pages/services";
import Politics from "./pages/politics";



function App() {
  return (
    <div className="App">
      <div className="cursor"></div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/services" element={<Services />} />
          <Route path="/politics-privasy" element={<Politics/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
