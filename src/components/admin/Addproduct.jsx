import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BRANDS = [
  "Royal Enfield",
  "Kawasaki",
  "Yamaha",
  "KTM",
  "TVS",
  "Triumph",
  "Hero",
  "Honda",
  "Benelli",
  "E-Bike",
];

const EMPTY_FORM = {
  title: "",
  brand: "",
  price: "",
  cc: "",
  image: "",
  avarage: "",
  weight: "",
  description: "",
};

const AddProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = id !== undefined;

  const [data, setData] = useState(EMPTY_FORM);
  const [error, setError] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loadError, setLoadError] = useState("");

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
    if (error[e.target.id + "Error"]) {
      setError({ ...error, [e.target.id + "Error"]: "" });
    }
  }

  function validate() {
    const fields = [
      { key: "title", label: "Title" },
      { key: "brand", label: "Brand" },
      { key: "price", label: "Price" },
      { key: "cc", label: "CC" },
      { key: "image", label: "Image URL" },
      { key: "avarage", label: "Mileage" },
      { key: "weight", label: "Weight" },
      { key: "description", label: "Description" },
    ];

    const objError = {};
    let isValid = true;

    fields.forEach(({ key, label }) => {
      if (!String(data[key]).trim()) {
        objError[key + "Error"] = `${label} is required.`;
        isValid = false;
      }
    });

    setError(objError);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitted(false);

    if (!isEditMode) {
      axios
        .post("https://69463d19ed253f51719d70e6.mockapi.io/products", data)
        .then(() => {
          setData(EMPTY_FORM);
          setSubmitted(true);
        })
        .catch(() => {
          setLoadError("Couldn't save the product. Try again.");
        })
        .finally(() => setSubmitting(false));
    } else {
      axios
        .put("https://69463d19ed253f51719d70e6.mockapi.io/products/" + id, data)
        .then(() => {
          navigate("/admin/products/");
        })
        .catch(() => {
          setLoadError("Couldn't save the changes. Try again.");
          setSubmitting(false);
        });
    }
  }

  useEffect(() => {
    if (id) {
      axios
        .get("https://69463d19ed253f51719d70e6.mockapi.io/products/" + id)
        .then((res) => {
          setData({
            title: res.data.title || "",
            brand: res.data.brand || "",
            price: res.data.price || "",
            image: res.data.image || "",
            cc: res.data.cc || "",
            weight: res.data.weight || "",
            avarage: res.data.avarage || "",
            description: res.data.description || "",
          });
        })
        .catch(() => setLoadError("Couldn't load this product."));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <style>{`
        .ap-root{
          --accent:#2F6FED;
          --accent-dark:#1f52b8;
          --ink:#16181d;
          --muted:#6b7280;
          --line:#e5e7eb;
          --bg:#f5f6f8;
          --danger:#d92d20;
          --success:#0f9d58;
          font-family:'Segoe UI',system-ui,-apple-system,sans-serif;
          background:var(--bg);
          min-height:100vh;
          padding:32px 20px 60px;
          color:var(--ink);
        }
        .ap-root *{box-sizing:border-box;}
        .ap-wrap{max-width:920px; margin:0 auto;}

        .ap-crumb{font-size:12.5px; font-weight:600; letter-spacing:0.06em; color:var(--muted); text-transform:uppercase; margin-bottom:8px;}
        .ap-crumb span{color:var(--accent);}
        .ap-header{display:flex; align-items:center; justify-content:space-between; margin-bottom:28px; flex-wrap:wrap; gap:12px;}
        .ap-title{font-size:26px; font-weight:700; margin:0;}
        .ap-subtitle{font-size:14px; color:var(--muted); margin:4px 0 0;}

        .ap-alert{
          display:flex; align-items:center; gap:10px;
          padding:12px 16px; border-radius:8px; font-size:14px; margin-bottom:20px;
        }
        .ap-alert-success{background:#e9f9f0; color:var(--success); border:1px solid #bfead2;}
        .ap-alert-error{background:#fdecea; color:var(--danger); border:1px solid #f6c6c1;}

        .ap-card{
          background:#fff; border:1px solid var(--line); border-radius:14px;
          box-shadow:0 1px 2px rgba(16,24,40,0.04);
          overflow:hidden;
        }
        .ap-card-header{
          padding:20px 28px; border-bottom:1px solid var(--line);
          font-weight:600; font-size:15px; display:flex; align-items:center; gap:8px;
        }
        .ap-card-body{padding:28px;}

        .ap-grid{display:grid; grid-template-columns:repeat(12,1fr); gap:20px;}
        .ap-col-6{grid-column:span 6;}
        .ap-col-4{grid-column:span 4;}
        .ap-col-12{grid-column:span 12;}
        @media(max-width:640px){
          .ap-col-6, .ap-col-4{grid-column:span 12;}
        }

        .ap-field{display:flex; flex-direction:column; gap:6px; margin-bottom:20px;}
        .ap-label{font-size:13.5px; font-weight:600; color:var(--ink);}
        .ap-required{color:var(--danger); margin-left:2px;}
        .ap-input, .ap-select, .ap-textarea{
          border:1px solid var(--line); border-radius:8px; padding:10px 12px;
          font-size:14px; color:var(--ink); background:#fff; outline:none;
          transition:border-color .15s, box-shadow .15s; width:100%; font-family:inherit;
        }
        .ap-input:focus, .ap-select:focus, .ap-textarea:focus{
          border-color:var(--accent); box-shadow:0 0 0 3px rgba(47,111,237,0.15);
        }
        .ap-input.ap-invalid, .ap-select.ap-invalid, .ap-textarea.ap-invalid{
          border-color:var(--danger);
        }
        .ap-error-text{font-size:12.5px; color:var(--danger);}
        .ap-textarea{resize:vertical; min-height:96px;}
        .ap-hint{font-size:12px; color:var(--muted);}

        .ap-preview{
          margin-top:10px; width:100%; height:140px; border-radius:8px; border:1px dashed var(--line);
          background:#fafafa; display:flex; align-items:center; justify-content:center; overflow:hidden;
        }
        .ap-preview img{width:100%; height:100%; object-fit:contain;}
        .ap-preview span{font-size:12.5px; color:var(--muted);}

        .ap-actions{
          display:flex; justify-content:flex-end; gap:12px;
          padding:20px 28px; border-top:1px solid var(--line); background:#fbfbfc;
        }
        .ap-btn{
          font-size:14px; font-weight:600; padding:10px 22px; border-radius:8px; cursor:pointer;
          border:1px solid transparent; transition:.15s; display:inline-flex; align-items:center; gap:8px;
        }
        .ap-btn-secondary{background:#fff; border-color:var(--line); color:var(--ink);}
        .ap-btn-secondary:hover{background:#f3f4f6;}
        .ap-btn-primary{background:var(--accent); color:#fff;}
        .ap-btn-primary:hover{background:var(--accent-dark);}
        .ap-btn-primary:disabled{opacity:0.65; cursor:not-allowed;}
        .ap-spinner{
          width:14px; height:14px; border:2px solid rgba(255,255,255,0.5); border-top-color:#fff;
          border-radius:50%; animation:ap-spin .7s linear infinite;
        }
        @keyframes ap-spin{to{transform:rotate(360deg);}}
      `}</style>

      <div className="ap-root">
        <div className="ap-wrap">
          <div className="ap-crumb">
            Admin / Products / <span>{isEditMode ? "Edit Product" : "Add Product"}</span>
          </div>

          <div className="ap-header">
            <div>
              <h1 className="ap-title">{isEditMode ? "Edit product" : "Add a new product"}</h1>
              <p className="ap-subtitle">
                {isEditMode
                  ? "Update the details below and save your changes."
                  : "Fill in the details below to list a new motorcycle."}
              </p>
            </div>
          </div>

          {submitted && (
            <div className="ap-alert ap-alert-success">Product added. The form has been cleared.</div>
          )}
          {loadError && <div className="ap-alert ap-alert-error">{loadError}</div>}

          <form onSubmit={handleSubmit}>
            <div className="ap-card">
              <div className="ap-card-header">Product details</div>

              <div className="ap-card-body">
                <div className="ap-grid">
                  <div className="ap-col-6 ap-field">
                    <label htmlFor="title" className="ap-label">
                      Title<span className="ap-required">*</span>
                    </label>
                    <input
                      id="title"
                      type="text"
                      value={data.title}
                      onChange={handleChange}
                      className={`ap-input ${error.titleError ? "ap-invalid" : ""}`}
                    />
                    {error.titleError && <span className="ap-error-text">{error.titleError}</span>}
                  </div>

                  <div className="ap-col-6 ap-field">
                    <label htmlFor="brand" className="ap-label">
                      Brand<span className="ap-required">*</span>
                    </label>
                    <select
                      id="brand"
                      value={data.brand}
                      onChange={handleChange}
                      className={`ap-select ${error.brandError ? "ap-invalid" : ""}`}
                    >
                      <option value="">Choose brand...</option>
                      {BRANDS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    {error.brandError && <span className="ap-error-text">{error.brandError}</span>}
                  </div>

                  <div className="ap-col-4 ap-field">
                    <label htmlFor="price" className="ap-label">
                      Price<span className="ap-required">*</span>
                    </label>
                    <input
                      id="price"
                      type="text"
                      value={data.price}
                      onChange={handleChange}
                      className={`ap-input ${error.priceError ? "ap-invalid" : ""}`}
                    />
                    {error.priceError && <span className="ap-error-text">{error.priceError}</span>}
                  </div>

                  <div className="ap-col-4 ap-field">
                    <label htmlFor="cc" className="ap-label">
                      Engine (CC)<span className="ap-required">*</span>
                    </label>
                    <input
                      id="cc"
                      type="number"
                      value={data.cc}
                      onChange={handleChange}
                      className={`ap-input ${error.ccError ? "ap-invalid" : ""}`}
                    />
                    {error.ccError && <span className="ap-error-text">{error.ccError}</span>}
                  </div>

                  <div className="ap-col-4 ap-field">
                    <label htmlFor="weight" className="ap-label">
                      Weight (kg)<span className="ap-required">*</span>
                    </label>
                    <input
                      id="weight"
                      type="text"
                      value={data.weight}
                      onChange={handleChange}
                      className={`ap-input ${error.weightError ? "ap-invalid" : ""}`}
                    />
                    {error.weightError && <span className="ap-error-text">{error.weightError}</span>}
                  </div>

                  <div className="ap-col-6 ap-field">
                    <label htmlFor="avarage" className="ap-label">
                      Mileage (kmpl)<span className="ap-required">*</span>
                    </label>
                    <input
                      id="avarage"
                      type="text"
                      value={data.avarage}
                      onChange={handleChange}
                      className={`ap-input ${error.avarageError ? "ap-invalid" : ""}`}
                    />
                    {error.avarageError && <span className="ap-error-text">{error.avarageError}</span>}
                  </div>

                  <div className="ap-col-6 ap-field">
                    <label htmlFor="image" className="ap-label">
                      Image URL<span className="ap-required">*</span>
                    </label>
                    <input
                      id="image"
                      type="text"
                      value={data.image}
                      onChange={handleChange}
                      placeholder="https://..."
                      className={`ap-input ${error.imageError ? "ap-invalid" : ""}`}
                    />
                    {error.imageError && <span className="ap-error-text">{error.imageError}</span>}
                    <div className="ap-preview">
                      {data.image ? (
                        <img src={data.image} alt="Preview" onError={(e) => (e.target.style.display = "none")} />
                      ) : (
                        <span>Image preview appears here</span>
                      )}
                    </div>
                  </div>

                  <div className="ap-col-12 ap-field">
                    <label htmlFor="description" className="ap-label">
                      Description<span className="ap-required">*</span>
                    </label>
                    <textarea
                      id="description"
                      value={data.description}
                      onChange={handleChange}
                      placeholder="A short summary of the bike's highlights..."
                      className={`ap-textarea ${error.descriptionError ? "ap-invalid" : ""}`}
                    />
                    {error.descriptionError && <span className="ap-error-text">{error.descriptionError}</span>}
                  </div>
                </div>
              </div>

              <div className="ap-actions">
                <button
                  type="button"
                  className="ap-btn ap-btn-secondary"
                  onClick={() => navigate("/admin/products/")}
                >
                  Cancel
                </button>
                <button type="submit" className="ap-btn ap-btn-primary" disabled={submitting}>
                  {submitting && <span className="ap-spinner" />}
                  {isEditMode ? "Save changes" : "Add product"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
