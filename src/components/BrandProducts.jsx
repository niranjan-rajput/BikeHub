import React, { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import axios from "axios";

export default function BrandProducts() {

  const { brand } = useParams();
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios
      .get("https://69463d19ed253f51719d70e6.mockapi.io/students")
      .then((res) => {
        // console.log(res.data)
        const filtered = res.data.filter((bike) =>
          bike.brand.toLowerCase().replace(" ", "-") === brand
        );
        setBikes(filtered);
      });
  }, [brand]);





  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-capitalize">
        {brand.replace("-", " ")} Bikes
      </h2>

      <div className="row g-4">

        {
          bikes.length >= 1
            ?
            bikes.map((bike) => (
              // <div className="col-md-4" key={bike.id}>
              //   <div className="card h-100 shadow-sm">
              //     <img
              //       src={bike.image}
              //       className="card-img-top"
              //       style={{ height: "200px", objectFit: "cover" }}
              //     />
              //     <div className="card-body">
              //       <h5 className="">{bike.title}</h5>
              //       <p className="text-muted">₹ {bike.price}</p>
              //     </div>
              //   </div>
              // </div>

              <div className="col-md-4" key={bike.id}>
                <div className="card h-100 shadow border-3 rounded-4 overflow-hidden">

                  <img
                    src={bike.image}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={bike.title}
                  />

                  <div className="card-body d-flex flex-column">

                    <h5 className="fw-bold mb-2">{bike.title}</h5>

                    <p className="text-muted mb-3">₹ {bike.price}</p>

                    <div className="mb-3">
                      <span className="badge bg-success me-2 p-2">
                        🚴 {bike.avarage} km/l
                      </span>

                      <span className="badge bg-info p-2">
                        🔥 {bike.cc} CC
                      </span>
                    </div>

                    <button className="btn btn-dark mt-auto rounded-pill">
                      View Details
                    </button>

                  </div>
                </div>
              </div>

            ))
            :
            <h1 style={{ textAlign: "center" }}>No Data Found</h1>
        }



      </div>
    </div>
  );
}
