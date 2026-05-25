import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);



  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode}
            setDarkMode={setDarkMode}/>

      <main className="flex-1 pt-24">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          <Route path="/projects" element={<Projects darkMode={darkMode}/>} />
          <Route path="/contact" element={<Contact darkMode={darkMode}/>} />
        </Routes>
      </main>

      <Footer darkMode={darkMode}/>
    </BrowserRouter>
  );
};

export default App;
