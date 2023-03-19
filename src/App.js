import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Admin/AdminHome';
import SignIn from './pages/SignIn/SignIn';
import Menu from './common/Menu/Menu';
import AdminHome from './pages/Admin/AdminHome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/admin/home" element={<AdminHome/>} />
      </Routes>
    </div>
  );
}

export default App;
