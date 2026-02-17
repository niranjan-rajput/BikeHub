// import React from 'react'
// import Home from './Home'
// import { Link } from "react-router-dom";

// export default function Brands() {
//   return (
//     <>
//       <div className="container-fluid mt-2 bg-dark p-5">
//         <h1 className="display-3 fw-bold text-white text-center bg-secondary p-3 mb-5">
//           Browse Bikes
//         </h1>

//         <div className="container">
//           <div className="row g-4 justify-content-center">



//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/royal-enfield20200508193112.jpg?q=80"
//                   alt="Royal Enfield" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-white bg-dark text-white btn-sm mt-2">
//                     <Link to="/royal" class="nav-item text-decoration-none">
//                     <a className="text-white" href="/royal">
//                       Royal Enfield
//                     </a>
//                     </Link>
//                   </button>
//                 </div>
//               </div>
//             </div>


//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/kawasaki1656405887432.jpg?v=1656405887528&q=80"
//                   alt="Kawasaki" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     Kawasaki
//                   </button>
//                 </div>
//               </div>
//             </div>


//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/yamaha20200508193220.jpg?q=80"
//                   alt="Yamaha" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     Yamaha
//                   </button>
//                 </div>
//               </div>
//             </div>


//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/ktm20200518163508.jpg?q=80"
//                   alt="KTM" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     KTM
//                   </button>
//                 </div>
//               </div>
//             </div>


//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/tvs20200508193203.jpg?q=80"
//                   alt="KTM" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     TVS
//                   </button>
//                 </div>
//               </div>
//             </div>


//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/triumph20200508193154.jpg?q=80"
//                   alt="KTM" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     Triumph
//                   </button>
//                 </div>
//               </div>
//             </div>


//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/hero20200508192826.jpg?q=80"
//                   alt="KTM" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     Hero
//                   </button>
//                 </div>
//               </div>
//             </div>


//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/honda20200511152343.jpg?q=80"
//                   alt="KTM" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     Honda
//                   </button>
//                 </div>
//               </div>
//             </div>


//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/harleydavidson20200508192816.jpg?q=80"
//                   alt="KTM" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     Harley-Davidson 
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/benelli20200508192543.jpg?q=80"
//                   alt="KTM" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     Benelli
//                   </button>
//                 </div>
//               </div>
//             </div>



//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/bw/makes/ducati20200511152332.jpg?q=80"
//                   alt="KTM" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     Ducati
//                   </button>
//                 </div>
//               </div>
//             </div>


//             <div className=" col-lg-2 col-md-2">
//               <div className="card h-100 shadow-sm text-center p-3">
//                 <img src="https://imgd.aeplcdn.com/0X0/n/cw/ec/79/brands/logos/ather1704450986845.jpg?v=1704450986888&q=80"
//                   alt="KTM" className="img-fluid border rounded"
//                   style={{ height: "120px", objectFit: "contain" }} />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   {/* <h6 className="fw-bold mt-3">{brand.name}</h6> */}
//                   <button className="btn btn-outline-dark bg-dark text-white btn-sm mt-2">
//                     Ather
//                   </button>
//                 </div>
//               </div>
//             </div>




//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

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

