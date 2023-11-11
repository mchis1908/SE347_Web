import React from 'react';
import './CustomerHome.css';
import Header from '../../../common/Header/Header';
import Menu from '../Menu/CustomerMenu';

function CustomerHome() {
  return (
    <div className="AdminHome">
      <Menu />
      <Header title="TRANG CHỦ" avt="http://surl.li/ggptd" />
      <div className="AdminHome_main">
        a
      </div>
    </div>
  );
}

export default CustomerHome;
