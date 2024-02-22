import { useState } from "react";
import  Login  from "./components/Login"
import { HomePage } from "./pages/HomePage"
// import {LoginPage} from "./pages/LoginPage";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import {Logout} from "./components/Logout";
import { ProfilePage } from "./pages/ProfilePage";


const initialFormData = {
  email: "",
  password: "",
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [user, setUser] = useState({});
  const navigate = useNavigate()
  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    })); 
  }

  let submitForm = (e) => {
    e.preventDefault()
    if (formData.email != "Roland" && formData.password != "1234") {
      setFormData(initialFormData)
      navigate("/")
      return alert("wrong password")
    }
    alert("thanks for your submission "+formData.email+" your password is "+formData.password)
    setUser({
      email: formData.email,
      password: formData.password
    })
    setFormData(initialFormData)
    navigate("/")
  }

  return (
    <>
      <Navbar user={user}/>
      <br/>
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
        <Route path="/" element={<HomePage user={user}/>} />
        <Route path="login" element={<Login inputChange={inputChange} submitForm={submitForm} />} />
        <Route path="logout" element={<Logout setUser={setUser}/>} />
        <Route path="profile" element={<ProfilePage user={user}/>} />

      </Routes>
      <footer>
        <Link to="login">Need to Log In? </Link>
        <Link to="">Return Home</Link>
      </footer>
      
    </>
  );
};

export default App;
