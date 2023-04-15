import React from 'react'
import "./EmployeeMenu.css";
import logo from "../../../Images/logo.png";
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom'

function EmployeeMenu() {
  return (
    <div className="sidebar">
    <Link to='/employee/home'>
        <div className='sidebar_logo'>
            <img src={logo} alt='logo' class='sidebar_PlanB'/>
            <span class='sidebar_title'>PLAN B</span>
        </div>
    </Link>
    <Link to='/employee/home'>
        <div className='sidebar_item'>
            <Icon icon="material-symbols:dashboard-outline-rounded" />
            <span >Trang Chủ</span>
        </div>
    </Link>
    
    <Link to='/employee/deposit'>
        <div className='sidebar_item'>
            <Icon icon="ic:outline-shopping-cart-checkout" />
            <span>Ký Gửi</span>
        </div>
    </Link>
    <Link to='/employee/pay'>
        <div className='sidebar_item'>
            <Icon icon="cib:amazon-pay" />
            <span>Thanh Toán</span>
        </div>
    </Link>
    <Link to='/employee/invoice'>   
        <div className='sidebar_item'>
            <Icon icon="la:file-invoice-dollar" />
            <span>Hóa Đơn</span>
        </div>
    </Link>
    <Link to='/employee/customer'>
        <div className='sidebar_item'>
            <Icon icon="mdi:user-details-outline" />
            <span>Khách Hàng</span>
        </div>
    </Link>
    <Link to='/employee/product'>
        <div className='sidebar_item'>
            <Icon icon="fluent-mdl2:product-variant" />
            <span>Sản Phẩm</span>
        </div>
    </Link>
    {/* --------------------------------------- */}
    <Link to='/'>
        <div className='sidebar_item_bottom-employee'>
            <Icon icon="ri:logout-box-line" />
            <span>Đăng xuất</span>
        </div>
    </Link>
</div>
  )
}

export default EmployeeMenu