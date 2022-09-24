const express = require("express");

const app = express();
const path = require("path");
const cors = require("cors");
const shortid = require("shortid");
const razorpay = require("razorpay");

// initialize razorpay credentials
const Razorpay = new razorpay({
  key_id: "rzp_test_10wmxUNcMkGoQ1",
  key_secret: "kmHK2O1tHxBMiX3VN7kgQ89Q",
});

app.use(cors());

app.get("/logo.png", (req, res) => {
  res.sendFile(path.join(__dirname, "logo.png"));
});

app.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = 499;
  const currency = "INR";

  const options = {
    amount,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await Razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
