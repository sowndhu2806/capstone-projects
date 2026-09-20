import React, { useState } from "react";

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
        "http://localhost:8080/api/products/register",
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

      <h1>Register Product</h1>

      <form onSubmit={handleRegisterProduct}>

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Brand Name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Product Serial Number"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          required
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

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