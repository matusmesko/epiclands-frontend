import {useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  const [data, setData] = useState(null)

  // const getMcServerInfo = async () => {
  //   return await fetch('https://api.mcsrvstat.us/2/mc.epiclands.cz', {
  //     cache: 'no-cache'
  //   })
  //       .then(res => res.json())
  //       .then((result) => {
  //         return result;
  //       });
  // };



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
