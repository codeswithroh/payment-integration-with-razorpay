import React from "react";
import displayRazorpay from "../utils/PaymentGateway";

function CourseCard() {
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <br />
      <h1>Razorpay payment integration</h1>
      <button type="button" onClick={displayRazorpay}>
        Buy now
      </button>
    </div>
  );
}

export default CourseCard;
