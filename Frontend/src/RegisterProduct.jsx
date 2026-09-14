import React from "react";

function RegisterProduct({ goToDashboard }) {
  return (
    <div className="register-page">
      <h1>Register Product</h1>

      <input type="text" placeholder="Product Name" />
      <input type="text" placeholder="Brand Name" />
      <input type="text" placeholder="Product Serial Number" />
      <input type="date" />
      <input type="date" />

      <button onClick={() => alert("Product registered successfully!")}>
        Register Product
      </button>

      <button onClick={goToDashboard}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default RegisterProduct;