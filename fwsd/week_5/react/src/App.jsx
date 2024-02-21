import { useState } from "react";
import  Login  from "./components/Login"
import { HomePage } from "./pages/HomePage"
// import {LoginPage} from "./pages/LoginPage";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const initialFormData = {
  email: "",
  password: "",
};

// const inputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((data) => ({
//     ...data,
//     [name]: value,
//   })); 
// }
const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate()
  const inputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((data) => ({
      ...data,
      [name]: value,
    })); 
    console.log(formData)
  }

  let submitForm = (e) => {
    e.preventDefault()
    if (formData.email != "marcus" && formData.password != "password") {
      setFormData(initialFormData)
      navigate("/")
      return alert("wrong password")
    }
    alert("thanks for your submission "+formData.email+" your password is "+formData.password)
    setFormData(initialFormData)
    navigate("/")
  }

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
        <Route path="/" element={<HomePage/>} />
        <Route path="login" element={<Login inputChange={inputChange} submitForm={submitForm} />} />
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
