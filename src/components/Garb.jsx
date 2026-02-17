import React from 'react'

export default function Garb() {
  return (
    <>
      <div className="container-fluid bg-dark p-5">
        <h1 className="display-3 fw-bold text-white pb-5 ps-3">
          Browse Bikes By
        </h1>

        <div className="container">
          <div className="row g-4 justify-content-center">

            {[
              {
                name: "Royal Enfield",
                img: "https://imgd.aeplcdn.com/0X0/bw/makes/royal-enfield20200508193112.jpg?q=80"
              },
              {
                name: "Kawasaki",
                img: "https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/kawasaki1656405887432.jpg?v=1656405887528&q=80"
              },
              {
                name: "Yamaha",
                img: "https://imgd.aeplcdn.com/0X0/bw/makes/yamaha20200508193220.jpg?q=80"
              },
              {
                name: "KTM",
                img: "https://imgd.aeplcdn.com/0X0/bw/makes/ktm20200518163508.jpg?q=80"
              }
            ].map((brand, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="card h-100 shadow-sm text-center p-3">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="img-fluid border rounded"
                    style={{
                      height: "120px",
                      objectFit: "contain"
                    }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
                    <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
                    {brand.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
           
            

          </div>
        </div>
      </div>
    </>
  )
}

