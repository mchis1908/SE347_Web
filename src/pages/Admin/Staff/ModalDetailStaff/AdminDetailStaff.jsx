import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './AdminDetailStaff.css'

function AdminDetailStaff(props) {
  const [tennv, setTenNV] = useState(props.data.HOTEN)
  const [sdtnv, setSDTNV] = useState(props.data.SDT)
  const sdtfirst=props.data.SDT
  const [emailnv, setEmailNV] = useState(props.data.EMAIL)
  const [luongcb, setLuongCB] = useState(props.data.LUONGCOBAN)
  const [luongtheogio, setLuongTheoGio] = useState(props.data.LUONGTHEOGIO)
  const handelConfirm = async ()=>{
    if (document.getElementById('tennv').value === ''
    || document.getElementById('sdtnv').value === ''
    || document.getElementById('emailnv').value === ''
    || document.getElementById('luongcb').value === ''
    || document.getElementById('luongtheogio').value === '') {
      alert('Vui lòng nhập đầy đủ thông tin nhân viên')
      return
    }
    const answer= window.confirm('Bạn có chắc chắn muốn sửa thông tin của nhân viên này không')
    if(answer)
    {
      try {
        
        const res = await Axios.patch('http://localhost:8000/v1/nhanvien/updatenhanvien/' + sdtfirst, {
          HOTEN: tennv,
          SDT: sdtnv,
          EMAIL: emailnv,
          LUONGCOBAN: luongcb,
          LUONGTHEOGIO: luongtheogio
        })
      } catch (error) {
        if (error.response && error.response.status === 502) {
            alert('Số điện thoại đã tồn tại. Vui lòng nhập số điện thoại khác');
            return
        } 
      }
      alert('Đã thay đổi thông tin nhân viên thành công')
      window.location.reload();
    }
  }
  return (
    <div className="AdminDetailStaff">
      <div className="AdminDetailStaff_modal">
        <div className="AdminDetailStaff_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminDetailStaff_modal-body">
          {props.children}
          <div className='AdminDetailStaff_modal-body-inf_label'>
            <p className='Label_PropStaff'>Tên nhân viên:</p>
            <p className='Label_PropStaff'>Số điện thoại:</p>
            <p className='Label_PropStaff'>Email:</p>
            <p className='Label_PropStaff'>Lương cơ bản:</p>
            <p className='Label_PropStaff'>Lương theo giờ:</p>
          </div>
          <div className='AdminDetailStaff_modal-body-inf_input'>
            <input className='Input_PropStaff' id='tennv' type='text' value={tennv} placeholder='Nhập tên nhân viên' onChange={(e) => setTenNV(e.target.value)}/>
            <input className='Input_PropStaff' id='sdtnv' type='text' value={sdtnv} placeholder='Nhập số điện thoại nhân viên' onChange={(e) => setSDTNV(e.target.value)}/>
            <input className='Input_PropStaff' id='emailnv' type='text' value={emailnv} placeholder='Nhập số email nhân viên' onChange={(e) => setEmailNV(e.target.value)}/>
            <input className='Input_PropStaff' id='luongcb' type='number' value={luongcb} placeholder='Nhập lương cơ bản' onChange={(e) => setLuongCB(e.target.value)}/>
            <input className='Input_PropStaff' id='luongtheogio' type='number' value={luongtheogio} placeholder='Nhập lương theo giờ' onChange={(e) => setLuongTheoGio(e.target.value)}/>
          </div>
        </div>
        <div className='AdminDetailStaff_modal_Btn_Change'>
            <button className='AdminDetailStaff_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailStaff_modal_Btn_Change_Confirm' onClick={handelConfirm}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailStaff