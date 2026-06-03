import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Products() {

    const [data, setData] = useState([]);

    function loadData() {
        axios.get("https://69463d19ed253f51719d70e6.mockapi.io/products/")

            .then((res) => {
                // console.log(res.data);  // [{},{}]
                setData(res.data);
            });
    };
    useEffect(() => {
        loadData();
    }, []);


    function handleDelete(id) {
        // console.log(id)
        axios.delete("https://69463d19ed253f51719d70e6.mockapi.io/products/"+ id)
            .then((res) => {
                // console.log(res.data);
                loadData();
            });

    };

   
    return (
        <>
            <h1 className='text-center text- bg-'>All Products</h1>
            {
                data.length >= 1
                    ?
                    <div className="container bg- ">
                        <div className="col-lg-12">
                            <table className="table table-striped text- table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">title</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">CC</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Avarage</th>
                                        {/* <th scope="col">description</th> */}
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((edata, i) => {
                                            // console.log(eachData);
                                            return (
                                                <tr key={i}>
                                                    <th className='text- pt-5' scope="row">{i + 1}.</th>
                                                    <td className='text- pt-5'>{edata.title}</td>
                                                    <td className='text- pt-5'>{edata.brand}</td>
                                                    <td className='text- pt-5'>{edata.price} ₹</td>
                                                    <td>
                                                        <img style={{ width: "120px", height:"100px", background:""}} src={edata.image} alt="" />
                                                    </td>
                                                    <td className='text- pt-5'>{edata.cc} cc</td>
                                                    <td className='text- pt-5'>{edata.weight} kg</td>
                                                    <td className='text- pt-5'>{edata.avarage} khp</td>
                                                    {/* <td className='text- pt-5'>{edata.description}</td> */}

                                                    <td>
                                                        <Link to={"/admin/addproduct/" + edata.id} >
                                                            <button className='btn btn-outline-primary m-1 btn-sm mt-4'><i className="fa-solid fa-pencil"></i></button>
                                                        </Link>
                                                        <button onClick={() => handleDelete(edata.id)} className='btn btn-outline-danger btn-sm mt-4'><i className="fa-solid fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
            }
        </>
    )
}

export default Products


