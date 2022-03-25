import React, { useState } from "react";

const WarrantyHeader = ({ view, setView }) => {
  return (
    <div className="warranty-header" style={{ display: "flex" }}>
      <div
        onClick={() => setView("registration")}
        className={`warranty-header-item ${
          view === "registration" ? "active" : null
        }`}
      >
        Registration
      </div>
      <div
        onClick={() => setView("products")}
        className={`warranty-header-item ${
          view === "products" ? "active" : null
        }`}
      >
        Your Products
      </div>
    </div>
  );
};

export default WarrantyHeader;
