import React from 'react'
import './AdminStaff.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';

function AdminStaff() {
  const staffs = [
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
    <div className='AdminStaff'>
      <Menu/>
      <Header/>
      <div className='AdminStaff_main'>
        <div className='AdminStaff_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập nhân viên cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="AdminStaff-information">
                <tr className="AdminStaff-information-header">
                        <td>Họ và tên</td>
                        <td>Số điện thoại</td>
                        <td>Email</td>
                        <td>Số giờ làm việc tháng: <span>3</span></td>
                        <td>Lương thưởng</td>
                <hr/>
                </tr>
                <div className='AdminStaff_detail_infor'>
                  {
                    staffs.map(staff => {
                          return (
                                  <tr className='AdminStaff-information-detail'>
                                      <div className='AdminStaff-information-detail-wrapper'>
                                          <td className='team-name'>{staff.name}</td>
                                          <td className='stadium-name'>{staff.phone}</td>
                                          <td className=''>{staff.mail}</td>
                                          <td className=''>{staff.sl}</td>
                                          <td className=''>{staff.madon}</td>
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

export default AdminStaff