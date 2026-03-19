import React, { useState } from "react";
import "./payment.css";

function Payment() {
  const [method, setMethod] = useState("card");
  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const submitPayment = (e) => {
    e.preventDefault();

    if (name === "" || cardNo === "" || expiry === "" || cvv === "") {
      alert("Please fill all details");
    } else {
      alert("Payment successful. Thank you for shopping!");
    }
  };

  return (
    <div className="payment">
      <h2>Beauty Store Payment</h2>

      <div className="order">
        <p>Lipstick - ₹799</p>
        <p>Face Cream - ₹599</p>
        <h4>Total : ₹1398</h4>
      </div>

      <form onSubmit={submitPayment}>
        <label>
          <input
            type="radio"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          Card Payment
        </label>

        <label>
          <input
            type="radio"
            checked={method === "upi"}
            onChange={() => setMethod("upi")}
          />
          UPI Payment
        </label>

        {method === "card" && (
          <>
            <input
              type="text"
              placeholder="Card Holder Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Card Number"
              value={cardNo}
              onChange={(e) => setCardNo(e.target.value)}
            />

            <input
              type="text"
              placeholder="Expiry Date"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />

            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </>
        )}

        {method === "upi" && (
          <input type="text" placeholder="Enter UPI ID" />
        )}

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
