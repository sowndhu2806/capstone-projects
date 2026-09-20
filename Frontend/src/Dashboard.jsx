import React from "react";
import "./Dashboard.css";
import RegisterProduct from "./RegisterProduct.jsx";
import WarrantyDetails from "./WarrantyDetails.jsx";

function Dashboard() {
  const [showRegisterProduct, setShowRegisterProduct] = React.useState(false);
  const [showWarrantyDetails, setShowWarrantyDetails] =
    React.useState(false);

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
      });
  }, []);

  const today = new Date();

  const activeWarranties = products.filter((product) => {
    const endDate = new Date(product.warrantyEndDate);
    return endDate >= today;
  });

  const expiredWarranties = products.filter((product) => {
    const endDate = new Date(product.warrantyEndDate);
    return endDate < today;
  });

  const expiringSoon = products.filter((product) => {
    const endDate = new Date(product.warrantyEndDate);

    const difference =
      (endDate - today) / (1000 * 60 * 60 * 24);

    return difference >= 0 && difference <= 30;
  });

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
            <h2>{products.length}</h2>
            <p>Registered Products</p>
          </div>

          <div className="dashboard-card">
            <h3>Active Warranties</h3>
            <h2>{activeWarranties.length}</h2>
            <p>Currently Active</p>
          </div>

          <div className="dashboard-card">
            <h3>Expiring Soon</h3>
            <h2>{expiringSoon.length}</h2>
            <p>Warranty Expiring</p>
          </div>

          <div className="dashboard-card">
            <h3>Expired Warranties</h3>
            <h2>{expiredWarranties.length}</h2>
            <p>Warranty Expired</p>
          </div>

        </div>

        <section className="dashboard-section">
          <h2>Quick Actions</h2>

          <div className="quick-actions">

            <button
              onClick={() => setShowRegisterProduct(true)}
            >
              Register Product
            </button>

            <button
              onClick={() => setShowWarrantyDetails(true)}
            >
              View Warranty Details
            </button>

          </div>
        </section>

        <section className="dashboard-section">

          <h2>Recent Products</h2>

          {products.length > 0 ? (
            <div className="empty-products">

              {products.map((product) => (
                <p key={product.productId}>
                  {product.productName} - {product.brandName}
                </p>
              ))}

            </div>
          ) : (
            <div className="empty-products">
              <p>No products registered yet.</p>
              <p>
                Register your first product to view warranty details.
              </p>
            </div>
          )}

        </section>

      </main>
    </div>
  );
}

export default Dashboard;