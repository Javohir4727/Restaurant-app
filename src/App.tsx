import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import News from "./pages/News/News";
import Pages from "./pages/Pages/Pages";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
