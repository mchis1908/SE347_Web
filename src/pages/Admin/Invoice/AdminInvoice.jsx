import React from 'react'
import './AdminInvoice.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';

function AdminInvoice() {
  const invoices = [
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
    <div className='AdminInvoice'>
      <Menu/>
      <Header/>
      <div className='AdminInvoice_main'>
        <div className='AdminInvoice_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập hóa đơn cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="AdminInvoice-information">
                <tr className="AdminInvoice-information-header">
                        <td>Mã hóa đơn</td>
                        <td>Chủ sở hữu</td>
                        <td>Số lượng sản phẩm</td>
                        <td>Sản phẩm đã bán</td>
                        <td>Ngày quyết toán</td>
                <hr/>
                </tr>
                <div className='AdminInvoice_detail_infor'>
                  {
                    invoices.map(invoice => {
                          return (
                                  <tr className='AdminInvoice-information-detail'>
                                      <div className='AdminInvoice-information-detail-wrapper'>
                                          <td className='team-name'>{invoice.name}</td>
                                          <td className='stadium-name'>{invoice.phone}</td>
                                          <td className=''>{invoice.mail}</td>
                                          <td className=''>{invoice.sl}</td>
                                          <td className=''>{invoice.madon}</td>
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

export default AdminInvoice