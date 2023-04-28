import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './AdminAddStaff.css'

function AdminAddStaff(props) {
  const [tennv, setTenNV] = useState()
  const [sdtnv, setSDTNV] = useState()
  const [emailnv, setEmailNV] = useState()
  const [luongcb, setLuongCB] = useState()
  const [luongtheogio, setLuongTheoGio] = useState()
  const [taikhoan, setTaiKhoan] = useState()
  const [matkhau, setMatKhau] = useState()
  const [phanquyen, setPhanQuyen] = useState('employee')
  const handelConfirm = async ()=>{
    if (document.getElementById('tennv').value === ''
    || document.getElementById('sdtnv').value === ''
    || document.getElementById('emailnv').value === ''
    || document.getElementById('luongcb').value === ''
    || document.getElementById('luongtheogio').value === ''
    || document.getElementById('taikhoan').value === ''
    || document.getElementById('matkhau').value === '') {
      alert('Vui lòng nhập đầy đủ thông tin nhân viên')
      return
    }
    const answer= window.confirm('Bạn có chắc chắn thêm nhân viên này không')
    if(answer)
    {
      try {
        const responseArr = await Promise.all([
          Axios.post('http://localhost:8000/v1/nhanvien/themnhanvien', {
            HOTEN: tennv,
            SDT: sdtnv,
            EMAIL: emailnv,
            LUONGCOBAN: luongcb,
            LUONGTHEOGIO: luongtheogio
          }),
          Axios.post('http://localhost:8000/v1/taikhoan/dangky', {
            TENTAIKHOAN: taikhoan,
            MATKHAU: matkhau,
            PHANQUYEN: phanquyen,
            TENNV: tennv,
            SDT: sdtnv
          })
        ]);
      
        const response1 = responseArr[0];
        const response2 = responseArr[1];
      
        if (response1.status === 200 && response2.status === 200) {
          alert('Tạo nhân viên và tài khoản thành công')
          window.location.reload()
        } else {
          alert('Đã xảy ra lỗi khi thêm nhân viên');
          return
        }
      } catch (error) {
        if (error.response && error.response.status === 502) {
            Axios.delete('http://localhost:8000/v1/taikhoan/deletetaikhoan/'+ sdtnv)
            alert('Số điện thoại đã tồn tại. Vui lòng nhập số điện thoại khác');
        } else if (error.response && error.response.status === 501) {
            Axios.delete('http://localhost:8000/v1/nhanvien/deletenhanvien/'+ sdtnv)
            alert('Tên tài khoản đã tồn tại. Vui lòng nhập tên khác');
        } else {
          alert('Đã xảy ra lỗi khi thêm nhân viên');
        }
      }
    }
  }
  return (
    <div className="AdminAddStaff">
      <div className="AdminAddStaff_modal">
        <div className="AdminAddStaff_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminAddStaff_modal-body">
          {props.children}
          <div className='AdminAddStaff_modal-body-inf_label'>
            <p className='Label_PropStaff'>Tên nhân viên:</p>
            <p className='Label_PropStaff'>Số điện thoại:</p>
            <p className='Label_PropStaff'>Email:</p>
            <p className='Label_PropStaff'>Lương cơ bản:</p>
            <p className='Label_PropStaff'>Lương theo giờ:</p>
            <p className='Label_PropStaff'>Tài khoản:</p>
            <p className='Label_PropStaff'>Mật khẩu:</p>
          </div>
          <div className='AdminAddStaff_modal-body-inf_input'>
            <input className='Input_PropStaff' id='tennv' type='text' placeholder='Nhập tên nhân viên' onChange={(e) => setTenNV(e.target.value)}></input>
            <input className='Input_PropStaff' id='sdtnv' type='text' placeholder='Nhập số điện thoại nhân viên' onChange={(e) => setSDTNV(e.target.value)}></input>
            <input className='Input_PropStaff' id='emailnv' type='text' placeholder='Nhập số email nhân viên' onChange={(e) => setEmailNV(e.target.value)}></input>
            <input className='Input_PropStaff' id='luongcb' type='number' placeholder='Nhập lương cơ bản' onChange={(e) => setLuongCB(e.target.value)}></input>
            <input className='Input_PropStaff' id='luongtheogio' type='number' placeholder='Nhập lương theo giờ' onChange={(e) => setLuongTheoGio(e.target.value)}></input>
            <input className='Input_PropStaff' id='taikhoan' type='text' placeholder='Nhập tài khoản' onChange={(e) => setTaiKhoan(e.target.value)}></input>
            <input className='Input_PropStaff' id='matkhau' type='text' placeholder='Nhập mật khẩu' onChange={(e) => setMatKhau(e.target.value)}></input>
          </div>
        </div>
        <div className='AdminAddStaff_modal_Btn_Change'>
            <button className='AdminAddStaff_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminAddStaff_modal_Btn_Change_Confirm' onClick={handelConfirm}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminAddStaff