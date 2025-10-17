"use client";

import React from "react";
import "./PayButtonLoading.css";

function PayButtonLoading () {
return (
    <div className="loading-bar-b">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="barB"></div>
      ))}
    </div>
  );
};

export default PayButtonLoading;
