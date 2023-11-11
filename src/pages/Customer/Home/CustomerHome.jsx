import React from 'react';
import './CustomerHome.css';
import Header from '../../../common/Header/Header';
import Menu from '../Menu/CustomerMenu';

function CustomerHome() {
  return (
    <div class="background-feature d-flex flex-column">
        <Header/>
        <div class="d-flex flex-row" style={{height: 'calc( 100vh - 66px)'}}>
            <Menu class="col-2"/>
        </div>
    </div>
  );
}

export default CustomerHome;
