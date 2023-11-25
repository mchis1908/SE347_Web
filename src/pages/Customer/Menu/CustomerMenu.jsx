import React from 'react';
import './CustomerMenu.css';
import logo from '../../../Images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../../redux/userSlice';
import { useDispatch } from 'react-redux';

function CustomerMenu() {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="sidebar">
      <div>
        <Link to="/home">
          <div className="sidebar_logo">
            <img src={logo} alt="logo" className="sidebar_PlanB" />
            <span className="sidebar_title">PLAN B</span>
          </div>
        </Link>
        <Link to="/home">
          <div className={`${ path==='/home' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i className="bi bi-house-check-fill menu-item-icon"></i>
            <span>Trang Chủ</span>
          </div>
        </Link>
        <Link to="/customer-invoice">
          <div className={`${ path==='/customer-invoice' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i className="bi bi-receipt-cutoff menu-item-icon"></i>
            <span>Hóa Đơn</span>
          </div>
        </Link>
        {/* <Link to="/home">
          <div className={`${ path==='/deposit' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i className="bi bi-box menu-item-icon"></i>
            <span>Ký Gửi</span>
          </div>
        </Link> */}
      </div>
      <div style={{marginBottom:'16px'}}>
        <Link to="/" onClick={handleLogout}>
          <div className="sidebar_item">
            <i className="bi bi-box-arrow-left menu-item-icon"></i>
            <span>Đăng xuất</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CustomerMenu;
