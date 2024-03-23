import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>

      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
