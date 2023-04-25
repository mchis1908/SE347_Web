import React, { useState } from 'react';
import "./EmployeeDeposit.css"
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/EmployeeMenu"
import Header from '../../../common/Header/Header'
import EmployeeAddProduct from '../Product/ModalDetailProduct/EmployeeDetailProduct';

function EmployeeDeposit(props) {
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
const [isOpen, setIsOpen] = useState(false);

const openPopup = () => {
  setIsOpen(true);
};

const closePopup = () => {
  setIsOpen(false);
};
const [showCalendar, setShowCalendar] = useState(false);
const [selectedDate, setSelectedDate] = useState(new Date());

const toggleCalendar = () => {
  setShowCalendar(!showCalendar);
};

const handleDateChange = (date) => {
  setSelectedDate(date);
  setShowCalendar(false);
};
const [showNotSuccess, setShowNotSuccess] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirm = () => {
    setShowNotSuccess(false);
    setShowSuccess(true);
  };

  const handleCancel = () => {
    setShowNotSuccess(true);
    setShowSuccess(false);
  };
return (
  <div className='EmployeeDeposit'>
    <Menu/>
    <Header title="KÝ GỬI" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
    <div className='EmployeeDeposit_main'>
      <div className="EmployeeDeposit_Bottom">
        <div className='EmployeeDeposit_Content'>
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
          <div className='EmployeeDeposit_Detail'>
            <div className='EmployeeDeposit_CustomerInf'>
                <p className='EmployeeDeposit_CustomerInf_Label'>Khách hàng</p>
                <input className='EmployeeDeposit_CustomerInf_Input' placeholder='Nhập số điện thoại khách hàng'></input>
            </div>
            <p className='ProductInf_Label'>Sản phẩm:</p>
            <div className='EmployeeDeposit_ProductList'>
              {
                products.map(products => {
                      return (
                        <div className='EmployeeDeposit_ProductInf'>
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
            <div className='EmployeeDeposit_ProductInf'>
              <td>Tổng:</td>               
              <td>{products.length}</td>                    
              <td></td>
              <td></td>
              <td>2.000.000</td>
            </div>
            <div className='EmployeeDeposit_btnChange'>
              {showSuccess && (
                <>
                  <button className='EmployeeDeposit_btnCancel' onClick={handleCancel}>Hủy</button>
                  <button className='EmployeeDeposit_btnPrintProduct'>In barcode sản phẩm</button>
                  <button className='EmployeeDeposit_btnPrintInvoice'>In hóa đơn khách hàng</button>
                </>
              )}
              {showNotSuccess && (
                <>
                  <button className='EmployeeDeposit_btnAddProduct' onClick={openPopup}>Thêm sản phẩm</button>
                  {isOpen &&
                    <EmployeeAddProduct
                      title="Thêm sản phẩm"
                      onClose={closePopup}
                    >
                      {props.children}
                    </EmployeeAddProduct>
                  }
                  <button className='EmployeeDeposit_btnConfirm' onClick={handleConfirm}>Xác nhận tạo hóa đơn</button>
                </>
              )}
            </div>
            
          </div> 
        </div>
        {/* -------------------------------------------------------------- */}
        
      </div>
    </div>
  </div>
)
}

export default EmployeeDeposit