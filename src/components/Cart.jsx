import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart, incrementByQuantity, decrementByQuantity } from '../app/cartSlice';

export default function Cart() {

  let dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,0 );


    

  function handlePayment(e) {
    e.preventDefault();

    var options = {
      "key": "rzp_test_4yosHYDduPYmKN", // Enter the Key ID generated from the Dashboard
      "amount": totalPrice * 100, // Amount is in currency subunits. 
      "currency": "INR",
      "name": "BikeHub", //your business name
      "description": "Test Transaction",
      "image": "https://img.freepik.com/premium-vector/motorcycle-icon-logo-design_775854-635.jpg",
      // "order_id": "order_9A33XWu170gUtm", // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
       "handler": function (response){
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
        alert("Thank You, Visit again...");
    },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Alex Lim", //your customer's name
        "email": "alex.lim@example.com",
        "contact": "+6591119111" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#21e3f9"
      }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  };


    

  return (
    <section className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div className="row">

          {/* LEFT SIDE - CART ITEMS */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 rounded-4 p-4">
              <h3 className="fw-bold mb-4">🛒 Your Cart</h3>

              {cartProducts.length === 0 ? (
                <h5 className="text-muted text-center">Your cart is empty</h5>
              ) : (
                cartProducts.map((product) => (
                  <div key={product.id} className="row align-items-center mb-4 border-bottom pb-3">

                    <div className="col-md-2">
                      <img
                        src={product.image}
                        className="img-fluid rounded-3"
                        alt={product.title}
                      />
                    </div>

                    <div className="col-md-3">
                      <h6 className="fw-semibold">{product.title}</h6>
                      <small className="text-muted">₹ {product.price}</small>
                    </div>

                    <div className="col-md-3 d-flex align-items-center">

                      <button
                        onClick={() => dispatch(decrementByQuantity(product.id))}
                        className="btn btn-outline-dark btn-sm"
                      >
                        -
                      </button>

                      <input
                        type="number"
                        value={product.quantity}
                        readOnly
                        className="form-control text-center mx-2"
                        style={{ width: "60px" }}
                      />

                      <button
                        onClick={() => dispatch(incrementByQuantity(product.id))}
                        className="btn btn-outline-dark btn-sm"
                      >
                        +
                      </button>

                    </div>

                    <div className="col-md-2 text-end fw-bold">
                      ₹ {product.price * product.quantity}
                    </div>

                    <div className="col-md-2 text-end">
                      <button
                        onClick={() => dispatch(removeProductFromCart(product.id))}
                        className="btn btn-sm btn-danger"
                      >
                        Remove
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="col-lg-4">
            <div className="card shadow border-0 rounded-4 p-4">
              <h4 className="fw-bold mb-4">Order Summary</h4>

              <div className="d-flex justify-content-between mb-3">
                <span>Items</span>
                <span>{cartProducts.length}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Total</span>
                <span className="fw-bold">₹ {totalPrice}</span>
              </div>

              <button onClick={handlePayment} className="btn btn-dark w-100 rounded-pill mt-3">
                Proceed to Checkout
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}