import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn';
import AdminHome from './pages/Admin/Home/AdminHome';
import AdminProduct from './pages/Admin/Product/AdminProduct';
import AdminCustomer from './pages/Admin/Customer/AdminCustomer';
import AdminInvoice from './pages/Admin/Invoice/AdminInvoice';
import AdminStaff from './pages/Admin/Staff/AdminStaff';
import AdminDeposit from './pages/Admin/Deposit/AdminDeposit';
import AdminPay from './pages/Admin/Pay/AdminPay';
import AdminRevenue from './pages/Admin/Revenue/AdminRevenue';
import AdminAccount from './pages/Admin/Account/AdminAccount';
import AdminSchedule from './pages/Admin/Schedule/AdminSchedule';
// ------------------------------------------------------
import EmployeeHome from './pages/Employee/Home/EmployeeHome';
import EmployeeDeposit from './pages/Employee/Deposit/EmployeeDeposit';
import EmployeePay from './pages/Employee/Pay/EmployeePay';
import EmployeeProduct from './pages/Employee/Product/EmployeeProduct';
import EmployeeCustomer from './pages/Employee/Customer/EmployeeCustomer';
import EmployeeInvoice from './pages/Employee/Invoice/EmployeeInvoice';

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
        <Route exact path="/admin/schedule" element={<AdminSchedule/>} />
        <Route exact path="/admin/report" element={<AdminAccount/>} />
        {/* -----Employee----- */}
        <Route exact path="/employee/home" element={<EmployeeHome/>} />
        <Route exact path="/employee/customer" element={<EmployeeCustomer/>} />
        <Route exact path="/employee/product" element={<EmployeeProduct/>} />
        <Route exact path="/employee/invoice" element={<EmployeeInvoice/>} />
        <Route exact path="/employee/deposit" element={<EmployeeDeposit/>} />
        <Route exact path="/employee/pay" element={<EmployeePay/>} />
      </Routes>
    </div>
  );
}

export default App;
