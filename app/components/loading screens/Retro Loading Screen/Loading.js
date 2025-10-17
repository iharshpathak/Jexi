"use client";

import "./Loading.css";

function LoadingScreen () {
return (
    <div className="loading-container h-screen Bgcolor-invert-animation  w-full h-full">
      <h1 className="text-2xl font-extrabold color-invert-animation
        shadow-[4px_4px_0px_#000000] bg-black text-center mb-2">
        CHECKOUT
      </h1>
      <h2 className="loading-text">Loading...</h2>
      <div className="loading-bar">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="loading-block"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
