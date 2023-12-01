import "./App.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import img from "./logo.svg"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".Shawkat");
   const optians = {
     root: null,
     rootMargin: "0px",
     threshold: 0.4,
   };
   const callbacks = (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add("ashraf");
       }
     });
   };
   let observer = new IntersectionObserver(callbacks, optians);
   elements.forEach((element) => {
     observer.observe(element);
   });
  }, []);
  return (
    <>
      {/* animate__slideInLeft */}
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div style={{ fontSize: "100px" }}>dsfhgfkbasfjkdsjkfnas</div>
      <div className="Shawkat ">
        <img src={img} alt="soura" className="soura" />
      </div>
      <div className="Shawkat ">
        <img src={img} alt="soura" className="soura" />
      </div>
      <div className="Shawkat ">
        <img src={img} alt="soura" className="soura" />
      </div>
      <div className="Shawkat ">
        <img src={img} alt="soura" className="soura" />
      </div>
    </>
  );
}

export default App;
