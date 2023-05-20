import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
// import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import SignIn from './pages/SignIn/SignIn';
import AdminHome from './pages/Admin/Home/AdminHome';
import AdminProduct from './pages/Admin/Product/AdminProduct';
import AdminCustomer from './pages/Admin/Customer/AdminCustomer';
import AdminInvoice from './pages/Admin/Invoice/AdminInvoice';
import AdminStaff from './pages/Admin/Staff/AdminStaff';
import AdminDeposit from './pages/Admin/Deposit/AdminDeposit';
import AdminPay from './pages/Admin/Pay/AdminPay';
import AdminChart from './pages/Admin/Chart/AdminChart';
import AdminAccount from './pages/Admin/Account/AdminAccount';
import AdminSchedule from './pages/Admin/Schedule/AdminSchedule';
// ------------------------------------------------------
import EmployeeDeposit from './pages/Employee/Deposit/EmployeeDeposit';
import EmployeePay from './pages/Employee/Pay/EmployeePay';
import EmployeeProduct from './pages/Employee/Product/EmployeeProduct';
import EmployeeCustomer from './pages/Employee/Customer/EmployeeCustomer';
import EmployeeInvoice from './pages/Employee/Invoice/EmployeeInvoice';
import AdminReport from './pages/Admin/Report/AdminReport';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={<SignIn setIsAuthenticated={setIsAuthenticated}/>} /> */}
        <Route exact path="/" element={<SignIn/>} />
        {/* -----Admin----- */}
        {/* <Route exact path="/admin/home" element={<AdminHome isAuthenticated={isAuthenticated}/>} /> */}
        <Route exact path="/admin/home" element={<AdminHome/>} />
        <Route exact path="/admin/customer" element={<AdminCustomer/>}/>
        <Route exact path="/admin/product" element={<AdminProduct/>}/>
        <Route exact path="/admin/invoice" element={<AdminInvoice/>}/>
        <Route exact path="/admin/staff" element={<AdminStaff/>}/>
        <Route exact path="/admin/deposit" element={<AdminDeposit/>}/>
        <Route exact path="/admin/pay" element={<AdminPay/>}/>
        <Route exact path="/admin/chart" element={<AdminChart/>}/>
        <Route exact path="/admin/account" element={<AdminAccount/>}/>
        <Route exact path="/admin/schedule" element={<AdminSchedule/>}/>
        <Route exact path="/admin/report" element={<AdminReport/>}/>
        {/* -----Employee----- */}
        <Route exact path="/employee/home" element={<AdminHome/>}/>
        <Route exact path="/employee/customer" element={<EmployeeCustomer/>}/>
        <Route exact path="/employee/product" element={<EmployeeProduct/>}/>
        <Route exact path="/employee/invoice" element={<EmployeeInvoice/>}/>
        <Route exact path="/employee/deposit" element={<EmployeeDeposit/>}/>
        <Route exact path="/employee/pay" element={<EmployeePay/>}/>
        {/* ------------------------- */}
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
