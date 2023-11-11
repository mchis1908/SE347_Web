import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './AdminDetailProduct.css'
import { message } from 'antd';

function AdminDetailProduct(props) {
  const [tensp, setTenSP] = useState(props.data.TENSANPHAM)
  const [gia, setGia] = useState(props.data.GIANHAN)
  const [loai, setLoai] = useState(props.data.LOAI)
  const [hinhanhsp, setHinhAnhSP] = useState(props.data.HINHANH)
  const [showImage, setShowImage] = useState(false)
  const [selectedFile, setSelectedFile] = useState([])
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
    message.error('Vui lòng nhập đầy đủ thông tin sản phẩm')
    return
    }
    const fd = new FormData()
    fd.append('TENSANPHAM', tensp)
    fd.append('LOAI', loai)
    fd.append('GIANHAN', gia)
    fd.append('HINHANH', hinhanhsp)
    Axios.patch('http://localhost:8000/v1/sanpham/updatesanpham/'+ props.data.MASANPHAM, fd)
    message.success('Thay đổi thông tin sản phẩm thành công')
    window.location.reload()
  }
  return (
    <div className="AdminDetailProduct">
      <div className="AdminDetailProduct_modal">
        <div className="AdminDetailProduct_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminDetailProduct_modal-body">
          {props.children}
          <div className='d-flex flex-column'>
            <div className='d-flex flex-row gap-2'>
              <p className='Label_PropProduct'>Mã hóa đơn ký gửi:</p>
              <input className='Input_PropProduct' id='mahdkg'  type='text' value={props.data.MAHOADONKG} disabled/>  
            </div>
            <div className='d-flex flex-row gap-2'>
              <p className='Label_PropProduct'>Mã hóa đơn bán hàng:</p>
              <input className='Input_PropProduct' id='mahdbh' type='text' value={props.data.MAHOADONBH} disabled/>  
            </div>
            <div className='d-flex flex-row gap-2'>
              <p className='Label_PropProduct'>Mã sản phẩm:</p>
              <input className='Input_PropProduct' id='masp' type='text' value={props.data.MASANPHAM} disabled/>  
            </div>
            <div className='d-flex flex-row gap-2'>
              <p className='Label_PropProduct'>Tên sản phẩm:</p>
              <input className='Input_PropProduct' id='tensp' type='text' value={tensp} placeholder='Nhập tên sản phẩm' onChange={(e) => setTenSP(e.target.value)} disabled={props.db}/>
            </div>
            <div className='d-flex flex-row gap-2'>
              <p className='Label_PropProduct'>Loại sản phẩm:</p>
              <select className='Input_PropDeposit' style={{height:'30px', width:'20vw', borderWidth:'2px'}} id='loaisanpham' disabled={props.db}
                placeholder='Chọn loại sản phẩm' value={loai} onChange={(e) => setLoai(e.target.value)}>
                <optgroup label="Áo">
                  <option value="Áo thun">Áo thun</option>
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
              <p className='Label_PropProduct'>Giá sản phẩm:</p>
              <input className='Input_PropProduct' id='gia' type='text' value={gia} placeholder='Nhập giá sản phẩm' onChange={(e) => setGia(e.target.value)} disabled={props.db}/>
            </div>
          </div>
          <div className='AdminDetailDeposit_modal-body-inf_image'>
            <div className='add_logo_clb'>
              {showImage ? selectedFile.map((imageURL) => {
                return <img style={{width: '13vw', height: '20vh', borderRadius: '5px'}}
                  src={imageURL} alt='' />
              }) : <img style={{width: '13vw', height: '20vh', backgroundColor:'#152737', borderRadius: '5px', 'objectFit':'cover', 'objectFit':'cover'}}
                src={'http://localhost:8000/'+hinhanhsp} alt='' />
              }
              <label className='AdminDetailDeposit_modal_Btn_AddImg'>
                Thêm hình ảnh+
                <input
                  style={{display: 'none'}}
                  type='file'
                  accept='image/png , image/jpg'
                  onChange={(e) => onSelectedFile(e)}
                  disabled
                />
              </label>
            </div>
          </div>
        </div>
        <div className='AdminDetailProduct_modal_Btn_Change'>
            <button className='AdminDetailProduct_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailProduct_modal_Btn_Change_Confirm' onClick={submitHandler} style={{display: props.db ? 'none' : 'block'}}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailProduct