import { useState } from "react";
import "./App.css";
import Register from "./Register.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter email and password");
      return;
    }

    setMessage("Login successful!");
setShowDashboard(true);
  };

  if (showRegister) {
    return (
      <Register
        goToLogin={() => setShowRegister(false)}
      />
    );
  }
  if (showDashboard) {
  return <Dashboard />;
}

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo">
          🛡️
        </div>

        <h1>Product Warranty</h1>

        <h2>Registration Portal</h2>

        <p className="welcome">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot">
            <a href="#">
              Forgot Password?
            </a>
          </div>

          <button type="submit">
            Login
          </button>

        </form>

        {message && (
          <p className="message">
            {message}
          </p>
        )}

        <p className="register">
          Don't have an account?

          <button
            type="button"
            onClick={() => setShowRegister(true)}
            style={{
              border: "none",
              background: "none",
              color: "#173b70",
              fontWeight: "bold",
              cursor: "pointer",
              padding: "0",
              fontSize: "14px"
            }}
          >
            {" "}Register Here
          </button>

        </p>

      </div>

    </div>
  );
}

export default App;