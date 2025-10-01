import { useAuth } from "../auth/AuthContext";
import { Link, NavLink } from "react-router";
/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <Link to="/activities">Activities</Link>
        {token ? (
          <NavLink onClick={logout} to="/">Log out</NavLink>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}
