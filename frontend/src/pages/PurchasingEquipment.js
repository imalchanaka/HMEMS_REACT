import React, { useState } from 'react';
import { useUserContext } from '../hooks/PurchasingEquipment';
import { useAuthContext } from "../hooks/useAuthContext";

const PurchasingEquipment = () => {
    const { dispatch } = useUserContext();
    const { user } = useAuthContext();

   
    const [serialNumber, setSerialNumber] = useState("");
    const [vendor, setVendor] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [purchasingDate, setPurchasingDate] = useState("");
    const [warrantyPeriod, setWarrantyPeriod] = useState("");
    const [genericName, setGenericName] = useState("");
    const [equipmentType, setEquipmentType] = useState("");
    const [comment, setComment] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // Track success message

    const handleSubmit = async (e) => {
        e.preventDefault();

        const PurchasingEquipment = {
           
            serialNumber,
            vendor,
            brand,
            model,
            purchasingDate,
            warrantyPeriod,
            genericName,
            equipmentType,
            comment
        };

        try {
            const response = await fetch("/api/addUser", {
                method: "POST",
                body: JSON.stringify(PurchasingEquipment),
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
                setSerialNumber("");
                setVendor("");
                setBrand("");
                setModel("");
                setPurchasingDate("");
                setWarrantyPeriod("");
                setGenericName("");
                setEquipmentType("");
                setComment("");
                //setSuccessMessage("");
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
            <h2>Purchsing request</h2>
           
            <form onSubmit={handleSubmit}>
            
                <label htmlFor="serialNumber">Serial Number:</label><br />
                <input
                    type="text"
                    id="serialNumber"
                    name="serialNumber"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                /><br />

                <label htmlFor="vendor">Vendor:</label><br />
                <input
                    type="text"
                    id="vendor"
                    name="vendor"
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                /><br />

                <label htmlFor="brand">Brand:</label><br />
                <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                /><br />

                <label htmlFor="model">Model:</label><br />
                <input
                    type="text"
                    id="model"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                /><br />

                <label htmlFor="purchasingDate">Purchasing Date:</label><br />
                <input
                    type="date"
                    id="purchasingDate"
                    name="purchasingDate"
                    value={purchasingDate}
                    onChange={(e) => setPurchasingDate(e.target.value)}
                /><br />

                <label htmlFor="warrantyPeriod">Warranty Period:</label><br />
                <input
                    type="text"
                    id="warrantyPeriod"
                    name="warrantyPeriod"
                    value={warrantyPeriod}
                    onChange={(e) => setWarrantyPeriod(e.target.value)}
                /><br />

                <label htmlFor="genericName">Generic Name:</label><br />
                <input
                    type="text"
                    id="genericName"
                    name="genericName"
                    value={genericName}
                    onChange={(e) => setGenericName(e.target.value)}
                /><br />

                <label htmlFor="equipmentType">Equipment Type:</label><br />
                <select
                    id="equipmentType"
                    name="equipmentType"
                    value={equipmentType}
                    onChange={(e) => setEquipmentType(e.target.value)}
                >
                    <option value="">Select Type</option>
                    <option value="technical">Technical</option>
                    <option value="non-technical">Non-Technical</option>
                </select><br />

                <label  htmlFor="comment">Comment:</label><br />
                <textarea
                    id="comment"
                    name="comment"
                    value={comment}
                    style={{ width: "100%", height: "100px" }}
                    onChange={(e) => setComment(e.target.value)}
                /><br />

                <div style={{ textAlign: 'right', padding: '10px 20px' }}>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor:"#4caf50",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                    Submit
                    </button>
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

export default PurchasingEquipment;
