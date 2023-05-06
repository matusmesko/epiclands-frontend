import {useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Connect from "./pages/Connect";

function App() {


  return (
    <div>
      <NavBar/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/pravidla" element={<Rules />} />
          <Route index path="/pripojeni" element={<Connect />} />
        </Routes>
    </div>
  );
}

export default App;
