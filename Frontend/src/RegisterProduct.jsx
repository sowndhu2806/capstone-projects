import React, { useState } from "react";
import "./RegisterProduct.css";
import { API_URL } from "./api.js";

function RegisterProduct({ goToDashboard }) {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

  const handleRegisterProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/api/products/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName,
            brandName,
            serialNumber,
            warrantyStartDate: startDate,
            warrantyEndDate: endDate,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Product registration failed");
      }

      setMessage("Product registered successfully!");

      setProductName("");
      setBrandName("");
      setSerialNumber("");
      setStartDate("");
      setEndDate("");
    } catch (error) {
      setMessage("Product registration failed");
      console.error(error);
    }
  };

  return (
    <div className="register-page">

      <h1>Register New Product</h1>

      <form onSubmit={handleRegisterProduct}>

        <label>Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <label>Brand Name</label>
        <input
          type="text"
          placeholder="Enter brand name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          required
        />

        <label>Product Serial Number</label>
        <input
          type="text"
          placeholder="Enter serial number"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          required
        />

        <label>Warranty Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <label>Warranty End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <button type="submit">
          Register Product
        </button>

      </form>

      {message && (
        <p className="message">
          {message}
        </p>
      )}

      <button onClick={goToDashboard}>
        Back to Dashboard
      </button>

    </div>
  );
}

export default RegisterProduct;