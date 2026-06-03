// // import React from 'react'

// // export default function Contact() {
// //   return (
// //     <>
// //       <div className="bg-dark">
// //       <h1 className=" display-3 fw-bold text-center text-white bg- p-2 mt-3 mb-5">Contact Us</h1>

// //       <div className="contanier-fluid"></div>
// //       <div className="row">
// //       <div className="col-lg-3">

// //       <div className="ms-5 p-3 border">
// //         {/* <!-- Links --> */}
// //         <h6 className="text-uppercase text-white fw-bold mb-4">Contact</h6>
// //         <p className="text-white"><i className="fas fa-home me-3"></i> Kolhapur</p>
// //         <p className="text-white">
// //           <i className="fas fa-envelope me-3"></i>
// //           niranjanrajput14@gmail.com
// //         </p>
// //         <p className="text-white"><i className="fas fa-phone me-3"></i> +91 9022851403</p>
// //         {/* <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p> */}
// //       </div>
// //       </div>

// //       <div className="col-lg-4">
// //       <h1> </h1>
// //       </div>


// //       <div className="col-lg-4">
// //       <h1> </h1>
// //       </div>


// //     </div>

// //     <br /><br /><br /><br /><br /><br /><br /><br /><br />
// //     <br /><br />

// //     </div>
// //     </>
// //   )
// // }


// import React from "react";

// export default function Contact() {
//   return (
//     <>
//       <div className="bg-dark text-white py-5">

//         <h1 className="display-4 fw-bold text-center mb-5">
//           Contact Us
//         </h1>

//         <div className="container">
//           <div className="row g-5">

//             {/* Contact Info */}
//             <div className="col-lg-4">
//               <div className="p-4 border rounded shadow h-100">

//                 <h4 className="fw-bold mb-4">Contact Details</h4>

//                 <p>
//                   <i className="fas fa-home me-3"></i>
//                   Kolhapur, Maharashtra
//                 </p>

//                 <p>
//                   <i className="fas fa-envelope me-3"></i>
//                   niranjanrajput14@gmail.com
//                 </p>

//                 <p>
//                   <i className="fas fa-phone me-3"></i>
//                   +91 9022851403
//                 </p>

//                 <hr />

//                 <h5 className="mt-4">Follow Me</h5>

//                 <div className="d-flex gap-3 mt-3">
//                   <i className="fab fa-facebook fa-lg"></i>
//                   <i className="fab fa-instagram fa-lg"></i>
//                   <i className="fab fa-linkedin fa-lg"></i>
//                   <i className="fab fa-github fa-lg"></i>
//                 </div>

//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="col-lg-8">
//               <div className="p-4 border rounded shadow">

//                 <h4 className="fw-bold mb-4">Send Message</h4>

//                 <form>

//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <label className="form-label">Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter your name"
//                       />
//                     </div>

//                     <div className="col-md-6">
//                       <label className="form-label">Email</label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Enter your email"
//                       />
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Subject</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter subject"
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Message</label>
//                     <textarea
//                       rows="5"
//                       className="form-control"
//                       placeholder="Write your message..."
//                     ></textarea>
//                   </div>

//                   <button className="btn btn-primary px-4">
//                     Send Message
//                   </button>

//                 </form>

//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </>
//   );
// }


import React, { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <div className="bg-dark text-white py-5">

      <h1 className="display-3 fw-bold text-center mb-5">
        Contact Us
      </h1>

      <div className="container">
        <div className="row g-5">

          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="p-4 rounded-4 shadow-lg h-100 bg-secondary bg-opacity-25">

              <h4 className="fw-bold mb-4 text-info">Contact Details</h4>

              <p><i className="fas fa-home me-3 text-info"></i> Kolhapur</p>
              <p><i className="fas fa-envelope me-3 text-info"></i> niranjanrajput14@gmail.com</p>
              <p><i className="fas fa-phone me-3 text-info"></i> +91 9022851403</p>

              <hr className="border-light" />

              <h5 className="mt-4">Follow Me</h5>

              <div className="d-flex gap-3 mt-3">
                <i className="fab fa-facebook fa-lg hover-icon"></i>
                <i className="fab fa-instagram fa-lg hover-icon"></i>
                <i className="fab fa-linkedin fa-lg hover-icon"></i>
                <i className="fab fa-github fa-lg hover-icon"></i>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="p-4 rounded-4 shadow-lg bg-secondary bg-opacity-25">

              <h4 className="fw-bold mb-4 text-info">Send Message</h4>

              <form onSubmit={handleSubmit}>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-dark text-white border-0 shadow-sm"
                      placeholder="Your Name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-dark text-white border-0 shadow-sm"
                      placeholder="Your Email"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="subject"
                  className="form-control mb-3 bg-dark text-white border-0 shadow-sm"
                  placeholder="Subject"
                  onChange={handleChange}
                />

                <textarea
                  rows="5"
                  name="message"
                  className="form-control mb-3 bg-dark text-white border-0 shadow-sm"
                  placeholder="Your Message..."
                  onChange={handleChange}
                ></textarea>

                <button className="btn btn-info text-dark fw-bold px-4 py-2 w-100">
                  Send Message 🚀
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .hover-icon {
          cursor: pointer;
          transition: 0.3s;
        }

        .hover-icon:hover {
          color: #0dcaf0;
          transform: scale(1.2);
        }

        input::placeholder, textarea::placeholder {
          color: #bbb;
        }
      `}</style>

    </div>
  );
}