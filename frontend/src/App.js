import { useEffect } from "react";
import "./App.css";
import CourseCard from "./Components/CourseCard";
import loadScript from "./Custom_Hooks/loadScript";

function App() {
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);
  return (
    <div className="App">
      <CourseCard />
    </div>
  );
}

export default App;
