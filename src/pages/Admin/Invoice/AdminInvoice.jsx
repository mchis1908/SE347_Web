import React,{useState} from 'react'
import './AdminInvoice.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';

function AdminInvoice() {
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
},

]
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
    <div className='AdminInvoice'>
      <Menu/>
      <Header title="QUẢN LÝ HÓA ĐƠN" avt='http://surl.li/ggptd' name='Huỳnh Minh Chí'/>
      <div className='AdminInvoice_main'>
        <div className='AdminInvoice_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập hóa đơn cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="AdminInvoice-information">
                <tr className="AdminInvoice-information-header">
                        <th>Mã hóa đơn <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Chủ sở hữu <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số lượng sản phẩm <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Loại hóa đơn <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Trạng thái <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                <hr/>
                </tr>
                <div className='AdminInvoice_detail_infor'>
                  {
                    data.map(data => {
                          return (
                                  <tr className='AdminInvoice-information-detail'>
                                      <div className='AdminInvoice-information-detail-wrapper'>
                                          <td>{data.madon}</td>
                                          <td>{data.khachhang}</td>
                                          <td>{data.soluong}</td>
                                          <td>{data.loai}</td>
                                          <td>{data.trangthai}</td>
                                          <td className='btn_deleteInvoice'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
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