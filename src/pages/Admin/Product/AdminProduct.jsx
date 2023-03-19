import React from 'react'
import './AdminProduct.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';

function AdminProduct() {
  const products = [
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
    <div className='AdminProduct'>
      <Menu/>
      <Header/>
      <div className='AdminProduct_main'>
        <div className='AdminProduct_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập sản phẩm cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="AdminProduct-information">
                <tr className="AdminProduct-information-header">
                        <td>Mã sản phẩm</td>
                        <td>Mã hóa đơn</td>
                        <td>Chủ sở hữu</td>
                        <td>Giá bán</td>
                        <td>Hình ảnh</td>
                        <td>Trạng thái</td>
                <hr/>
                </tr>
                <div className='AdminProduct_detail_infor'>
                  {
                    products.map(product => {
                          return (
                                  <tr className='AdminProduct-information-detail'>
                                      <div className='AdminProduct-information-detail-wrapper'>
                                          <td className='team-name'>{product.name}</td>
                                          <td className='stadium-name'>{product.phone}</td>
                                          <td className=''>{product.mail}</td>
                                          <td className=''>{product.sl}</td>
                                          <td className=''>{product.madon}</td>
                                          <td className=''>{product.madon}</td>
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

export default AdminProduct