import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Profile from "./Components/Profile";

// optional addition
//import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div> 
    </>
  );
}

export default App;
