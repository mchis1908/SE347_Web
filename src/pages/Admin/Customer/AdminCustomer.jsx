import React from 'react'
import './AdminCustomer.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';

function AdminCustomer() {
  const customers = [
    {
        name: 'Huỳnh Minh Chí',
        madon: '0756982',
        mail:'20521130@gmail.com',
        phone:'0376488361',
        sl: 5
    },
    {
      name: 'Huỳnh Minh Chí',
      madon: '0756982',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      sl: 5
  },{
    name: 'Huỳnh Minh Chí',
    madon: '0756982',
    mail:'20521130@gmail.com',
    phone:'0376488361',
    sl: 5
},{
        name: 'Huỳnh Minh Chí',
        madon: '0756982',
        mail:'20521130@gmail.com',
        phone:'0376488361',
        sl: 5
    },{
      name: 'Huỳnh Minh Chí',
      madon: '0756982',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      sl: 5
  },{
    name: 'Huỳnh Minh Chí',
    madon: '0756982',
    mail:'20521130@gmail.com',
    phone:'0376488361',
    sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},
]
  return (
    <div className='AdminCustomer'>
      <Menu/>
      <Header/>
      <div className='AdminCustomer_main'>
        <div className='AdminCustomer_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập khách hàng cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="AdminCustomer-information">
                <tr className="AdminCustomer-information-header">
                        <td>Họ và tên</td>
                        <td>Số điện thoại</td>
                        <td>Email</td>
                        <td>Số hóa đơn ký gửi</td>
                        <td>Mã đơn hàng gần nhất</td>
                <hr/>
                </tr>
                <div className='AdminCustomer_detail_infor'>
                  {
                    customers.map(customer => {
                          return (
                                  <tr className='AdminCustomer-information-detail'>
                                      <div className='AdminCustomer-information-detail-wrapper'>
                                          <td className='team-name'>{customer.name}</td>
                                          <td className='stadium-name'>{customer.phone}</td>
                                          <td className=''>{customer.mail}</td>
                                          <td className=''>{customer.sl}</td>
                                          <td className=''>{customer.madon}</td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                
            </table>
          </div>
      </div>
    </div>
  )
}

export default AdminCustomer