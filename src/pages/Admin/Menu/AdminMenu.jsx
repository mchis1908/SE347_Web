import React from 'react'
import "./AdminMenu.css";
import logo from "../../../Images/logo.png";
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

function AdminMenu() {
    const location = useLocation();

    const path = location.pathname;
    const role = localStorage.getItem('role');
    return (
    <div className="sidebar">
        <Link to='/home'>
            <div className='sidebar_logo'>
                <img src={logo} alt='logo' class='sidebar_PlanB'/>
                <span class='sidebar_title'>PLAN B</span>
            </div>
        </Link>
        <Link to='/home'>
            <div className={`${path==='/home' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="material-symbols:dashboard-outline-rounded" />
                <span>Trang Chủ</span>
            </div>
        </Link>
        <Link to='/deposit'>
            <div className={`${path==='/deposit' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="ic:outline-shopping-cart-checkout" />
                <span>Ký Gửi</span>
            </div>
        </Link>
        <Link to='/pay'>
            <div className={`${path==='/pay' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="cib:amazon-pay" />
                <span>Thanh Toán</span>
            </div>
        </Link>
        <Link to='/invoice'>   
            <div className={`${path==='/invoice' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="la:file-invoice-dollar" />
                <span>Hóa Đơn</span>
            </div>
        </Link>
        <Link to='/customer'>
            <div className={`${path==='/customer' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="mdi:user-details-outline" />
                <span>Khách Hàng</span>
            </div>
        </Link>
        <Link to='/product'>
            <div className={`${path==='/product' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="fluent-mdl2:product-variant" />
                <span>Sản Phẩm</span>
            </div>
        </Link>

        {/* --------------------------------------- */}
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to='/chart'>
            <div className={`${path==='/chart' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="mdi:report-bell-curve-cumulative" />
                <span>Biểu đồ</span>
            </div>
        </Link>
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to='/staff'>
            <div className={`${path==='/staff' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="clarity:employee-group-line" />
                <span>Nhân Viên</span>
            </div>
        </Link>
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to='/schedule'>
            <div className={`${path==='/schedule' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="material-symbols:home-work-outline-rounded" />
                <span>Giờ Làm Việc</span>
            </div>
        </Link>
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to='/report'>
            <div className={`${path==='/report' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="la:file-invoice-dollar" />
                <span>Báo Cáo</span>
            </div>
        </Link>
        <Link style={{ display: role === 'admin' ? 'block' : 'none' }} to='/account'>
            <div className={`${path==='/account' ? 'sidebar-item-selector' : 'sidebar_item'}`}>
                <Icon icon="material-symbols:settings-account-box-outline" />
                <span>Tài Khoản</span>
            </div>
        </Link>
        <Link to='/'>
            <div className='sidebar_item_bottom'>
                <Icon icon="ri:logout-box-line" />
                <span>Đăng xuất</span>
            </div>
        </Link>
    </div>
  )
}

export default AdminMenu