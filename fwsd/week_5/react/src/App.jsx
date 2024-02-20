import { useState } from "react";
import  {Login}  from "./components/Login"
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Routes>
        {/* 
          Within Routes, we can render any child Route components. Each 
          Route component should have two props:
            1.  path - this is a string, and represents the URL after 
                http://localhost:3000/ that should render the component in 
                question
            2.  element - this is the component that should be rendered
                when the currently active route matches the Route component's
                path attribute
        */}
        <Route path="/" element={<div>the home page</div>} />
        <Route path="login" element={<Login />} />
      </Routes>
      <div>
        <Link to="login">Need to Log In? </Link>
        <Link to="">Return Home</Link>
      </div>
      {/* <div className="login field">{showLogin && <Login />}</div> */}
      {/* <button onClick={() => setShowLogin(!showLogin)}>Toggle Login</button> */}
    </>
  );
};

export default App;
