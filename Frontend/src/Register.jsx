function Register() {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Create Account</h1>
        <h2>Warranty Portal</h2>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" />

          <button type="submit">Register</button>
        </form>

      </div>
    </div>
  );
}

export default Register;
