import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">

        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://img.freepik.com/premium-vector/motorcycle-icon-logo-design_775854-635.jpg"
            alt="Bike Logo"
            style={{ width: "45px", borderRadius: "50%" }}
            className="me-2"
          />
          <span className="fw-bold">BikeHub</span>
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">

            {[
              { path: "/brand", label: "Brands" },
              { path: "/allproduct", label: "All Product" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
              { path: "/adminlogin", label: "Admin Login" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className="nav-link px-3 rounded"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#0e90e1" : "transparent",
                    color: "white",
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}




// import React from 'react'
// import { Link } from "react-router-dom";


// export default function Header() {
//   return (
//     <>
//       <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
//                 <div class="container-fluid">
//                     <Link to={"/"}>
//                         <a class="navbar-brand" href="#">
//                             <img style={{ width: "50px", borderRadius:"25px" }} src="https://img.freepik.com/premium-vector/motorcycle-icon-logo-design_775854-635.jpg" alt="" />
//                         </a>
//                     </Link>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <Link to={"/brand"} class="nav-item text-decoration-none">
//                                 <a class="nav-link text-white">Brands</a>
//                             </Link>
//                             <Link to="/about" class="nav-item text-decoration-none">
//                                 <a class="nav-link text-white">About</a>
//                             </Link>
//                             <Link to={"/contact"} class="nav-item text-decoration-none">
//                                 <a class="nav-link text-white">Contact</a>
//                             </Link>
//                             <Link to={"/addBrands"} class="nav-item text-decoration-none">
//                                 <a class="nav-link text-white">Add-Brands</a>
//                             </Link>
                           
//                             <Link to={"/addminlogin"} class="nav-item text-decoration-none">
//                                 <a class="nav-link text-white">Admin-Login</a>
//                             </Link>
                           
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//     </>
//   )
// }
