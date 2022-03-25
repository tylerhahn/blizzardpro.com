import React from "react";

const SuccessAni = (props) => {
  const { title, marginTop, maxWidth } = props;
  return (
    <div
      style={{ marginTop: marginTop, maxWidth: maxWidth }}
      className="success-ani"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2"
      >
        <circle
          className="path circle"
          fill="none"
          stroke="#73AF55"
          strokeWidth="6"
          strokeMiterLimit="10"
          cx="65.1"
          cy="65.1"
          r="62.1"
        />
        <polyline
          className="path check"
          fill="none"
          stroke="#73AF55"
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterLimit="10"
          points="100.2,40.2 51.5,88.8 29.8,67.5 "
        />
      </svg>
      <p className="success">{title}</p>
    </div>
  );
};

export default SuccessAni;
