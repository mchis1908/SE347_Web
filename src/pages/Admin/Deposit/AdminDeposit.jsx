import React, { useState } from 'react';
import "./AdminDeposit.css"
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'

function AdminDeposit() {
  const products = [
    {
      id: '1',
      label:'Quần jean',
      cost:'100.000',
      img:'Hình ảnh',
    },
    {
      id: '2',
      label:'Quần jean',
      cost:'100.000',
      img:'Hình ảnh',
    },
    {
      id: '3',
      label:'Quần jean',
      cost:'100.000',
      img:'Hình ảnh',
    },
    {
      id: '4',
      label:'Quần jean',
      cost:'100.000',
      img:'Hình ảnh',
    },
    {
      id: '5',
      label:'Quần jean',
      cost:'100.000',
      img:'Hình ảnh',
    },
    {
      id: '6',
      label:'Quần jean',
      cost:'100.000',
      img:'Hình ảnh',
    },
    {
      id: '7',
      label:'Quần jean',
      cost:'100.000',
      img:'Hình ảnh',
    },
    {
      id: '8',
      label:'Quần jean',
      cost:'100.000',
      img:'Hình ảnh',
    },
    {
      id: '9',
      label:'Quần jean',
      cost:'100.000',
      img:'Hình ảnh',
    },
]
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };
  return (
    <div className='AdminDeposit'>
      <Menu/>
      <Header/>
{/* -------------------------------------------------------------- */}
      <div className='AdminDeposit_main'>
        <div className="AdminDeposit_Bottom">
          <div className='AdminDeposit_Content'>
            <div className='Content_Date'>
              <p className='Content_LabelDay'>Ngày lập hóa đơn:</p>
              <button className='Content_Calendar' onClick={toggleCalendar}>{selectedDate.toLocaleDateString()}</button>
              {showCalendar && (
                <Calendar
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              )}
            </div>
            <div className='AdminDeposit_Detail'>
              <div className='AdminDeposit_CustomerInf'>
                  <p className='AdminDeposit_CustomerInf_Label'>Khách hàng</p>
                  <input className='AdminDeposit_CustomerInf_Input' placeholder='Nhập số điện thoại khách hàng'></input>
              </div>
              <p className='ProductInf_Label'>Sản phẩm:</p>
              <div className='AdminDeposit_ProductList'>
                {
                  products.map(products => {
                        return (
                          <div className='AdminDeposit_ProductInf'>
                            <p className='ProductInf_Id'></p>                    
                            <p className='ProductInf_Id'>{products.id}</p>
                            <p className='ProductInf_Label'>{products.label}</p>
                            <p className='ProductInf_Cost'>{products.img}</p>
                            <p className='ProductInf_Image'>{products.cost}</p>
                          </div>
                        )
                    })
                }
              </div>
              <div className='AdminDeposit_ProductInf'>
                <p className='ProductInf_Id'>Tổng:</p>                    
                <p className='ProductInf_Id'>15</p>                    
                <p className='ProductInf_Label'></p>
                <p className='ProductInf_Cost'></p>
                <p className='ProductInf_Image'>2.000.000</p>
              </div>
              <div className='AdminDeposit_btnChange'>
                <button className='AdminDeposit_btnAddProduct'>Thêm sản phẩm</button>
                <button className='AdminDeposit_btnConfirm'>Xác nhận tạo hóa đơn</button>
              </div>
              
            </div> 
          </div>
          {/* -------------------------------------------------------------- */}
          
        </div>
      </div>
    </div>
  )
}

export default AdminDeposit