import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Learnpage from "./pages/Learnpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learn" element={<Learnpage />} />

          <Route
            path="*"
            element={
              <div className="w-full h-screen flex justify-center items-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#000000]">
                  404
                </h1>{" "}
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
