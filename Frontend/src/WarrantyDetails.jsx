import React, { useEffect, useState } from "react";
import "./WarrantyDetails.css";
import { API_URL } from "./api.js";

function WarrantyDetails({ goToDashboard }) {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setProducts(data);
        } else {
          setMessage("No products registered yet");
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Unable to load warranty details");
      });
  }, []);

  const getWarrantyStatus = (endDate) => {
    const today = new Date();
    const warrantyEnd = new Date(endDate);

    if (today > warrantyEnd) {
      return "Expired";
    }

    return "Active";
  };

  const getProductIcon = (productName) => {
    const name = productName.toLowerCase();

    if (name.includes("laptop")) {
      return "💻";
    }

    if (
      name.includes("phone") ||
      name.includes("mobile") ||
      name.includes("smartphone")
    ) {
      return "📱";
    }

    if (name.includes("washing")) {
      return "🧺";
    }

    if (name.includes("television") || name.includes("tv")) {
      return "📺";
    }

    return "📦";
  };

  return (
    <div className="warranty-page">

      <div className="warranty-header">
        <div>
          <h1>Warranty Details</h1>
          <p>View and manage your registered product warranties</p>
        </div>

        <div className="warranty-header-icons">
          <span>💻</span>
          <span>📱</span>
          <span>📺</span>
        </div>
      </div>

      <div className="warranty-card">

        <h2>Product Warranty Information</h2>

        {products.length > 0 ? (
          <div className="table-container">

            <table className="warranty-table">

              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Product</th>
                  <th>Brand</th>
                  <th>Serial Number</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {products.map((product, index) => {

                  const status = getWarrantyStatus(
                    product.warrantyEndDate
                  );

                  return (
                    <tr key={product.productId}>

                      <td className="serial-cell">
                        {index + 1}
                      </td>

                      <td className="product-cell">
                        <div className="product-info">

                          <div className="product-icon">
                            {getProductIcon(product.productName)}
                          </div>

                          <strong>
                            {product.productName}
                          </strong>

                        </div>
                      </td>

                      <td>
                        {product.brandName}
                      </td>

                      <td>
                        {product.serialNumber}
                      </td>

                      <td>
                        {product.warrantyStartDate}
                      </td>

                      <td>
                        {product.warrantyEndDate}
                      </td>

                      <td>
                        <span
                          className={
                            status === "Active"
                              ? "status active"
                              : "status expired"
                          }
                        >
                          <span className="status-dot"></span>
                          {status}
                        </span>
                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>
        ) : (
          <p className="empty-message">
            {message || "Loading warranty details..."}
          </p>
        )}

      </div>

      <button
        className="back-dashboard-btn"
        onClick={goToDashboard}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}

export default WarrantyDetails;