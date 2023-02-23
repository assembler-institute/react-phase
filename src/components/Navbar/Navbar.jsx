import React, { memo, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/User/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Zapateando
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                // console.log(isActive) ||
                `nav-link ${isActive && "active"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/checkout"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : null}`
              }
            >
              Checkout
            </NavLink>
            <NavLink
              to="/userProfile"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : null}`
              }
            >
              {user?.name}
            </NavLink>
            <button
              className="btn btn-dark"
              onClick={() =>
                setUser({
                  ...user,
                  name: "Edgar",
                  age: 18,
                })
              }
            >
              Login
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
