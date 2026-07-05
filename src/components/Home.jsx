// import React from 'react';

// import imga2 from '../../public/gt.jpg';

// export default function Home() {

//     return (
//         <>
//             <div className="bg-dark">

//                 <h1 className=" me-5 ms-5 mt-3 p-3 text-white display-3 fw-bold gradient-text hover-grow">
//                     BikeHub
//                 </h1>
//                 <hr className="bg-white"/>
//                 <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//                     <div className="carousel-indicators">
//                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true"></button>
//                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
//                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
//                     </div>
//                     <div className="carousel-inner">
//                         <div className="carousel-item active">
//                             <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/49656/continental-gt-right-side-view-12.png?isig=0" className="d-block w-100" alt="..." />
//                         </div>
//                         {/* <div className="carousel-item">
//                         <img src="" className="d-block w-100" alt="..." />
//                     </div> */}
//                     </div>
//                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                         <span className="carousel-control-prev-icon"></span>
//                     </button>
//                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                         <span className="carousel-control-next-icon"></span>
//                     </button>
//                 </div>


//             </div>
//         </>
//     );
// }



import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            {/* CSS */}
            <style>{`
        body{
          overflow-x:hidden;
          background:#111;
        }

        .hero{
          min-height:100vh;
          background:
          linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),
          url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600');
          background-size:cover;
          background-position:center;
          display:flex;
          align-items:center;
        }

        .hero h1{
          font-size:4rem;
          font-weight:bold;
        }

        .highlight{
          color:#ffc107;
        }

        .hero img{
         width:100%;
         max-width:650px;
          border-radius:20px;
         box-shadow:0 20px 50px rgba(0,0,0,.5);
         transition:.5s;
        }

        .hero img:hover{
         transform:scale(1.03);
        }

        .hero img:hover{
          transform:scale(1.05);
        }

        @keyframes float{
          0%{transform:translateY(0);}
          50%{transform:translateY(-12px);}
          100%{transform:translateY(0);}
        }

        .feature-card{
          background:#222;
          color:white;
          border:none;
          transition:.4s;
          border-radius:15px;
        }

        .feature-card:hover{
          transform:translateY(-10px);
          box-shadow:0 15px 35px rgba(255,193,7,.35);
        }

        .feature-card img{
          height:220px;
          object-fit:cover;
          border-radius:15px 15px 0 0;
        }

        .feature-title{
          font-weight:bold;
          text-align:center;
          margin-bottom:40px;
        }

        .why-box{
          padding:30px;
          border-radius:15px;
          transition:.4s;
        }

        .why-box:hover{
          background:#f8f9fa;
          transform:translateY(-8px);
        }

        footer{
          background:#000;
          color:white;
          padding:30px 0;
          text-align:center;
        }

        .btn-warning{
          transition:.3s;
        }

        .btn-warning:hover{
          transform:scale(1.05);
        }

        @media(max-width:768px){
          .hero{
            text-align:center;
          }

          .hero h1{
            font-size:2.5rem;
          }

          .hero img{
            margin-top:40px;
          }
        }
      `}</style>

            {/* Hero Section */}
            <section className="hero text-white">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <h1>
                                Ride Your <span className="highlight">Dream Bike</span>
                            </h1>

                            <p className="lead my-4">
                                Explore premium motorcycles from the world's leading brands.
                                Find the perfect ride for every journey.
                            </p>

                            <Link to="/brand" className="btn btn-warning btn-lg me-3">
                                Explore Bike
                            </Link>

                            <Link to="/contact" className="btn btn-outline-light btn-lg">
                                Contact Us
                            </Link>
                        </div>

                        <div className="col-lg-6 text-center">
                           <Link to="/brand"> <img
                                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
                                className="img-fluid rounded shadow-lg"
                                alt="Sports Bike"
                            />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Featured Bikes */}
            <section className="py-5 bg-dark">
                <div className="container">

                    <h2 className="text-white feature-title display-5">
                        Featured Bikes
                    </h2>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card feature-card h-100">
                                <img
                                    src="https://imgd.aeplcdn.com/664x374/n/cw/ec/49656/continental-gt-right-side-view-12.png"
                                    alt=""
                                />
                                <div className="card-body">
                                    <h4>Royal Enfield GT 650</h4>
                                    <p>Classic café racer with a powerful 648cc engine.</p>
                                    <button className="btn btn-warning">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card feature-card h-100">
                                <img
                                    src="https://imgd.aeplcdn.com/664x374/n/cw/ec/124013/mt-15-v2-right-front-three-quarter.jpeg"
                                    alt=""
                                />
                                <div className="card-body">
                                    <h4>Yamaha MT-15</h4>
                                    <p>Sharp design with thrilling street performance.</p>
                                    <button className="btn btn-warning">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card feature-card h-100">
                                <img
                                    src="https://imgd.aeplcdn.com/664x374/n/cw/ec/51438/390-duke-right-front-three-quarter.jpeg"
                                    alt=""
                                />
                                <div className="card-body">
                                    <h4>KTM Duke 390</h4>
                                    <p>Lightweight naked street bike built for excitement.</p>
                                    <button className="btn btn-warning">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-5 bg-light">
                <div className="container">

                    <h2 className="text-center fw-bold mb-5">
                        Why Choose BikeHub?
                    </h2>

                    <div className="row text-center">

                        <div className="col-md-4">
                            <div className="why-box">
                                <h1>🏍️</h1>
                                <h4>Premium Collection</h4>
                                <p>Latest bikes from trusted brands.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="why-box">
                                <h1>💰</h1>
                                <h4>Affordable Price</h4>
                                <p>Best deals with finance options.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="why-box">
                                <h1>⭐</h1>
                                <h4>Customer Support</h4>
                                <p>Dedicated support before and after purchase.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Footer */}
            {/* <footer>
                <h3 className="text-warning">BikeHub</h3>
                <p>Your Dream Bike Awaits.</p>
                <small>© 2026 BikeHub. All Rights Reserved.</small>
            </footer> */}
        </>
    );
}