import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Bottomline
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loginstate">
                Login Test
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                Todo List
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hooks
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="useRef">
                    useRef
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="useCallBack">
                    useCallback
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="useMemo">
                    useMemo
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="customHook">
                    Custom Hook
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comments">
                CRUD
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/secure">
                Access Token
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-info mx-3 my-2 my-sm-0">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
