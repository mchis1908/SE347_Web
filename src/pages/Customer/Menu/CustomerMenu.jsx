import React from 'react';
import './CustomerMenu.css';
import logo from '../../../Images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
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
    <div className="sidebar d-flex flex-column justify-content-between">
      <div>
        <Link to="/home">
          <div className="sidebar_logo">
            <img src={logo} alt="logo" class="sidebar_PlanB" />
            <span class="sidebar_title">PLAN B</span>
          </div>
        </Link>
        <Link to="/home">
          <div className={`${ path==='/home' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <Icon icon="material-symbols:dashboard-outline-rounded" />
            <span>Trang Chủ</span>
          </div>
        </Link>
        <Link to="/deposit">
          <div className={`${ path==='/deposit' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <Icon icon="ic:outline-shopping-cart-checkout" />
            <span>Ký Gửi</span>
          </div>
        </Link>
      </div>
      <div>
      <Link to="/" onClick={handleLogout}>
        <div className="sidebar_item_bottom">
          <Icon icon="ri:logout-box-line" />
          <span>Đăng xuất</span>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default CustomerMenu;
