import React from "react";
import "./Dashboard.css";
import RegisterProduct from "./RegisterProduct.jsx";
import WarrantyDetails from "./WarrantyDetails.jsx";

function Dashboard() {
    const [showRegisterProduct, setShowRegisterProduct] = React.useState(false);
    const [showWarrantyDetails, setShowWarrantyDetails] =
  React.useState(false);
    if (showRegisterProduct) {
  return (
    <RegisterProduct
      goToDashboard={() => setShowRegisterProduct(false)}
    />
  );
}

if (showWarrantyDetails) {
  return (
    <WarrantyDetails
      goToDashboard={() => setShowWarrantyDetails(false)}
    />
  );
}

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <h1>Smart Warranty</h1>
          <p>Product Warranty Registration Portal</p>
        </div>

        <button
  className="logout-btn"
  onClick={() => window.location.reload()}
>
  Logout
</button>
      </header>

      <main className="dashboard-container">
        <h2>Welcome to Dashboard!</h2>
        <p className="dashboard-subtitle">
          Manage your products and warranty details easily.
        </p>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Total Products</h3>
            <h2>0</h2>
            <p>Registered Products</p>
          </div>

          <div className="dashboard-card">
            <h3>Active Warranties</h3>
            <h2>0</h2>
            <p>Currently Active</p>
          </div>

          <div className="dashboard-card">
            <h3>Expiring Soon</h3>
            <h2>0</h2>
            <p>Warranty Expiring</p>
          </div>

          <div className="dashboard-card">
            <h3>Expired Warranties</h3>
            <h2>0</h2>
            <p>Warranty Expired</p>
          </div>
        </div>

        <section className="dashboard-section">
          <h2>Quick Actions</h2>

          <div className="quick-actions">
            <button onClick={() => setShowRegisterProduct(true)}>
  Register Product
</button>
            <button onClick={() => setShowWarrantyDetails(true)}>
  View Warranty Details
</button>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Recent Products</h2>

          <div className="empty-products">
            <p>No products registered yet.</p>
            <p>Register your first product to view warranty details.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Dashboard;