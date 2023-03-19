import React from 'react'
import "./Menu.css";
import logo from "../../../Images/logo.png";
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

function Menu() {
  return (
    <div className="sidebar">
        <div className='sidebar_logo'>
            <img src={logo} alt='logo' class='sidebar_PlanB'/>
            <span class='sidebar_title'>PLAN B</span>
        </div>
        <div className='sidebar_item'>
            <Icon icon="material-symbols:dashboard-outline-rounded" />
            <span >Trang Chủ</span>
        </div>
        <div className='sidebar_item'>
            <Icon icon="mdi:user-details-outline" />
            <span>Khách Hàng</span>
        </div>
        <div className='sidebar_item'>
            <Icon icon="fluent-mdl2:product-variant" />
            <span>Sản Phẩm</span>
        </div>
        <div className='sidebar_item'>
            <Icon icon="ic:outline-shopping-cart-checkout" />
            <span>Ký Gửi</span>
        </div>
        <div className='sidebar_item'>
            <Icon icon="cib:amazon-pay" />
            <span>Thanh Toán</span>
        </div>
        <div className='sidebar_item'>
            <Icon icon="la:file-invoice-dollar" />
            <span>Hóa Đơn</span>
        </div>
        {/* --------------------------------------- */}
        <div className='sidebar_item'>
            <Icon icon="clarity:employee-group-line" />
            <span>Nhân Viên</span>
        </div>
        <div className='sidebar_item'>
            <Icon icon="la:file-invoice-dollar" />
            <span>Doanh Thu</span>
        </div>
        <div className='sidebar_item'>
            <Icon icon="material-symbols:settings-account-box-outline" />
            <span>Tài khoản</span>
        </div>
        
        <div className='sidebar_item_bottom'>
            <Icon icon="ri:logout-box-line" />
            <span>Đăng xuất</span>
        </div>
    </div>
  )
}

export default Menu