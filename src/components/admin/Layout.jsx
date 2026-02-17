// import React from 'react'
// import { Link, Outlet, useNavigate } from 'react-router-dom'

// function Layout() {

//     let navigate = useNavigate();
//     function handleLogout() {
//         localStorage.clear("isLoggedIn");

//         navigate("/adminlogin");
//     };

//     return (
//         <>
//             <div className="bg-dark mt-2">
//                 <div className="row">

//                     {/* Sidebar */}
//                     <div className="col-lg-2">
//                         <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
//                             <div className="position-sticky">
//                                 <div className="list-group list-group-flush mx-3 mt-4">
//                                     <Link to={"/admin"}>
//                                         <a
//                                             className="list-group-item list-group-item-action py-2 ripple"
//                                             aria-current="true"  >
//                                             <i className=""></i><span>Main dashboard</span>
//                                         </a>
//                                     </Link>
//                                     <Link to={"/admin/addproduct"}>
//                                         <a className="list-group-item list-group-item-action py-2 ripple">
//                                             <i className=""></i><span>Add Product</span>
//                                         </a>
//                                     </Link>
//                                     <Link to={"/admin/products"}>
//                                         <a className="list-group-item list-group-item-action py-2 ripple"
//                                         ><i className=""></i><span>All Products</span></a>
//                                     </Link>
                                   
//                                     <button onClick={handleLogout} className='btn btn-danger mb-3 mt-3'>LOGOUT</button>
//                                 </div>
//                             </div>
//                         </nav>
//                     </div>

//                     {/* Data */}
//                     <div className="col-lg-9">
//                         <Outlet />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Layout

import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Layout() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear("isLoggedIn");
        navigate("/adminlogin");
    };

    return (
        <>
            <div className="container-fluid min-vh-100 bg-secondary bg-opacity-10">
                <div className="row">

                    {/* Sidebar */}
                    <div
                        className="col-lg-2 p-0"
                        style={{
                            background: "linear-gradient(180deg, #111827, #1f2937)",
                            minHeight: "100vh",
                            color: "white"
                        }}
                    >
                        <div className="p-3 d-flex flex-column h-100">

                            <h4
                                className="text-center fw-bold mb-4"
                                style={{ letterSpacing: "1px" }}
                            >
                                🛠 ADMIN
                            </h4>

                            <Link to="/admin" className="text-decoration-none mb-2">
                                <div
                                    className="p-2 rounded"
                                    style={{
                                        backgroundColor: "#374151",
                                        cursor: "pointer"
                                    }}
                                >
                                    📊 Dashboard
                                </div>
                            </Link>

                            <Link to="/admin/addproduct" className="text-decoration-none mb-2">
                                <div
                                    className="p-2 rounded"
                                    style={{
                                        backgroundColor: "#374151",
                                        cursor: "pointer"
                                    }}
                                >
                                    ➕ Add Product
                                </div>
                            </Link>

                            <Link to="/admin/products" className="text-decoration-none mb-2">
                                <div
                                    className="p-2 rounded"
                                    style={{
                                        backgroundColor: "#374151",
                                        cursor: "pointer"
                                    }}
                                >
                                    🏍 All Products
                                </div>
                            </Link>

                            <div className="mt-auto">
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-danger w-100 fw-bold"
                                >
                                    Logout
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="col-lg-10 p-4">
                        <div
                            className="bg-white rounded shadow-sm p-4"
                            style={{ minHeight: "90vh" }}
                        >
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Layout;
