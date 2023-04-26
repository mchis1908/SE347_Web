import React, { useState, useEffect } from 'react';
import "./AdminDeposit.css"
import { Icon } from '@iconify/react';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import AdminDetailDeposit from './ModalDetailDeposit/AdminDetailDeposit';
import cryptoRandomString from 'crypto-random-string';
import {Autocomplete}  from "@mui/material";
import TextField from "@mui/material/TextField";
import Axios from "axios";

function AdminDeposit(props) {
const [khachhang, setSDTKhachHang] = useState()
const [loaihoadon, setLoaiHoaDon] = useState('Ký gửi')
const [trangthaiHD, setTrangThaiHD] = useState('Chưa thanh toán')
let [khachhangs, setKhachHang] = useState([])
const getKH = async () => {
    try {
        const res = await Axios.get('http://localhost:8000/v1/khachhang/getkhachhang')
        setKhachHang(res.data);
        khachhangs=res.data;
    }
    catch (error) {
        console.log(error.message)
    }
}

let [sanphams, setSanPham] = useState([])
const getSANPHAM = async () => {
    try {
        const res = await Axios.get('http://localhost:8000/v1/sanpham/getsanphambymakygui/'+'001d30009ff71de813521e7b')
        setSanPham(res.data);
        sanphams=res.data;
    }
    catch (error) {
        console.log(error.message)
    }
}

useEffect(() => {
  getSANPHAM();
  getKH();
}, [])

const [isOpen, setIsOpen] = useState(false);

const openPopup = () => {
  setIsOpen(true);
};

const closePopup = () => {
  setIsOpen(false);
};
const [showNotSuccess, setShowNotSuccess] = useState(true);
const [showSuccess, setShowSuccess] = useState(false);

const currentDate = new Date();
const handleConfirm = async () => {
  if (document.getElementById('sdtkhachhang').value === '') {
      alert('Vui lòng nhập thông tin khách hàng')
      return
  }
  if (sanphams.length === 0) {
    alert('Hiện chưa có sản phẩm nào')
    return
  }
  const answer = window.confirm("Bạn có chắc chắn tạo hóa đơn",);
  if (answer) {
    const randommahoadon = cryptoRandomString({ length: 16 });
    try{
      Axios.post('http://localhost:8000/v1/hoadon/themhoadon', 
      {
        MAHOADON: randommahoadon,
        SDT: khachhang,
        SOLUONG: sanphams.length,
        LOAI: loaihoadon,
        TRANGTHAI: trangthaiHD,
        NGAYTAODON: currentDate.toLocaleString()
      })
    }
    catch{
        alert('Số điện thoại trùng')
        return
    }
    Axios.patch('http://localhost:8000/v1/sanpham/updatesanphambymahd/'+'001d30009ff71de813521e7b', 
    {
      MAHOADONKG: randommahoadon
    })
    Axios.patch('http://localhost:8000/v1/khachhang/updatekhachhang/'+ khachhang, 
    {
      LANDENGANNHAT: currentDate.toLocaleString()
    })
    // ---------Xử lý sản phẩm NGÀY---------
    // ---------Xử lý sản phẩm THÁNG---------
    const formatNgay = currentDate.toLocaleString().replaceAll('/', '-').substring(9);
    const formatThang = currentDate.toLocaleString().replaceAll('/', '-').substring(12);
    // console.log(formatNgay)
    try {
      const response = await Axios.get('http://localhost:8000/v1/baocaospngay/getBaoCaoSPNgay/' + formatNgay);
      const bcn = response.data;
      const response1 = await Axios.get('http://localhost:8000/v1/baocaospthang/getBaoCaoSPThang/' + formatThang);
      const bct = response1.data;
      const res = await Axios.patch(
        'http://localhost:8000/v1/baocaospngay/updateBaoCaoSPNgay/' + formatNgay,
        {
          SLSANPHAMNHAN: bcn.SLSANPHAMNHAN + sanphams.length,
        }
      );
      Axios.patch(
        'http://localhost:8000/v1/baocaospthang/updateBaoCaoSPThang/' + formatThang,
        {
          SLSANPHAMNHAN: bct.SLSANPHAMNHAN + sanphams.length,
        }
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Axios.post('http://localhost:8000/v1/baocaospngay/themBaoCaoSPNgay/', {
          THOIGIAN: formatNgay,
          SLSANPHAMBAN: 0,
          SLSANPHAMNHAN: sanphams.length,
        });
        Axios.post('http://localhost:8000/v1/baocaospthang/themBaoCaoSPThang/', {
          THOIGIAN: formatThang,
          SLSANPHAMBAN: 0,
          SLSANPHAMNHAN: sanphams.length,
        });
        console.log('Chưa có báo cáo, hệ thống sẽ tạo báo cáo');
      } else {
        console.log('Lỗi khi gửi yêu cầu Axios: ', error.message);
      }
    }
    window.alert('Hóa đơn đã được tạo thành công')
    setShowNotSuccess(false);
    setShowSuccess(true);
  }
  
};

const handleComplete = () => {
  setShowNotSuccess(true);
  setShowSuccess(false);
  window.location.reload()
};
const handleCancel = () => {
  if(sanphams.length=== 0) window.alert('Chưa có sản phẩm nào');
  else{
    const answer = window.confirm("Bạn có chắc chắn hủy tạo hóa đơn. Tất cả sản phẩm trong đơn sẽ bị xóa.",);
    if (answer) {
      Axios.delete('http://localhost:8000/v1/sanpham/deletesanphambymahd/'+'001d30009ff71de813521e7b')
      setShowNotSuccess(true);
      setShowSuccess(false);
      window.location.reload()
    }
  }
 
};
const calculateTotal = () => {
  let total =0;
  for(let i = 0; i < sanphams.length; i++) {
    total+=sanphams[i].GIANHAN;
  }
  return total;
};
return (
  <div className='AdminDeposit'>
    <Menu/>
    <Header title="KÝ GỬI" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
    <div className='AdminDeposit_main'>
      <div className="AdminDeposit_Bottom">
        <div className='AdminDeposit_Content'>
          <div className='AdminDeposit_Detail'>
            <div className='AdminDeposit_CustomerInf'>
              <p className='ProductInf_Label'>Khách hàng:</p>
              <Autocomplete
                disablePortal
                id='sdtkhachhang'
                options={khachhangs}
                style={{marginLeft:'4vw', width:'30vw'}}
                getOptionLabel={(option) => option.SDT}
                renderInput={(params) => <TextField {...params} label="Khách Hàng" size="small" />}
                onSelect={(e)=> {setSDTKhachHang(e.target.value)}}
              />
            </div>
            <p className='ProductInf_Label'>Sản phẩm:</p>
              <div className='AdminDeposit_ProductInf'>
                <td></td>                    
                <td>STT</td>
                <td>Tên sản phẩm</td>
                <td>Loại</td>
                <td>Hình ảnh</td>
                <td>Giá</td>
                <td className='btn_deleteProduct'></td>
              </div>
            <div className='AdminDeposit_ProductList'>
              {
                sanphams.map((sanphams,index) => {
                    return (
                      <div className='AdminDeposit_ProductInf'>
                        <td></td>                    
                        <td>{index+1}</td>
                        <td>{sanphams.TENSANPHAM}</td>
                        <td>{sanphams.LOAI}</td>
                        <td><img style={{width:'50px', height:'40px'}} src={"http://localhost:8000/"+sanphams.HINHANH}/></td>
                        <td>{sanphams.GIANHAN}</td>
                        <td className='btn_deleteProduct'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                      </div>
                    )
                })
              }
            </div>
            <hr/>
            <div className='AdminDeposit_ProductInf'>
              <td>Số lượng:</td>               
              <td>{sanphams.length}</td>                    
              <td></td>                    
              <td></td>
              <td>Tổng tiền: </td>
              <td>{calculateTotal()}</td>
            </div>
            <div className='AdminDeposit_btnChange'>
              {showSuccess && (
                <>
                  <button className='AdminDeposit_btnPrintProduct'>In barcode sản phẩm</button>
                  <button className='AdminDeposit_btnPrintInvoice'>In hóa đơn khách hàng</button>
                  <button className='AdminDeposit_btnComplete' onClick={handleComplete}>Hoàn tất</button>
                </>
              )}
              {showNotSuccess && (
                <>
                  <button className='AdminDeposit_btnCancel' onClick={handleCancel}>Hủy</button>
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