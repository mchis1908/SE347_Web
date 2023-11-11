import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';

export default function Header(props) {
  const user = useSelector((state) => state.value.user);
  return (
    <div className="Header">
      <p className='col'></p>
      <p className="Header_title">{props.title}</p>
      <div className="col Header_account">
        <p className="Header_account_name">{user}</p>
        <img className="Header_account_Avatar" src={props.avt} alt="img" />
      </div>
    </div>
  );
}
