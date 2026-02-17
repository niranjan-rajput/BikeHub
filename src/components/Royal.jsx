import React from "react";

export default function Royal() {
  return (
    <>
    <div className="mt-2 bg-dark">
        <h1 className="text-white mb-5 display- text-center">Royal Enfields</h1>
    <div className="container my-4">
      <div className="card bg-dark border bike-card  p-4">
        <div className="row align-items-center">

          {/* Bike Image */}
          <div className="col-md-3  text-center">
            <img
              src="https://imgd.aeplcdn.com/227x128/n/cw/ec/201293/hunter-350-right-side-view-13.png?isig=0&q=80"
              alt="Royal Enfield Hunter 350"
              className="img-fluid rounded"
            />
          </div>

          {/* Bike Details */}
          <div className="col-md-6 text-white">
            <h5 className="fw-bold">
              Royal Enfield Hunter 350
              <span className="ms-2 text-muted">›</span>
            </h5>

            <p className="text-white mb-1">
              349.34 cc &nbsp;|&nbsp; 35 kmpl &nbsp;|&nbsp; 20.2 bhp &nbsp;|&nbsp; 181 kg
            </p>

            <h4 className="fw-bold mt-3">₹ 1,88,061</h4>
            <p className="text-white mb-0">On-Road Price, Kolhapur</p>
          </div>

          {/* Rating & Button */}
          <div className="col-md-3 text-md-end text-center">
            <div className="rating-box text-white mb-3">
              ⭐<strong>4.7</strong>
              <span className="text-white"> | 1129 Ratings</span>
            </div>

            <button className="btn btn-outline-info px-4 py-2">
              View Price Breakup
            </button>
          </div>

        </div>
      </div>
    </div>

    {/* second bike */}

    <div className="container  my-4">
      <div className="card bg-dark border bike-card p-4">
        <div className="row align-items-center">

          {/* Bike Image */}
          <div className="col-md-3  text-center">
            <img
              src="https://imgd.aeplcdn.com/227x128/n/cw/ec/49656/continental-gt-right-side-view-12.png?isig=0&q=80"
              alt="Royal Enfield gt 650"
              className="img-fluid rounded"
            />
          </div>

          {/* Bike Details */}
          <div className="col-md-6 text-white">
            <h5 className="fw-bold">
              Royal Enfield GT 650
              <span className="ms-2 text-muted">›</span>
            </h5>

            <p className="text-white mb-1">
              648 cc &nbsp;|&nbsp; 25 kmpl &nbsp;|&nbsp; 47 bhp &nbsp;|&nbsp; 211 kg
            </p>

            <h4 className="fw-bold mt-3">₹ 4,18,491</h4>
            <p className="text-white mb-0">On-Road Price, Kolhapur</p>
          </div>

          {/* Rating & Button */}
          <div className="col-md-3 text-md-end text-center">
            <div className="rating-box text-white mb-3">
              ⭐<strong>4.8</strong>
              <span className="text-white"> | 1395 Rating</span>
            </div>

            <button className="btn btn-outline-info px-4 py-2">
              View Price Breakup
            </button>
          </div>

        </div>
      </div>
    </div>
    </div>


    </>
  );
}


// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';


// function Royal() {

//     let dispatch = useDispatch();

//     // let apiurl = import.meta.env.VITE_BASE_URL;
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios.get("https://69463d19ed253f51719d70e6.mockapi.io/students")
//             .then((res) => {
//                 // console.log(res.data);
//                 setProducts(res.data);
//             });
//     }, []);

//     function addProductToCart(product) {
//         // console.log(product);

//         const objData = {
//             id: product.id,
//             title: product.title,
//             brand: product.brand,
//             price: product.price,
//             image: product.image,
//             quantity: 1
//         };

//         // console.log(objData);

//         dispatch(addToCart(objData))
//     };


//     return (
//         <>
//             <h1 className='text-center'>All Products</h1>
//             <div className="container mt-4">
//                 <div className="row">
//                     {products.map((item, i) => (
//                         <div className="col-lg-3" key={i}>
//                             <div class="card m-2" style={{ width: "18rem" }}>
//                                 <img src={item.image} class="card-img-top" alt="..." />
//                                 <div class="card-body">
//                                     <h5 class="card-title">{item.title}</h5>
//                                     <h5>{item.brand}</h5>
//                                     <h5>{item.cc}</h5>
//                                     <h3>
//                                         <i className="fa-solid fa-indian-rupee-sign"></i>
//                                         {item.price}</h3>
//                                     <h5><del>{item.weight}</del></h5>
//                                     <h5>{item.avarage}</h5>

//                                     <button onClick={() => addProductToCart(item)} class="btn btn-outline-primary">Add to Cart</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>


//         </>
//     )
// }


// export default Royal;