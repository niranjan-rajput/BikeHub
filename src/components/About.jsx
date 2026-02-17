import React from "react";


export default function About() {
  return (
    <div className=" container-fluid bg-dark mt-2 py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="display-4 text-white fw-bold">About BikeHub</h1>
          <p className="text-white fs-5">
            A modern bike showroom 
          </p>
        </div>

        {/* Project Overview */}
        <div className="row mb-5">
          <div className="col-md-6">
            <h3 className="fw-bold text-white mb-3"> Overview</h3>
            <p className="text-white">
              BikeHub is a bike showroom web application inspired by platforms
              like BikeWale. It allows users to browse bikes by brand, explore
              bike details, and make informed decisions before purchasing.
            </p>
            <p className="text-white">
              The goal of this project is to simulate a real-world product-based
              website and practice modern frontend development using React.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
              alt="Bike showroom"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Features */}
        <div className="row mb-5">
          <h3 className="fw-bold mb-4 text-white text-center">Key Features</h3>

          <div className="col-md-4 mb-3">
            <div className="card bg-secondary h-100 shadow-sm p-3">
              <h5 className="fw-bold text-white">Browse by Brand</h5>
              <hr className="bg-white"/>
              <p className="text-white">
                Users can explore bikes from popular brands like Royal Enfield,
                Yamaha, KTM, and Kawasaki.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card bg-secondary h-100 shadow-sm p-3">
              <h5 className="fw-bold text-white">Bike Details</h5>
               <hr className="bg-white"/>
              <p className="text-white">
                View detailed information such as price, mileage, engine specs,
                and images.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card bg-secondary h-100 shadow-sm p-3">
              <h5 className="fw-bold text-white">Responsive Design</h5>
               <hr className="bg-white"/>
              <p className="text-white">
                Fully responsive layout optimized for mobile, tablet, and
                desktop devices.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="row mb-5">
          <h3 className="fw-bold mb-4 text-center">Used </h3>

          <div className="col-md-6  mx-auto">
            <ul className="list-group shadow-sm">
              <li className="list-group-item ">....</li>
              <li className="list-group-item">.....</li>
              <li className="list-group-item">....</li>
              <li className="list-group-item">...</li>
              <li className="list-group-item">...</li>
              <li className="list-group-item">...</li>
            </ul>
          </div>
        </div>

        {/* Developer Section */}
        <div className="row">
          <div className="col text-center">
            <h3 className="fw-bold mb-3">About the Owner</h3>
            <p className="text-muted fs-5">
              Hi, I’m <strong>Niranjan Rajput</strong>
              </p>
              
          </div>
        </div>

      </div>
    </div>
  );
}
