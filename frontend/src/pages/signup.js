import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
  const { signup, error, isLoading, isSuccess } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(
        email,
        password,
        firstName,
        lastName,
        addressLine1,
        addressLine2,
        contact,
        role
      );
      // Clear input fields on success
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setAddressLine1("");
      setAddressLine2("");
      setContact("");
      setRole("");
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <form
      style={{
        maxWidth: "full",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9"
      }}
      onSubmit={handleSubmit}
    >
      <h3 style={{ marginTop: "0" }}>Add user</h3>

      <label style={{ display: "block", marginBottom: "5px" }}>Email address:</label>
      <input
        type="email"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box"
        }}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />

      <label style={{ display: "block", marginBottom: "5px" }}>Password:</label>
      <input
        type="password"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box"
        }}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />

      <label style={{ display: "block", marginBottom: "5px" }}>First Name:</label>
      <input
        type="text"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box"
        }}
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        required
      />

      <label style={{ display: "block", marginBottom: "5px" }}>Last Name:</label>
      <input
        type="text"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box"
        }}
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        required
      />

      <label style={{ display: "block", marginBottom: "5px" }}>Address Line 1:</label>
      <input
        type="text"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box"
        }}
        onChange={(e) => setAddressLine1(e.target.value)}
        value={addressLine1}
        required
      />

      <label style={{ display: "block", marginBottom: "5px" }}>Address Line 2:</label>
      <input
        type="text"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box"
        }}
        onChange={(e) => setAddressLine2(e.target.value)}
        value={addressLine2}
      />

      <label style={{ display: "block", marginBottom: "5px" }}>Contact:</label>
      <input
        type="text"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box"
        }}
        onChange={(e) => setContact(e.target.value)}
        value={contact}
        required
      />

      <label htmlFor="role" style={{ display: "block", marginBottom: "5px" }}>Role:</label>
      <select
        id="role"
        name="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box"
        }}
      >
        <option value="">Select Role</option>
        <option value="wardAdmin">Ward Admin</option>
        <option value="electrician">Electrician</option>
        <option value="electrician">Technical Vendor</option>
        <option value="electrician">Non Technical vendor</option>
        
        {/* Add more options as needed */}
      </select>

      <button
        type="submit"
        disabled={isLoading}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: isLoading ? "#ccc" : "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        {isLoading ? "Adding User..." : "Add User"}
      </button>

      {error && <div style={{ color: "red", marginTop: "5px" }}>{error}</div>}
      
      {isSuccess && (
        <div style={{ color: "green", marginTop: "5px" }}>
          User added successfully!
        </div>
      )}
    </form>
  );
};

export default Signup;
