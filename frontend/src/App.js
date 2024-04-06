import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./components/Navbar";
import PurchasingEquipment from "./pages/PurchasingEquipment";
import Dashbord from "./pages/Dashbord";
import ShowUser from "./pages/showUsers";
import RapairRequest from "./pages/Rapairrequest";
import Disposal from "./pages/DisposalRequest";
import Footer from "./components/footer";
import EditProfile from "./pages/EditProfile";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <div className="App">
        {user && <Navbar />} 


      

        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Dashbord /> : <Login />} />
            <Route path="/Home" element={user ? <Home /> : <Navigate to="/login" replace />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
            <Route path="/signup" element={user ? <Signup /> : <Navigate to="/" replace />} />
            <Route path="/PurchasingEquipment" element={user ? <PurchasingEquipment /> : <Navigate to="/login" replace />} />
            <Route path="/showuser" element={user ? <ShowUser /> : <Navigate to="/" replace />} />
            <Route path="/RapairReuest" element={user ? <RapairRequest /> : <Navigate to="/" replace />} />
            <Route path="/Disposal" element={user ? <Disposal /> : <Navigate to="/" replace />} />
            <Route path="/editProfile" element={user ? <EditProfile /> : <Navigate to="/" replace />} />
          </Routes>
          
        </div>
        {user && <Footer />} 
      </div>
    </BrowserRouter>
  );
}

export default App;
