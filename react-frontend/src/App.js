import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import DocumentationPage from "./components/DocumentationPage";
import TryMePage from "./components/TryMePage";
import FooterBar from "./components/FooterBar";
import "./index.css";
import backgroundImage from "./bkg3.jpg"

function App() {
  return (
    <div class="overflow-x-hidden bg-cover" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div>
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/tryme" element={<TryMePage />} />
      </Routes>
      <div>
        <FooterBar />
      </div>
    </div>
  );
}

export default App;
