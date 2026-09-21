import React, { useEffect, useState } from "react";
import "./WarrantyDetails.css";

function WarrantyDetails({ goToDashboard }) {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
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
        setMessage("Unable to load warrenty details");
      });
  }, []);

  const getWarrentyStatus = (endDate) => {
    const today = new Date();
    const warrentyEnd = new Date(endDate);

    if (today > warrentyEnd) {
      return "Expired";
    }

    return "Active";
  };

  return (
    <div className="warrenty-page">

      <div className="warrenty-header">
        <h1>Warrenty Details</h1>
        <p>View and manage your registered product warrenties</p>
      </div>

      <div className="warrenty-card">

        <h2>Product Warrenty Information</h2>

        {products.length > 0 ? (
          <div className="table-container">

            <table className="warrenty-table">

              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Serial Number</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, index) => {

                  const status = getWarrentyStatus(
                    product.warrantyEndDate
                  );

                  return (
                    <tr key={product.productId}>

                      <td>{index + 1}</td>

                      <td>
                        <strong>{product.productName}</strong>
                      </td>

                      <td>{product.brandName}</td>

                      <td>{product.serialNumber}</td>

                      <td>{product.warrantyStartDate}</td>

                      <td>{product.warrantyEndDate}</td>

                      <td>
                        <span
                          className={
                            status === "Active"
                              ? "status active"
                              : "status expired"
                          }
                        >
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
            {message || "Loading warrenty details..."}
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