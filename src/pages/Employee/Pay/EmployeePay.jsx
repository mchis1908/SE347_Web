import React, { useState } from 'react';
import "./EmployeePay.css"
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/EmployeeMenu"
import Header from '../../../common/Header/Header'

function EmployeePay() {
  const products = [
    {
      id: '1',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '2',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '3',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '4',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '5',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '6',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '7',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '8',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '9',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
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
    <div className='EmployeePay'>
      <Menu/>
      <Header title="THANH TOÁN" avt='http://surl.li/ggptd' name='Huỳnh Minh Chí'/>
      <div className='EmployeePay_main'>
        <div className="EmployeePay_Top">
          <p className='EmployeePay_ProductInf_Label'>Tìm kiếm</p>
          <input className='EmployeePay_ProductInf_Input' placeholder='Nhập mã sản phẩm'></input>
          <Icon className='EmployeePay_ProductInf_SearchBtn' icon="ic:baseline-search" />
        </div>
        <div className="EmployeePay_Bottom">
          <div className='EmployeePay_Content'>
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
            <div className='EmployeePay_Detail'>
              <div className='EmployeePay_CustomerInf'>
                  <p className='EmployeePay_CustomerInf_Label'>Khách hàng</p>
                  <input className='EmployeePay_CustomerInf_Input' placeholder='Nhập số điện thoại khách hàng'></input>
              </div>
              <p className='ProductInf_Label'>Sản phẩm:</p>
              <div className='EmployeePay_ProductList'>
                {
                  products.map(products => {
                        return (
                          <div className='EmployeePay_ProductInf'>
                            <td></td>                    
                            <td>{products.id}</td>
                            <td>{products.label}</td>
                            <td><img style={{width:'50px', height:'40px'}} src={products.img}/></td>
                            <td>{products.cost}</td>
                            <td className='btn_deleteProduct'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                          </div>
                        )
                    })
                }
              </div>
              <div className='EmployeePay_ProductInf'>
                <td>Tổng:</td>                    
                <td>{products.length}</td>                    
                <td></td>
                <td></td>
                <td>2.000.000</td>
              </div>
              <div className='EmployeePay_btnChange'>
                <button className='EmployeePay_btnPay'>Thanh toán</button>
              </div>
              
            </div> 
          </div>
          {/* -------------------------------------------------------------- */}
          
        </div>
      </div>
    </div>
  )
}

export default EmployeePay