import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContextProvider} from './context/addUserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <AuthContextProvider>
    <WorkoutsContextProvider>
      <UserContextProvider>
  
       <App />
      </UserContextProvider>
     
    </WorkoutsContextProvider>
  </AuthContextProvider>
</React.StrictMode>

);


