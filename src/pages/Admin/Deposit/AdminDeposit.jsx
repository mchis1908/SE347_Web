import React, { useState, useEffect } from 'react';
import "./AdminDeposit.css"
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import AdminDetailDeposit from './ModalDetailDeposit/AdminDetailDeposit';
import Axios from "axios";

function AdminDeposit(props) {
const [tensanpham, setTenSanPham] = useState()
const [khachhang, setKhachHang] = useState()
const [masanpham, setMaSanPham] = useState()
const [loaisanpham, setLoaiSanPham] = useState()
const [trangthai, setTrangThai] = useState()
const [gia, setGia] = useState()
const [hinhanh, setHinhAnh] = useState()

const submitHLVHandler = ()=>{
  const fd = new FormData()
  fd.append('TENSP', tensanpham)
  fd.append('SDTKHACHHANG', khachhang)
  fd.append('MASP', masanpham)
  fd.append('LOAI', loaisanpham)
  fd.append('TRANGTHAI', trangthai)
  fd.append('GIA', gia)
  fd.append('HINHANH', hinhanh)

  Axios.post('http://localhost:8000/v1/sanpham/taosanpham', fd)
  window.location.reload()
}
let [sanphams, setSanPham] = useState([])
const getCLB = async () => {
    try {
        const res = await Axios.get('http://localhost:8000/v1/sanpham/getaProduct/'+'001d30009ff71de813521e7b')
        setSanPham(res.data);
        sanphams=res.data;
    }
    catch (error) {
        console.log(error.message)
    }
}
useEffect(() => {
    getCLB()
}, [])
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
  <div className='AdminDeposit'>
    <Menu/>
    <Header title="KÝ GỬI" avt='http://surl.li/ggptd' name='Huỳnh Minh Chí'/>
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
                sanphams.map((sanphams,index) => {
                      return (
                        <div className='AdminDeposit_ProductInf'>
                          <td></td>                    
                          <td>{index+1}</td>
                          <td>{sanphams.LOAI}</td>
                          <td><img style={{width:'50px', height:'40px'}} src={"http://localhost:8000/"+sanphams.HINHANH}/></td>
                          <td>{sanphams.GIA}</td>
                          <td className='btn_deleteProduct'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                        </div>
                      )
                  })
              }
            </div>
            <div className='AdminDeposit_ProductInf'>
              <td>Tổng:</td>               
              <td>{sanphams.length}</td>                    
              <td></td>
              <td></td>
              <td>2.000.000</td>
            </div>
            <div className='AdminDeposit_btnChange'>
              {showSuccess && (
                <>
                  <button className='AdminDeposit_btnCancel' onClick={handleCancel}>Hủy</button>
                  <button className='AdminDeposit_btnPrintProduct'>In barcode sản phẩm</button>
                  <button className='AdminDeposit_btnPrintInvoice'>In hóa đơn khách hàng</button>
                </>
              )}
              {showNotSuccess && (
                <>
                  <button className='AdminDeposit_btnAddProduct' onClick={openPopup}>Thêm sản phẩm</button>
                  {isOpen &&
                    <AdminDetailDeposit
                      title="Thêm sản phẩm"
                      onClose={closePopup}
                    >
                      {props.children}
                    </AdminDetailDeposit>
                  }
                  <button className='AdminDeposit_btnConfirm' onClick={handleConfirm}>Xác nhận tạo hóa đơn</button>
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

export default AdminDeposit