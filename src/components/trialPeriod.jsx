import React from "react";

const TrialExpired = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center border rounded p-4 shadow bg-white">
        <h4 className="text-danger mb-3">
          🚫 Trial Period Expired
        </h4>
        <p className="text-secondary mb-0">
          Please contact us at{" "}
          <a
            href="https://www.metatech-official.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary fw-bold text-decoration-none"
          >
            www.metatech-official.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TrialExpired;
