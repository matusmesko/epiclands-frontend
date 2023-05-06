import {useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  const [data, setData] = useState(null)

  return (
    <div>
      <NavBar/>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
