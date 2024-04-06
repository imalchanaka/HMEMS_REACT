import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
//import { Link } from 'react-router-dom';
//import add from '../image/login.jpg'; // Import the background image

const EditProfile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isLoading } = useLogin(); // Assuming this hook is also used for updating profile

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the appropriate function for updating email and password here
    // For example:
    // await updateEmail(email);
    // await updatePassword(password);
    console.log(email, password);
  };

  return (
    <div className="edit-profile-container">
      {/* Set background image and center content */}
      <h2 className="edit-profile-title">Edit Profile</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label className="edit-profile-label" htmlFor="edit-email">Edit Email:</label>
        <input
          className="edit-profile-input"
          type="email"
          id="edit-email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className="edit-profile-label" htmlFor="edit-password">Edit Password:</label>
        <input
          className="edit-profile-input"
          type="password"
          id="edit-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button className="edit-profile-button" type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Save Changes'}
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default EditProfile;
