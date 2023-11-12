import React from 'react';
import './AdminMenu.css';
import logo from '../../../Images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function AdminMenu() {
  const location = useLocation();

  const path = location.pathname;
  const role = useSelector((state) => state.value.role);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="sidebar">
      <div>
        <Link to="/home">
          <div className="sidebar_logo">
            <img src={logo} alt="logo" class="sidebar_PlanB" />
            <span class="sidebar_title">PLAN B</span>
          </div>
        </Link>
        <Link to="/home">
          <div className={`${ path==='/home' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-house-check-fill menu-item-icon"></i>
            <span>Trang Chủ</span>
          </div>
        </Link>
        <Link to="/deposit">
          <div className={`${ path==='/deposit' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-send-plus-fill menu-item-icon"></i>
            <span>Ký Gửi</span>
          </div>
        </Link>
        <Link to="/pay">
          <div className={`${ path==='/pay' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-currency-exchange menu-item-icon"></i>
            <span>Thanh Toán</span>
          </div>
        </Link>
        <Link to="/invoice">
          <div className={`${ path==='/invoice' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-receipt-cutoff menu-item-icon"></i>
            <span>Hóa Đơn</span>
          </div>
        </Link>
        <Link to="/customer">
          <div className={`${ path==='/customer' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-people-fill menu-item-icon"></i>
            <span>Khách Hàng</span>
          </div>
        </Link>
        <Link to="/product">
          <div className={`${ path==='/product' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-box menu-item-icon"></i>
            <span>Sản Phẩm</span>
          </div>
        </Link>

        {/* --------------------------------------- */}
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to="/event">
          <div className={`${ path==='/event' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
          <i class="bi bi-calendar2-event-fill menu-item-icon"></i>
            <span>Sự kiện</span>
          </div>
        </Link>
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to="/chart">
          <div className={`${ path==='/chart' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-bar-chart-fill menu-item-icon"></i>
            <span>Biểu đồ</span>
          </div>
        </Link>
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to="/staff">
          <div className={`${ path==='/staff' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-person-badge-fill menu-item-icon"></i>
            <span>Nhân Viên</span>
          </div>
        </Link>
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to="/schedule">
          <div className={`${ path==='/schedule' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-calendar3-week menu-item-icon"></i>
            <span>Giờ Làm Việc</span>
          </div>
        </Link>
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to="/report">
          <div className={`${ path==='/report' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-journal-arrow-down menu-item-icon"></i>
            <span>Báo Cáo</span>
          </div>
        </Link>
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to="/account">
          <div className={`${ path==='/account' ? 'sidebar-item-selector' : 'sidebar_item' }`}>
            <i class="bi bi-person-fill-gear menu-item-icon"></i>
            <span>Tài Khoản</span>
          </div>
        </Link>
      </div>

      <div style={{marginBottom:'16px'}}>
        <Link to="/" onClick={handleLogout}>
          <div className="sidebar_item">
            <i class="bi bi-box-arrow-left menu-item-icon"></i>
            <span>Đăng xuất</span>
          </div>
        </Link>
      </div>
  </div>
  );
}

export default AdminMenu;
