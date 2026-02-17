import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Allproducts() {

  
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://69463d19ed253f51719d70e6.mockapi.io/students")
            .then((res) => {
                // console.log(res.data);
                setProducts(res.data);
            });
    }, []);

    


    return (
        <>
        <div className="bg-dark mt-2">
            <h1 className='text-center text-light'>All Products</h1>
            <div className="container mt-4 ">
                <div className="row">
                    {products.map((item, i) => (
                        <div className="col-lg-3 border" key={i}>
                            <div class="card m-2 " style={{ width: "18rem" }}>
                                <img src={item.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title bg-">{item.title}</h5>
                                    <h5>{item.brand}</h5>
                                    <h5>{item.avarage} Kmpl</h5>
                                    <h3>
                                        <i className="fa-solid fa-indian-rupee-sign"></i>
                                        {item.price}</h3>
                                    <h5>{item.cc} CC</h5>
                                    <h5>{item.weight} Kg</h5>

                                    {/* <button onClick={() => addProductToCart(item)} class="btn btn-outline-primary">Add to Cart</button> */}
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


export default Allproducts;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Brands from './Brands';

// function Allproducts() {

//   const [products, setProducts] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState("All");

//   useEffect(() => {
//     axios.get("https://69463d19ed253f51719d70e6.mockapi.io/students")
//       .then((res) => {
//         setProducts(res.data);
//       });
//   }, []);

//   const filteredProducts =
//     selectedBrand === "All"
//       ? products
//       : products.filter(p => p.brand === selectedBrand);

//   return (
//     <>
//       <Brands onBrandSelect={setSelectedBrand} />

//       <div className="bg-dark mt-2">
//         <h1 className="text-center text-light">
//           {selectedBrand === "All" ? "All Bikes" : selectedBrand + " Bikes"}
//         </h1>

//         <div className="container mt-4">
//           <div className="row">
//             {filteredProducts.map((item) => (
//               <div className="col-lg-3 border" key={item.id}>
//                 <div className="card m-2" style={{ width: "18rem" }}>
//                   <img src={item.image} className="card-img-top" alt="" />
//                   <div className="card-body">
//                     <h5>{item.title}</h5>
//                     <h6>{item.brand}</h6>
//                     <h5>{item.avarage} Kmpl</h5>
//                     <h3>
//                       <i className="fa-solid fa-indian-rupee-sign"></i>
//                       {item.price}
//                     </h3>
//                     <h5>{item.cc} CC</h5>
//                     <h5>{item.weight} Kg</h5>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Allproducts;
