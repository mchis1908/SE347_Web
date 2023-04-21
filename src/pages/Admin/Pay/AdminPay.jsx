import React, { useState, useEffect } from 'react';
import "./AdminPay.css"
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import cryptoRandomString from 'crypto-random-string';
import {Autocomplete}  from "@mui/material";
import TextField from "@mui/material/TextField";
import Axios from "axios";

function AdminPay(props) {
const [khachhang, setSDTKhachHang] = useState()
const [loaihoadon, setLoaiHoaDon] = useState('Bán hàng')
const [trangthaiHD, setTrangThaiHD] = useState('Đã thanh toán')
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

useEffect(() => {
  getKH();
}, [])

let [sanphams, setSanPham] = useState([])

const currentDate = new Date();
const handleConfirm = () => {
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
    Axios.post('http://localhost:8000/v1/hoadon/themhoadon', 
    {
      MAHOADON: randommahoadon,
      SDT: khachhang,
      SOLUONG: sanphams.length,
      LOAI: loaihoadon,
      TRANGTHAI: trangthaiHD,
      NGAYTAODON: currentDate.toLocaleString()
    })
    sanphams.map(sanphams =>{
      const idproduct= sanphams.MASANPHAM;
      Axios.patch('http://localhost:8000/v1/sanpham/updatesanpham/'+idproduct, 
      {
        TRANGTHAI: 'Đã Bán'
      })
    })
    window.alert('Hóa đơn đã được tạo thành công')
  }
  
};
const calculateTotal = () => {
  let total =0;
  for(let i = 0; i < sanphams.length; i++) {
    total+=sanphams[i].GIA;
  }
  return total;
  
};
const [searchkey, setSearchKey] = useState()
const handleSearch = () => {
  if (document.getElementById('searchkey').length === 0) {
      alert('Vui lòng nhập mã sản phẩm')
      return
  }
  Axios.get('http://localhost:8000/v1/sanpham/getsanpham/'+searchkey)
  .then(function (response) {
    const sanphammoi = response.data;
    if(sanphammoi.length === 0) {
      alert('Không có sản phẩm này')
      return
    }
    else{
      setSanPham([...sanphams, sanphammoi]);
      setSearchKey('');
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  
};

  return (
    <div className='AdminPay'>
      <Menu/>
      <Header title="THANH TOÁN" avt='http://surl.li/ggptd' name='Huỳnh Minh Chí'/>
      <div className='AdminPay_main'>
        <div className="AdminPay_Top">
          <input className='AdminPay_ProductInf_Input' id='searchkey' value={searchkey} placeholder='Nhập mã sản phẩm' onChange={(e)=> setSearchKey(e.target.value)}></input>
          <Icon className='AdminPay_ProductInf_SearchBtn' icon="ic:baseline-search" onClick={(e) => {handleSearch()}}/>
        </div>
        <div className="AdminPay_Bottom">
        <div className='AdminPay_Content'>
          <div className='AdminPay_Detail'>
            <div className='AdminPay_CustomerInf'>
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
              <div className='AdminPay_ProductInf'>
                <td></td>                    
                <td>STT</td>
                <td>Tên sản phẩm</td>
                <td>Loại</td>
                <td>Hình ảnh</td>
                <td>Giá</td>
                <td className='btn_deleteProduct'></td>
              </div>
            <div className='AdminPay_ProductList'>
              {
                sanphams.map((sanphams,index) => {
                    return (
                      <div className='AdminPay_ProductInf'>
                        <td></td>                    
                        <td>{index+1}</td>
                        <td>{sanphams.TENSANPHAM}</td>
                        <td>{sanphams.LOAI}</td>
                        <td><img style={{width:'50px', height:'40px'}} src={"http://localhost:8000/"+sanphams.HINHANH}/></td>
                        <td>{sanphams.GIA}</td>
                        <td className='btn_deleteProduct'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                      </div>
                    )
                })
              }
            </div>
            <hr/>
            <div className='AdminPay_ProductInf'>
              <td>Số lượng:</td>               
              <td>{sanphams.length}</td>                    
              <td></td>                    
              <td></td>
              <td>Tổng tiền: </td>
              <td>{calculateTotal()}</td>
            </div>
            <div className='AdminPay_btnChange'>
              <button className='AdminPay_btnConfirm' onClick={handleConfirm}>Xác nhận tạo hóa đơn</button>
            </div>
            
          </div> 
        </div>
        {/* -------------------------------------------------------------- */}
        
      </div>
      </div>
    </div>
  )
}

export default AdminPay