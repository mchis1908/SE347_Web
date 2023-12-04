import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';

export default function Header(props) {
  const user = useSelector((state) => state.value.tennv);
  return (
    <div className="Header">
      <p className='col'></p>
      <div className="Header_title">{props.title}</div>
      <div className="col Header_account">
        <p className="Header_account_name">Xin chào, </p>
        <p className="Header_account_name" style={{color:'#fe4880'}}>{user}</p>
      </div>
    </div>
  );
}
