import React, { useState, useEffect } from 'react';
import image from './Group 8.png'
import './AdminDetailDeposit.css'
import Axios from "axios";
import cryptoRandomString from 'crypto-random-string';
import {message } from 'antd';

function AdminDetailDeposit(props) {
  const [showImage, setShowImage] = useState(false)
  const [selectedFile, setSelectedFile] = useState([])
  const [masp, setMaSanPham] = useState()
  const [tensp, setTenSanPham] = useState(props.data && props.data.TENSANPHAM ? props.data.TENSANPHAM : '')
  const [mahoadon, setMaHoaDon] = useState('001d30009ff71de813521e7b')
  const [loai, setLoai] = useState(props.data && props.data.LOAI ? props.data.LOAI : 'Áo thun')
  const [trangthai, setTrangThai] = useState('Chưa bán')
  const [gianhan, setGiaNhan] = useState(props.data && props.data.GIANHAN ? props.data.GIANHAN : '')
  const [hinhanhsp, setHinhAnhSP] = useState(props.data && props.data.HINHANH ? props.data.HINHANH : '')

  const onSelectedFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFileArrays = Array.from(selectedFiles);
    const imageURL = selectedFileArrays.map((file) => {
      return URL.createObjectURL(file)
    })
    setShowImage(true)
    setSelectedFile(imageURL)
    setHinhAnhSP(e.target.files[0])
  }
  const submitHandler = ()=>{
    if (document.getElementById('tensanpham').value === ''
    || document.getElementById('loaisanpham').value === ''
    || document.getElementById('giasanpham').value === '') {
      // alert('Vui lòng nhập đầy đủ thông tin sản phẩm')
      message.warning('Vui lòng nhập đầy đủ thông tin sản phẩm')
      return
    }
    const tienkhachnhan =0;
    const fd = new FormData()
    fd.append('MASANPHAM', cryptoRandomString({ length: 16 }))
    fd.append('TENSANPHAM', tensp)
    fd.append('MAHOADONKG', mahoadon)
    fd.append('MAHOADONBH', trangthai)
    fd.append('LOAI', loai)
    fd.append('TRANGTHAI', trangthai)
    fd.append('GIANHAN', gianhan)
    fd.append('TIENKHACHNHAN', tienkhachnhan)
    fd.append('HOAHONG', tienkhachnhan)
    fd.append('HINHANH', hinhanhsp)
    if(props.data){
      Axios.patch('http://localhost:8000/v1/sanpham/updatesanpham/'+ props.data.MASANPHAM, {
      TENSANPHAM: tensp,
      LOAI: loai,
      GIANHAN: gianhan,
      HINHANH: hinhanhsp
    })
    } 
    else Axios.post('http://localhost:8000/v1/sanpham/themsanpham', fd)
    window.location.reload()
  }
  const handleDelete = ()=>{
    const answer= window.confirm('Bạn có chắc chắn xóa sản phẩm này khỏi hóa đơn ký gửi')
    if(answer)
    {
      Axios.delete('http://localhost:8000/v1/sanpham/deletesanphambymasp/'+props.data.MASANPHAM)
    }
    window.location.reload()
  }
  return (
    <div className="AdminDetailDeposit">
      <div className="AdminDetailDeposit_modal">
        <div className="AdminDetailDeposit_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminDetailDeposit_modal-body">
          {props.children}
          <div className='d-flex flex-column gap-2 m-2'>
            <div className='d-flex flex-row gap-2'>
              <p className='Label_PropDeposit'>Tên sản phẩm:</p>
              <input className='Input_PropDeposit' id='tensanpham' type='text' placeholder='Nhập tên sản phẩm' value={tensp} onChange={(e) => setTenSanPham(e.target.value)}></input>
            </div> 
            <div className='d-flex flex-row gap-2'>
              <p className='Label_PropDeposit'>Loại sản phẩm:</p>
              <select className='Input_PropDeposit' style={{height:'30px', width:'20vw', borderWidth:'2px'}} id='loaisanpham' 
                placeholder='Chọn loại sản phẩm' value={loai} onChange={(e) => setLoai(e.target.value)}>
                <optgroup label="Áo">
                  <option value="Áo thun" selected>Áo thun</option>
                  <option value="Áo sơ mi">Áo sơ mi</option>
                </optgroup>
                <optgroup label="Áo khoác">
                  <option value="Hoodie">Hoodie</option>
                  <option value="sJacketp2">Jacket</option>
                </optgroup>
                <optgroup label="Quần">
                  <option value="Quần jean">Quần jean</option>
                  <option value="Quần short">Quần short</option>
                  <option value="Quần tây">Quần tây</option>
                  <option value="Quần ống loe">Quần ống loe</option>
                </optgroup>
                <optgroup label="Váy">
                  <option value="Chân váy">Chân váy</option>
                  <option value="Đầm">Đầm</option>
                </optgroup>
              </select>
            </div> 
            <div className='d-flex flex-row gap-2'>
              <p className='Label_PropDeposit'>Giá sản phẩm:</p>
              <input className='Input_PropDeposit' id='giasanpham' type='text' placeholder='Nhập giá sản phẩm' value={gianhan} onChange={(e) => setGiaNhan(e.target.value)}></input>
            </div>
          </div>
          <div className='AdminDetailDeposit_modal-body-inf_image'>
            <div className='add_logo_clb'>
              {showImage ? selectedFile.map((imageURL) => {
                return <img style={{width: '13vw', height: '20vh', borderRadius: '5px', 'objectFit':'cover'}}
                  src={imageURL} alt='' />
              }) : <img style={{width: '13vw', height: '20vh', backgroundColor:'#152737', borderRadius: '5px', 'objectFit':'cover'}}
                src={image} alt='' />
              }
              <label className='AdminDetailDeposit_modal_Btn_AddImg'>
                Thêm hình ảnh+
                <input
                  style={{display: 'none'}}
                  type='file'
                  accept='image/png , image/jpg'
                  onChange={(e) => onSelectedFile(e)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className='AdminDetailDeposit_modal_Btn_Change'>
            <button className='AdminDetailDeposit_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailDeposit_modal_Btn_Change_Delete' style={{ display: props.data ? 'block' : 'none' }} onClick={handleDelete}>Xóa sản phẩm</button>
            <button className='AdminDetailDeposit_modal_Btn_Change_Confirm' onClick={submitHandler}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailDeposit