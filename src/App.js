import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn';
import AdminHome from './pages/Admin/Home/AdminHome';
import EmployeeHome from './pages/Employee/Home/EmployeeHome';
import AdminProduct from './pages/Admin/Product/AdminProduct';
import AdminCustomer from './pages/Admin/Customer/AdminCustomer';
import AdminInvoice from './pages/Admin/Invoice/AdminInvoice';
import AdminStaff from './pages/Admin/Staff/AdminStaff';
import AdminDeposit from './pages/Admin/Deposit/AdminDeposit';
import AdminPay from './pages/Admin/Pay/AdminPay';
import AdminRevenue from './pages/Admin/Revenue/AdminRevenue';
import AdminAccount from './pages/Admin/Account/AdminAccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        {/* -----Admin----- */}
        <Route exact path="/admin/home" element={<AdminHome/>} />
        <Route exact path="/admin/customer" element={<AdminCustomer/>} />
        <Route exact path="/admin/product" element={<AdminProduct/>} />
        <Route exact path="/admin/invoice" element={<AdminInvoice/>} />
        <Route exact path="/admin/staff" element={<AdminStaff/>} />
        <Route exact path="/admin/deposit" element={<AdminDeposit/>} />
        <Route exact path="/admin/pay" element={<AdminPay/>} />
        <Route exact path="/admin/revenue" element={<AdminRevenue/>} />
        <Route exact path="/admin/account" element={<AdminAccount/>} />
        {/* -----Employee----- */}
        <Route exact path="/employee/home" element={<EmployeeHome/>} />
      </Routes>
    </div>
  );
}

export default App;
