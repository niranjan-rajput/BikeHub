import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddProduct = () => {

  let navigate = useNavigate();

  let { id } = useParams();
  // alert(id);

  const [data, setData] = useState({
    title: "",
    brand: "",
    price: "",
    cc: "",
    image: "",
    avarage: "",
    weight: "",
    description: ""
  })


  const [error, setError] = useState({});

  function handlechange(edata) {
    setData({ ...data, [edata.target.id]: edata.target.value });



  };

  function handleSubmit(e) { 

    e.preventDefault();
    let objError = {};
    let isValid = true;

    // Title Validation
    if (data.title.trim() === "") {
      objError.titleError = "title is required!";
      isValid = false;

    }
    // Brand Validation
    if (data.brand.trim() === "") {
      objError.brandError = "brand is required!";
      isValid = false;
    }
    // price Validation
    if (data.price.trim() === "") {
      objError.priceError = "price is required!";
      isValid = false;
    }
    // cc Validation
    if (data.cc.trim() === "") {
      objError.ccError = "cc is required!";
      isValid = false;
    }
    // Image Validation
    if (data.image.trim() === "") {
      objError.imageError = "Image is required!";
      isValid = false;
    }
    // Avarage Validation
    if (data.avarage.trim() === "") {
      objError.avarageError = "Brand is required!";
      isValid = false;
    }
    // Weight Validation
    if (data.weight.trim() === "") {
      objError.weightError = "brand is required!";
      isValid = false;
    }
    // Description Validation
    if (data.description.trim() === "") {
      objError.descriptionError = "Description is required!";
      isValid = false;
    }

    setError(objError);



    if (id === undefined) {

      if (isValid) {

        axios.post("https://69463d19ed253f51719d70e6.mockapi.io/products", data)
          .then((res) => {
            console.log(res.data);
            setData({
              title: "",
              brand: "",
              price: "",
              cc: "",
              image: "",
              avarage: "",
              weight: "",
              description: ""
            })
          })
      }


    }

    else {

      if (isValid) {

        axios.put("https://69463d19ed253f51719d70e6.mockapi.io/products/" + id, data)
          .then((res) => {
            console.log(res.data);
            // setData(res.data)
            navigate("/admin/products/");
          });
      }
    }
  }


  useEffect(() => {
    if (id) {
      axios.get("https://69463d19ed253f51719d70e6.mockapi.io/products/" + id)
        .then((res) => {
          console.log(res.data)
          setData({
            title: res.data.title,
            brand: res.data.brand,
            price: res.data.price,
            image: res.data.image,
            cc: res.data.cc,
            weight: res.data.weight,
            avarage: res.data.avarage,
            description: res.data.description
          });
        })
      // alert(id)
    }
  }, [])



  return (
    <>
      <h1 className="text-center text-light bg-dark">Add Product</h1>
    <div className="container bg-dark mb-4 border">

      {/* Breadcrumb */}
      <div className="mb-4 mt-2 text-light fw-semibold">
        ADMIN / ADD PRODUCT
      </div>

      <form>

        {/* Title & brand */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="title" className="form-label text-light">Title</label>
            {error.titleError && (
              <span className="text-danger d-block">{error.titleError}</span>
            )}
            <input value={data.title} onChange={handlechange} type="text" className="form-control" id="title" />
          </div>

          <div className="col-md-6">
            <label htmlFor="brand" className="form-label text-light">Brand</label>
            {error.brandError && (
              <span className="text-danger d-block">{error.brandError}</span>
            )}
            <select value={data.brand} onChange={handlechange} className="form-select" id="brand">
              <option>Choose brand...</option>
              <option value={"royal-enfield"}>Royal Enfield</option>
              <option> Kawasaki</option>
              <option>Yamaha</option>
              <option>KTM</option>
              <option>TVS</option>
              <option>Triumph</option>
              <option>Hero</option>
              <option>Honda</option>
              <option>Benelli</option>
              <option>E-Bike</option>
            </select>
          </div>
        </div>

        {/* Price, cc, Image */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="price" className="form-label text-light">Price</label>
            {error.priceError && (
              <span className="text-danger d-block">{error.priceError}</span>
            )}
            <input value={data.price} onChange={handlechange} type="text" className="form-control" id="price" />
          </div>

          <div className="col-md-3">
            <label htmlFor="cc" className="form-label text-light">CC</label>
            {error.ccError && (
              <span className="text-danger d-block">{error.ccError}</span>
            )}
            <input value={data.cc} onChange={handlechange} type="number" className="form-control" id="cc" />
          </div>

          <div className="col-md-3">
            <label htmlFor="image" className="form-label text-light">Image</label>
            {error.imageError && (
              <span className="text-danger d-block">{error.imageError}</span>
            )}
            <input value={data.image} onChange={handlechange} type="text" className="form-control" id="image" />
          </div>
        </div>

        {/* avarage, weight */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="avarage" className="form-label text-light">Avareage</label>
            {error.avarageError && (
              <span className="text-danger d-block">{error.avarageError}</span>
            )}
            <input value={data.avarage} className="form-control" onChange={handlechange} id="avarage" />
          </div>

          <div className="col-md-4">
            <label htmlFor="weight" className="form-label text-light">Weight</label>
            {error.weightError && (
              <span className="text-danger d-block">{error.weightError}</span>
            )}
            <input value={data.weight} onChange={handlechange} className="form-control" id="weight" />
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="form-label text-light">Description</label>
          {error.descriptionError && (
            <span className="text-danger d-block">{error.descriptionError}</span>
          )}
          <textarea
            value={data.description}
            onChange={handlechange}
            className="form-control"
            rows="4"
            id="description"
          ></textarea>
        </div>

        {/* Submit */}
        <button onClick={handleSubmit} className="btn btn-outline-light btn-dark mb-4 px-4">
          Submit
       </button>

      </form>
    </div>
    </>
  );
}

export default AddProduct;
