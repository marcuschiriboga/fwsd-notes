import { useNavigate } from "react-router-dom"

export const Logout = ({setUser}) => {
    const navigate = useNavigate()
    setUser({email: "",
    password: "",}) 
    navigate("/")
    return
}