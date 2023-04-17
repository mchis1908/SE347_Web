import React,{useState} from 'react'
import './EmployeeInvoice.css'
import Menu from "../Menu/EmployeeMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import EmployeeDetailInvoice from './ModalDetailInvoice/EmployeeDetailInvoice';

function EmployeeInvoice(props) {
const invoices = [
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Bán hàng',
  trangthai: 'Đã thanh toán'
},
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Ký gửi',
  trangthai: 'Đã thanh toán'
},
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Ký gửi',
  trangthai: 'Chưa thanh toán'
},
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Bán hàng',
  trangthai: 'Đã thanh toán'
},
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Bán hàng',
  trangthai: 'Đã thanh toán'
},
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Ký gửi',
  trangthai: 'Đã thanh toán'
},
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Ký gửi',
  trangthai: 'Đã thanh toán'
},
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Bán hàng',
  trangthai: 'Đã thanh toán'
},
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Bán hàng',
  trangthai: 'Đã thanh toán'
},
{
  madon: '56422122',
  khachhang: 'aHuỳnh Minh Chí',
  soluong:'10',
  loai:'Ký gửi',
  trangthai: 'Đã thanh toán'
},
{
  madon: '56422122',
  khachhang: 'Huỳnh Minh Chí',
  soluong:'10',
  loai:'Bán hàng',
  trangthai: 'Đã thanh toán'
}
]
const [isOpen, setIsOpen] = useState(false);

const openPopup = () => {
  setIsOpen(true);
};

const closePopup = () => {
  setIsOpen(false);
};
const [isSorted, setIsSorted] = useState(false);
const [data,setData]= useState(invoices)
const [initialData,setInitialData]= useState(data)

const sortByName = () => {
  const sortedData = [...data].sort((a, b) => a.khachhang.localeCompare(b.khachhang));
  setData(sortedData);
  setIsSorted(true);
};
const resetData = () => {
  setData(initialData);
  setIsSorted(false);
};
const handleClick = () => {
  if (isSorted) {
    resetData();
  } else {
    sortByName();
  }
};
  return (
    <div className='EmployeeInvoice'>
      <Menu/>
      <Header title="QUẢN LÝ HÓA ĐƠN" avt='http://surl.li/ggptd' name='Huỳnh Minh Chí'/>
      <div className='EmployeeInvoice_main'>
        <div className='EmployeeInvoice_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập hóa đơn cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="EmployeeInvoice-information">
                <tr className="EmployeeInvoice-information-header">
                        <th>Mã hóa đơn <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Chủ sở hữu <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số lượng sản phẩm <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Loại hóa đơn <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Trạng thái <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                <hr/>
                </tr>
                <div className='EmployeeInvoice_detail_infor'>
                  {
                    data.map(data => {
                          return (
                          <tr className='EmployeeInvoice-information-detail' onClick={openPopup}>
                              <div className='EmployeeInvoice-information-detail-wrapper'>
                                  <td>{data.madon}</td>
                                  <td>{data.khachhang}</td>
                                  <td>{data.soluong}</td>
                                  <td>{data.loai}</td>
                                  <td>{data.trangthai}</td>
                              </div>
                          </tr>
                          )
                      })
                  }
                </div>
                {isOpen &&
                  <EmployeeDetailInvoice
                    title="Chi tiết hóa đơn"
                    onClose={closePopup}
                  >
                    {props.children}
                  </EmployeeDetailInvoice>
                }    
            </table>
          </div>
      </div>
    </div>
  )
}

export default EmployeeInvoice