import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Trade from './pages/Trade';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Earn from './pages/Earn';
import Transactions from './pages/Transactions';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Trade" element={<Trade />} />
        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Withdraw" element={<Withdraw />} />
        <Route path="/Earn" element={<Earn />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
