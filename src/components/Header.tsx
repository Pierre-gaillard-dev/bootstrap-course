import { FC } from "react";
import { LogoIcon } from "./Icons";

const Header: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <LogoIcon size={45} />
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  aria-current="page"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Vannes
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Submenu 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Submenu 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Submenu 3
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Auray
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Submenu 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Submenu 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Submenu 3
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
