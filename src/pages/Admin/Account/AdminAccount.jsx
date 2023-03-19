import React from 'react'
import './AdminAccount.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';

function AdminAccount() {
  const accounts = [
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
    <div className='AdminAccount'>
      <Menu/>
      <Header/>
      <div className='AdminAccount_main'>
        <div className='AdminAccount_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập tài khoản cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="AdminAccount-information">
                <tr className="AdminAccount-information-header">
                        <td>Tài khoản</td>
                        <td>Mật khẩu</td>
                        <td>Tên nhân viên</td>
                <hr/>
                </tr>
                <div className='AdminAccount_detail_infor'>
                  {
                    accounts.map(account => {
                          return (
                                  <tr className='AdminAccount-information-detail'>
                                      <div className='AdminAccount-information-detail-wrapper'>
                                          <td className='team-name'>{account.name}</td>
                                          <td className='stadium-name'>{account.phone}</td>
                                          <td className=''>{account.mail}</td>
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

export default AdminAccount