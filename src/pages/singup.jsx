import React from 'react';
import { Link } from 'react-router-dom';
export default function Signup() {
  const [signupFormData, setSignupFormData] = React.useState({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(signupFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignupFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="signup-container">
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={signupFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={signupFormData.password}
        />
        <Link to="../login">Already have an account?</Link>
        <button>Log in</button>
      </form>
    </div>
  );
}
