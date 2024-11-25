import React from "react";
import Lottie from "react-lottie";
import animationData from "./animation/waiting.json"; 

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="coming-soon-container">
      <div className="text-container">
         <h1>Yakında...</h1>
      <p>Yakında burada etkinliklerle sizlerleyiz.</p>

      </div>
     
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}

export default App;
