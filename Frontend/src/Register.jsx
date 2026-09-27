import { useState } from "react";
import { API_URL } from "./api.js";

function Register({ goToLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            password,
            phoneNumber,
            address: "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setMessage("Registration successful!");

      setFullName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");

      setTimeout(() => {
        goToLogin();
      }, 1000);

    } catch (error) {
      setMessage("Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Create Account</h1>
        <h2>Warranty Portal</h2>

        <form onSubmit={handleRegister}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>

          <label>Phone Number</label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        {message && (
          <p className="message">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}

export default Register;