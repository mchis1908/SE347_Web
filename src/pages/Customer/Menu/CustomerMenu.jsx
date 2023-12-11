import React, { useState, useEffect } from 'react';
import './CustomerMenu.css';
import logo from '../../../Images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { setPathHome } from '../../../redux/userSlice';
import { setPathInvoice } from '../../../redux/userSlice';

function CustomerMenu() {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const [isHome , setIsHome] = useState(true);
  const [isInvoice , setIsInvoice] = useState(true);
  const homeChild= [
    {id: 1, name: 'Áo thun'},
    {id: 2, name: 'Áo sơ mi'},
    {id: 3, name: 'Hoodie'},
    {id: 4, name: 'Jacket'},
    {id: 5, name: 'Quần jean'},
    {id: 6, name: 'Quần short'},
    {id: 7, name: 'Quần tây'},
    {id: 8, name: 'Quần ống loe'},
    {id: 9, name: 'Chân váy'},
    {id: 10, name: 'Đầm'},
  ]

  const invoiceChild= [
    {id: 1, name: 'Bán hàng'},
    {id: 2, name: 'Ký gửi'},
  ]

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
        <div>
          <div className='d-flex flex-row justify-content-between align-items-center' style={{padding:'0 8px'}}>
            <Link onClick={()=> dispatch(setPathHome(''))} to="/home" className={`${ path.includes('/home') ? 'sidebar-item-selector' : 'sidebar_item' }`}>
              <i className="bi bi-house-check-fill menu-item-icon"></i>
              <span>Trang Chủ</span>
            </Link>
            {isHome ? (
              <i className="bi bi-chevron-down" style={{ '-webkit-text-stroke': '1px' }} onClick={() => setIsHome(false)}></i>
            ) : (
              <i className="bi bi-chevron-up" style={{ '-webkit-text-stroke': '1px' }} onClick={() => setIsHome(true)}></i>
            )}
          </div>
          
          <div className='d-flex flex-column' style={{ marginLeft: '50px', gap: '4px' }}>
            {!isHome ? (
              <></>
            ) : (
              homeChild.map((item, index) => (
                <Link onClick={()=> dispatch(setPathHome(item?.name))}
                  to={`/home/${item?.id}`}
                  className={`${path === `/home/${item?.id}` ? 'menu-item-child-selected' : 'menu-item-child'}`}
                  key={index}
                >
                  {item?.name}
                </Link>
              ))
            )}
          </div>
        </div>
        <div>
          <div className='d-flex flex-row justify-content-between align-items-center' style={{padding:'0 8px'}}>
            <Link onClick={()=> dispatch(setPathInvoice(''))} to="/customer-invoice" className={`${ path.includes('/customer-invoice') ? 'sidebar-item-selector' : 'sidebar_item' }`}>
              <i className="bi bi-receipt-cutoff menu-item-icon"></i>
              <span>Hóa Đơn</span>
            </Link>
            {isInvoice ? (
              <i className="bi bi-chevron-down" style={{ '-webkit-text-stroke': '1px' }} onClick={() => setIsInvoice(false)}></i>
            ) : (
              <i className="bi bi-chevron-up" style={{ '-webkit-text-stroke': '1px' }} onClick={() => setIsInvoice(true)}></i>
            )}
          </div>
          <div className='d-flex flex-column' style={{ marginLeft: '50px', gap: '4px' }}>
            {!isInvoice ? (
              <></>
            ) : (
              invoiceChild.map((item, index) => (
                <Link onClick={()=> dispatch(setPathInvoice(item?.name))}
                  to={`/customer-invoice/${item?.id}`}
                  className={`${path === `/customer-invoice/${item?.id}` ? 'menu-item-child-selected' : 'menu-item-child'}`}
                  key={index}
                >
                  {item?.name}
                </Link>
              ))
            )}
          </div>
        </div>
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
