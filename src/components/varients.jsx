import React, { useState } from "react";

const Varients = ({ sizes ,selectedSize, setSelectedSize}) => {

  return (
    <div className="d-flex gap-3 flex-column">
      <div>
        <small className="text-muted">Selected:</small>
        <span className="ms-1 fw-semibold">
          {selectedSize?.variant}
        </span>
      </div>

      <div className="d-flex gap-2 flex-wrap">
        {sizes.map((item, index) => (
          <button
            key={item._id || index}
            className={`text-lowercase btn rounded-pill px-3 py-2 ${
              selectedSize === item
                ? "border border-2 border-dark"
                : "border border-1 border-light text-muted"
            }`}
            style={{
              backgroundColor: selectedSize === item ? "white" : "transparent",
            }}
            onClick={() => setSelectedSize(item)}
          >
            {item.variant}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Varients;
