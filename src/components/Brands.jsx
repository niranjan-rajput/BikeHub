import React from "react";
import { Link } from "react-router-dom";

export default function Brands() {

  const brands = [
    {
    name: "Royal Enfield",
    sname: "royal-enfield",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/royal-enfield20200508193112.jpg?q=80"
  },
  {
    name: "Kawasaki",
    sname: "kawasaki",
    img: "https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/kawasaki1656405887432.jpg?v=1656405887528&q=80"
  },
  {
    name: "Yamaha",
    sname: "yamaha",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/yamaha20200508193220.jpg?q=80"
  },
  {
    name: "KTM",
    sname: "ktm",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/ktm20200518163508.jpg?q=80"
  },
  {
    name: "TVS",
    sname: "tvs",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/tvs20200508193203.jpg?q=80"
  },
  {
    name: "Triumph",
    sname: "triumph",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/triumph20200508193154.jpg?q=80"
  },
  {
    name: "Hero",
    sname: "hero",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/hero20200508192826.jpg?q=80"
  },
  {
    name: "Honda",
    sname: "honda",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/honda20200511152343.jpg?q=80"
  },
  {
    name: "Harley-Davidson",
    sname: "harley-davidson",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/harleydavidson20200508192816.jpg?q=80"
  },
  {
    name: "Benelli",
    sname: "benelli",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/benelli20200508192543.jpg?q=80"
  },
  {
    name: "Ducati",
    sname: "ducati",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/ducati20200511152332.jpg?q=80"
  },
  {
    name: "Benelli",
    sname: "benelli",
    img: "https://imgd.aeplcdn.com/0X0/bw/makes/benelli20200508192543.jpg?q=80"
  },
  {
    name: "Ather",
    sname: "ather",
    img: "https://imgd.aeplcdn.com/0X0/n/cw/ec/79/brands/logos/ather1704450986845.jpg?v=1704450986888&q=80"
  }

  ];

  return (
    <div className="container-fluid bg-dark p-5">
      <h1 className="text-white text-center bg-secondary p-3 mb-5">Browse Bikes</h1>

      <div className="row g-4 justify-content-center">

        {brands.map((brand) => (
          <div className="col-lg-2 col-md-3" key={brand.sname}>
            <Link
              to={`/brands/${brand.sname}`}
              className="text-decoration-none"
            >
              <div className="card text-center p-3 shadow-sm h-100">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="img-fluid"
                  style={{ height: "120px", objectFit: "contain" }}
                />
                <h6 className="mt-3 text-dark fw-bold">
                  {brand.name}
                </h6>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}

