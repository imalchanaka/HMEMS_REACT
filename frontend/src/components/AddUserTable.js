import { useUserContext } from '../hooks/PurchasingEquipment';
import { useAuthContext } from '../hooks/useAuthContext';
import React from 'react';

const AddUserDetails = ({ addUser }) => {
  const { dispatch } = useUserContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    alert("Are you sure?");
    
    const response = await fetch('/api/addUser/' + addUser._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_User', payload: json });
    }
  };

  return (
    <React.Fragment>
  {addUser && (
    <>
      <p><strong>First Name: </strong>{addUser.firstName}</p>
      <p><strong>Last Name: </strong>{addUser.lastName}</p>
      <p><strong>Email: </strong>{addUser.email}</p>
      <p><strong>Address Line 1: </strong>{addUser.addressLine1}</p>
      <p><strong>Address Line 2: </strong>{addUser.addressLine2}</p>
      <p><strong>Contact: </strong>{addUser.contact}</p>
      <p><strong>Role: </strong>{addUser.role}</p>
      {/* Avoid displaying password for security reasons */}
    </>
  )}
  <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
</React.Fragment>
  );
};

export default AddUserDetails;
