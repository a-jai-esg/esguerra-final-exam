import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
// optional addition
//import Navbar from "./Components/Navbar";
function App() {
  const [response, setResponse] = useState({});
  
  return (
    <>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile response={response}/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login setResponse={setResponse}/>} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div> 
    </>
  );
}

export default App;
