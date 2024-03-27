import React, { useState } from 'react';
import { useUserContext } from '../hooks/useAddUser';
import { useAuthContext } from "../hooks/useAuthContext";

const UserAddForm = () => {
    const { dispatch } = useUserContext();
    const { user } = useAuthContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // Track success message

    const handleSubmit = async (e) => {
        e.preventDefault();

        const addUser = {
            firstName,
            lastName,
            email,
            addressLine1,
            addressLine2,
            contact,
            role,
            password
        };

        try {
            const response = await fetch("/api/addUser", {
                method: "POST",
                body: JSON.stringify(addUser),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                }
            });

            const json = await response.json();

            if (!response.ok) {
                // Handle error response
            } else {
                // Handle success response
                setSuccessMessage("User added successfully"); // Set success message
                // Reset form fields
                setFirstName("");
                setLastName("");
                setEmail("");
                setAddressLine1("");
                setAddressLine2("");
                setContact("");
                setRole("");
                setPassword("");
                // Dispatch action if needed
                dispatch({ type: "createAddUser", payload: json });
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle fetch error
        }
    };

    return (
        <div>
            <h2>Enter Users Details</h2>
           
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label><br />
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                /><br />

                <label htmlFor="lastName">Last Name:</label><br />
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                /><br />

                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br />

                <label htmlFor="addressLine1">Address Line 1:</label><br />
                <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    required
                /><br />

                <label htmlFor="addressLine2">Address Line 2:</label><br />
                <input
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                /><br />

                <label htmlFor="contact">Contact:</label><br />
                <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                /><br />

                <label htmlFor="role">Role:</label><br />
                <select
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                >
                    <option value="">Select Role</option>
                    <option value="wardAdmin">Ward Admin</option>
                    <option value="electrician">Electrician</option>
                    {/* Add more options as needed */}
                </select><br />

                <label htmlFor="password">Password:</label><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />

                <div style={{ textAlign: 'right', padding: '10px 20px' }}>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {successMessage && (
    <div style={{
        backgroundColor: '#d4edda',
        color: '#155724',
        border: '1px solid #c3e6cb',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '20px auto',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: 'green', marginRight: '10px' }}
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
        <span style={{ verticalAlign: 'middle' }}>{successMessage}</span>
    </div>
)}

        </div>
    );
};

export default UserAddForm;
