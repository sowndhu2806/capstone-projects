import React from "react";

function WarrantyDetails({ goToDashboard }) {
  return (
    <div className="warranty-page">
      <h1>Warranty Details</h1>

      <div className="warranty-card">
        <h2>Product Warranty Information</h2>

        <p>
          <strong>Product Name:</strong> No product registered yet
        </p>

        <p>
          <strong>Brand Name:</strong> -
        </p>

        <p>
          <strong>Warranty Start Date:</strong> -
        </p>

        <p>
          <strong>Warranty End Date:</strong> -
        </p>

        <p>
          <strong>Warranty Status:</strong> Not Available
        </p>
      </div>

      <button onClick={goToDashboard}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default WarrantyDetails;