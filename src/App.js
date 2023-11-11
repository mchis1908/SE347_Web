import './App.css';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
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
import AdminReport from './pages/Admin/Report/AdminReport';
import { useSelector } from 'react-redux';
import CustomerHome from './pages/Customer/Home/CustomerHome';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} /> */}
        <Route exact path="/" element={ useSelector((state)=> state.value.user !== '') ? ( <Navigate to="/home" /> ) : ( <SignIn /> ) } />
        <Route element={ useSelector((state)=> state.value.user === '') ? ( <Navigate to="/" /> ) : ( <Outlet /> ) }>
          <Route exact path="/home" element={ useSelector((state)=> state.value.role === 'customer') ? ( <CustomerHome /> ) : ( <AdminHome /> ) }/>
          <Route exact path="/customer" element={<AdminCustomer />} />
          <Route exact path="/product" element={<AdminProduct />} />
          <Route exact path="/invoice" element={<AdminInvoice />} />
          <Route exact path="/staff" element={<AdminStaff />} />
          <Route exact path="/deposit" element={<AdminDeposit />} />
          <Route exact path="/pay" element={<AdminPay />} />
          <Route exact path="/chart" element={<AdminChart />} />
          <Route exact path="/account" element={<AdminAccount />} />
          <Route exact path="/schedule" element={<AdminSchedule />} />
          <Route exact path="/report" element={<AdminReport />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
