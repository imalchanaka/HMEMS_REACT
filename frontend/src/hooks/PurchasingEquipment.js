import { useContext } from 'react';
import { UserContext } from '../context/addUserContext';

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error('useUserContext must be used inside a UserContextProvider');
  }

  return context;
};

