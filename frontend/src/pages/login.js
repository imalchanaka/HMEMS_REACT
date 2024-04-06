import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
//import { Link } from 'react-router-dom';
import add from '../image/login.jpg'; // Import the background image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    console.log(email, password);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${add}})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
  {/* Your login page content */}

      {/* Set background image and center content */}
      <h2 className="login-title" style={{ textAlign: 'center' }}>Welcome to Admin Log In</h2>
      <form className="login-form" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <label className="login-label" htmlFor="email" style={{ marginBottom: '2px' }}>Email Address:</label>
        <input
          className="login-input"
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />

        <label className="login-label" htmlFor="password" style={{marginBottom: '2px' }}>Password:</label>
        <input
          className="login-input"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />

        <button className="login-button" type="submit" disabled={isLoading} style={{ width: '100%', padding: '10px', marginBottom: '20px' }}>
          {isLoading ? 'Loading...' : 'Log In'}
        </button>
        {/* <Link className="signup-button" to="/signup" style={{ textAlign: 'center', display: 'block', textDecoration: 'none', color: 'inherit' }}>
          Sign Up
        </Link> */}
      </form>
      {error && <div className="error-message" style={{ textAlign: 'center' }}>{error}</div>}
    </div>
  );
};

export default Login;
