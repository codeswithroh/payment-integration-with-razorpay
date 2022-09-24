export default async function displayRazorpay() {
  const data = await fetch("http://localhost:5000/razorpay", {
    method: "POST",
  }).then((t) => t.json());
  console.log(data);

  const options = {
    key: "rzp_test_10wmxUNcMkGoQ1",
    currency: data.currency,
    amount: data.amount,
    desciption: "Wallet Transaction",
    image: "http://localhost:5000/logo.png",
    order_id: data.id,
    handler: function (response) {
      alert("Payment ID: " + response.razorpay_payment_id);
      alert("Order ID: " + response.razorpay_order_id);
    },
    prefill: {
      name: "Rohit Purkait",
      email: "rohit@gmail.com",
      contact: "6290627369",
    },
  };

  // displaying the window
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
