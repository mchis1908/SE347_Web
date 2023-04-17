import React from 'react'
import "./AdminMenu.css";
import logo from "../../../Images/logo.png";
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom'

function AdminMenu() {
  return (
    <div className="sidebar">
        <Link to='/admin/home'>
            <div className='sidebar_logo'>
                <img src={logo} alt='logo' class='sidebar_PlanB'/>
                <span class='sidebar_title'>PLAN B</span>
            </div>
        </Link>
        <Link to='/admin/home'>
            <div className='sidebar_item'>
                <Icon icon="material-symbols:dashboard-outline-rounded" />
                <span >Trang Chủ</span>
            </div>
        </Link>
        
        <Link to='/admin/deposit'>
            <div className='sidebar_item'>
                <Icon icon="ic:outline-shopping-cart-checkout" />
                <span>Ký Gửi</span>
            </div>
        </Link>
        <Link to='/admin/pay'>
            <div className='sidebar_item'>
                <Icon icon="cib:amazon-pay" />
                <span>Thanh Toán</span>
            </div>
        </Link>
        <Link to='/admin/invoice'>   
            <div className='sidebar_item'>
                <Icon icon="la:file-invoice-dollar" />
                <span>Hóa Đơn</span>
            </div>
        </Link>
        <Link to='/admin/customer'>
            <div className='sidebar_item'>
                <Icon icon="mdi:user-details-outline" />
                <span>Khách Hàng</span>
            </div>
        </Link>
        <Link to='/admin/product'>
            <div className='sidebar_item'>
                <Icon icon="fluent-mdl2:product-variant" />
                <span>Sản Phẩm</span>
            </div>
        </Link>

        {/* --------------------------------------- */}
        <Link to='/admin/revenue'>
            <div className='sidebar_item'>
                <Icon icon="mdi:report-bell-curve-cumulative" />
                <span>Biểu đồ</span>
            </div>
        </Link>
        <Link to='/admin/staff'>
            <div className='sidebar_item'>
                <Icon icon="clarity:employee-group-line" />
                <span>Nhân Viên</span>
            </div>
        </Link>
        <Link to='/admin/schedule'>
            <div className='sidebar_item'>
                <Icon icon="material-symbols:home-work-outline-rounded" />
                <span>Chấm Công</span>
            </div>
        </Link>
        {/* <Link to='/admin/report'>
            <div className='sidebar_item'>
                <Icon icon="la:file-invoice-dollar" />
                <span>Báo Cáo</span>
            </div>
        </Link> */}
        <Link to='/admin/account'>
            <div className='sidebar_item'>
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