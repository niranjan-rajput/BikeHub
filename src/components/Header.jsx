import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {

  // ✅ Safe selector (prevents crash)
  let cartCount = useSelector((state) => state.cart?.cartProducts || []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container">

          <Link to="/" className="navbar-brand">
            <img style={{ width: "50px", borderRadius: "25px" }} src="https://img.freepik.com/premium-vector/motorcycle-icon-logo-design_775854-635.jpg" alt="Logo"  />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                    <Link to={"/brand"} className="nav-link">Brands </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>

              <li className="nav-item">
                <Link to="/adminlogin" className="nav-link ">
                  Admin Login
                </Link>
              </li>
            </ul>

            {/* Cart */}
            <Link to={"/cart"}>
              <div className="ms-4 position-relative text-white">
                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount.length}
                </span>
              </div>
            </Link>

            {/* <h1 className="text-primary ms-5">[{cartCount.length}]</h1> */}

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;