import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = ({ user }) => {
  console.log(user);
  return (
    <header>
      <nav>
        {!user.email? "Welcome!" : `Welcome ${user.email}!`}
        <span className="navbar">
            <li>
              <Link to="/">Home </Link>
            </li>
            {!user.email ? (
              <li>
                <Link to="login">Login </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="profile">Profile </Link>
                </li>
                <li>
                  <Link to="logout">Logout</Link>
                </li>
              </>
            )}
        </span>
      </nav>
    </header>
  );
};
