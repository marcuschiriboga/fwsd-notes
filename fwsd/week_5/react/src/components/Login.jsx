import { useNavigate } from "react-router-dom"
export const Login = () => {
    console.log("now the component has been mounted")
    let navigate = useNavigate()
    return (
      <div className="in the login component">
        <input name="email" />
        <input name="password" />
        <button onClick={()=>{"setState(email,password)";navigate("/")}}>Log In</button>
      </div>
    )
  } 

