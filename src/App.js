import {useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route,Routes , Link} from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Connect from "./pages/Connect";
import Footer from "./components/Footer";
import AdminTeam from "./pages/AdminTeam"

function App() {


  return (
    <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pravidla" element={<Rules />} />
          <Route exact path="/pripojeni" element={<Connect />} />
          <Route exact path="/adminteam" element={<AdminTeam />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
