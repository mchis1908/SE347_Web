import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './AdminAddCustomer.css'

function AdminAddCustomer(props) {
  const [tenkh, setTenKH] = useState()
  const [sdt, setSDT] = useState()
  const [email, setEmail] = useState()
  const currentDate = new Date();
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const handelConfirm = async ()=>{
    if (document.getElementById('tenkh').value === ''
    || document.getElementById('sdt').value === ''
    || document.getElementById('email').value === '') {
      alert('Vui lòng nhập đầy đủ thông tin nhân viên')
      return
    }
    const answer= window.confirm('Bạn có chắc chắn muốn thêm khách hàng này không?')
    if(answer)
    {
      try {
        const res = await Axios.post('http://localhost:8000/v1/khachhang/themkhachhang', {
            HOTEN: tenkh,
            SDT: sdt,
            EMAIL: email,
            LANDENGANNHAT: currentDate.toLocaleString('en-AU', options).replaceAll('/', '-'),
            SODONKYGUI: 0
          })
      } catch (error) {
        if (error.response && error.response.status === 502) {
            alert('Số điện thoại đã tồn tại. Vui lòng nhập số điện thoại khác');
            return
        }
      }
      alert('Đã tạo khách hàng mới thành công')
      window.location.reload();
    }
  }
  return (
    <div className="AdminAddCustomer">
      <div className="AdminAddCustomer_modal">
        <div className="AdminAddCustomer_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminAddCustomer_modal-body">
          {props.children}
          <div className='AdminAddCustomer_modal-body-inf_label'>
            <p className='Label_PropCustomer'>Tên khách hàng:</p>
            <p className='Label_PropCustomer'>Số điện thoại:</p>
            <p className='Label_PropCustomer'>Email:</p>
          </div>
          <div className='AdminAddCustomer_modal-body-inf_input'>
            <input className='Input_PropCustomer' id='tenkh' type='text' placeholder='Nhập tên khách hàng' onChange={(e) => setTenKH(e.target.value)}></input>
            <input className='Input_PropCustomer' id='sdt' type='text' placeholder='Nhập số điện thoại khách hàng' onChange={(e) => setSDT(e.target.value)}></input>
            <input className='Input_PropCustomer' id='email' type='text' placeholder='Nhập email khách hàng' onChange={(e) => setEmail(e.target.value)}></input>
          </div>
        </div>
        <div className='AdminAddCustomer_modal_Btn_Change'>
            <button className='AdminAddCustomer_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminAddCustomer_modal_Btn_Change_Confirm' onClick={handelConfirm}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminAddCustomer