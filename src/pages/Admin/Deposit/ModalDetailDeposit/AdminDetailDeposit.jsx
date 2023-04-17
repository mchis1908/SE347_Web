import React, { useState } from 'react';
import image from './Group 8.png'
import './AdminDetailDeposit.css'
import Axios from "axios";

function AdminDetailDeposit(props) {
  const [showImage, setShowImage] = useState(false)
  const [selectedFile, setSelectedFile] = useState([])
  const [tensp, setTenSanPham] = useState()
  const [khachhang, setKhachHang] = useState()
  const [mahoadon, setMaHoaDon] = useState('001d30009ff71de813521e7b')
  const [loai, setLoai] = useState()
  const [trangthai, setTrangThai] = useState('Chưa bán')
  const [gia, setGia] = useState()
  const [hinhanhsp, setHinhAnhSP] = useState()

  const onSelectedFile = (e) => {
  const selectedFiles = e.target.files;
  const selectedFileArrays = Array.from(selectedFiles);
  const imageURL = selectedFileArrays.map((file) => {
    return URL.createObjectURL(file)
  })
  setShowImage(true)
  setSelectedFile(imageURL)
  setHinhAnhSP(e.target.files[0])
  console.log('anh',hinhanhsp)
  }
  const submitHandler = ()=>{

    const fd = new FormData()
    fd.append('TENSANPHAM', tensp)
    fd.append('SDTKHACHHANG', khachhang)
    fd.append('MAHOADON', mahoadon)
    fd.append('LOAI', loai)
    fd.append('TRANGTHAI', trangthai)
    fd.append('GIA', gia)
    fd.append('HINHANH', hinhanhsp)
    Axios.post('http://localhost:8000/v1/sanpham/themsanpham', fd)
    console.log('test',fd)
    window.location.reload()
    // props.onClose()
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
          <div className='AdminDetailDeposit_modal-body-inf_label'>
            <p className='Label_PropDeposit'>Tên sản phẩm:</p>
            <p className='Label_PropDeposit'>Loại sản phẩm:</p>
            <p className='Label_PropDeposit'>Giá sản phẩm:</p>
          </div>
          <div className='AdminDetailDeposit_modal-body-inf_input'>
            <input className='Input_PropDeposit' type='text' placeholder='Nhập tên sản phẩm' onChange={(e) => setTenSanPham(e.target.value)}></input>
            <input className='Input_PropDeposit' type='text' placeholder='Chọn loại sản phẩm' onChange={(e) => setLoai(e.target.value)}></input>
            <input className='Input_PropDeposit' type='number' placeholder='Nhập giá sản phẩm' onChange={(e) => setGia(e.target.value)}></input>
          </div>
          <div className='AdminDetailDeposit_modal-body-inf_image'>
            <div className='add_logo_clb'>
              {showImage ? selectedFile.map((imageURL) => {
                return <img style={{width: '13vw', height: '20vh', borderRadius: '5px'}}
                  src={imageURL} alt='' />
              }) : <img style={{width: '13vw', height: '20vh', backgroundColor:'#152737', borderRadius: '5px'}}
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
            <button className='AdminDetailDeposit_modal_Btn_Change_Confirm' onClick={submitHandler}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailDeposit