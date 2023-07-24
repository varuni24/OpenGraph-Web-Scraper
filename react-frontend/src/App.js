import React, { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Documentation from "./components/documentation.js";
import TryMe from './components/tryme.js';


export default function App() {
  return (
    <div>
      <h1>cool website!!</h1>


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="tryme" element={<TryMe />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/documentation">Documentation</Link>
          </li>
          <li>
            <Link to="/tryme">Try Me!</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function Home() {

}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}