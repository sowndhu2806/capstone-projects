import React, { useEffect, useState } from "react";

function WarrantyDetails({ goToDashboard }) {
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setProduct(data[data.length - 1]);
        } else {
          setMessage("No product registered yet");
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Unable to load warranty details");
      });
  }, []);

  const getWarrantyStatus = () => {
    if (!product) return "Not Available";

    const today = new Date();
    const endDate = new Date(product.warrantyEndDate);

    if (today > endDate) {
      return "Expired";
    }

    return "Active";
  };

  return (
    <div className="warranty-page">
      <h1>Warranty Details</h1>

      <div className="warranty-card">
        <h2>Product Warranty Information</h2>

        {product ? (
          <>
            <p>
              <strong>Product Name:</strong> {product.productName}
            </p>

            <p>
              <strong>Brand Name:</strong> {product.brandName}
            </p>

            <p>
              <strong>Serial Number:</strong> {product.serialNumber}
            </p>

            <p>
              <strong>Warranty Start Date:</strong>{" "}
              {product.warrantyStartDate}
            </p>

            <p>
              <strong>Warranty End Date:</strong>{" "}
              {product.warrantyEndDate}
            </p>

            <p>
              <strong>Warranty Status:</strong> {getWarrantyStatus()}
            </p>
          </>
        ) : (
          <p>{message || "Loading..."}</p>
        )}
      </div>

      <button onClick={goToDashboard}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default WarrantyDetails;