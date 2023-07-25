import React from 'react';
import { Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import DocumentationPage from './components/DocumentationPage';
import TryMePage from './components/TryMePage'; 



function App() {
  return (
    <div>

      <div>
        <NavigationBar />
      </div>

      <h1>Open Graph Web Scrapper</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/tryme" element={<TryMePage />} />
      </Routes>

    </div>
  );
}

export default App

