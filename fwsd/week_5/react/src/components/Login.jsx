import { useNavigate } from "react-router-dom";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = ({ inputChange, submitForm }) => {
  // console.log("now the component has been mounted")
  let navigate = useNavigate();

  return (
    <div className="in the login component">
      <form onSubmit={submitForm}>
        <label htmlFor="email">email</label>
        <input name="email" required={true}  onChange={inputChange} />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" onChange={inputChange} />
        <button
          onClick={() => {
            "setState(email,password)";
            navigate("/");
          }}
        >
          Log In
        </button>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const logOut = user => {
  // delete user;
  let navigate = useNavigate();
  navigate("/");
};

export default Login;

// Login.
// "<Header/>"
{
  /* <Navbar/> */
}
{
  /* <Login> */
}
// footer

// .com/profile

// "<Header/>"
{
  /* <Navbar/> */
}
{
  /* <Profile> */
}
// footer

// "<Header/>"
{
  /* <Navbar/> */
}
{
  /* <MainContent> */
}
// <sidebarContent>
// <Advertisements>
// footer
