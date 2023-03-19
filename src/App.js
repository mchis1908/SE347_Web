import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn';
import AdminHome from './pages/Admin/Home/AdminHome';
import EmployeeHome from './pages/Employee/Home/EmployeeHome';
import Customer from './pages/Admin/Customer/Customer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        {/* -----Admin----- */}
        <Route exact path="/admin/home" element={<AdminHome/>} />
        <Route exact path="/admin/customer" element={<Customer/>} />
        {/* -----Employee----- */}
        <Route exact path="/employee/home" element={<EmployeeHome/>} />
      </Routes>
    </div>
  );
}

export default App;
