// App.js
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, Outlet, useNavigation, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

import Cricketer from "./pages/Cricketers";
import { useStore } from "@nanostores/react";
import { $token } from "./store/user.atom";
import Dashboard from "./pages/Admin/Dashboard";
import About from "./pages/About/About";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Routes  >
      `  <Route element={<CheckAuth />}>`
        <Route path="/cricketer" element={<Cricketer/> }/>
        <Route path="/About" element={<About/> }/>
        </Route>
      </Routes>

      {/* <Sidebar> */}
        {" "}
        <Routes>
        `<Route element={<CheckAuth />}>
          
          <Route path="/Admin" element={<Dashboard />} />
          <Route path="/Admin/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      {/* </Sidebar> */}
    </BrowserRouter>
  );
}

export default App;

function CheckAuth(){

  const navigate = useNavigate();
const token=  useStore($token)
console.log("TOKEN CHECK",token)
useEffect(()=>{
  if(token==""){
    navigate("/");

  }
},[navigate, token])
  return <Outlet/>

}
