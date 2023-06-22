import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './EmployeeDetailCustomer.css'

function EmployeeDetailCustomer(props) {
  const [tenkh, setTenKH] = useState(props.data.HOTEN)
  const [sdt, setSDT] = useState(props.data.SDT)
  const sdtfirst=props.data.SDT
  const [email, setEmail] = useState(props.data.EMAIL)
  const currentDate = new Date();
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const handelConfirm = async ()=>{
    if (document.getElementById('tenkh').value === ''
    || document.getElementById('sdt').value === ''
    || document.getElementById('email').value === '') {
      alert('Vui lòng nhập đầy đủ thông tin nhân viên')
      return
    }
    const answer= window.confirm('Bạn có chắc chắn muốn sửa thông tin của khách hàng này không')
    if(answer)
    {
      try {
        const res = await Axios.patch('http://localhost:8000/v1/khachhang/updatekhachhang/'+ sdtfirst, {
            HOTEN: tenkh,
            SDT: sdt,
            EMAIL: email,
            LANDENGANNHAT: currentDate.toLocaleString('en-AU', options).replaceAll('/', '-'),
          })
      } catch (error) {
        if (error.response && error.response.status === 502) {
            alert('Số điện thoại đã tồn tại. Vui lòng nhập số điện thoại khác');
            return
        }
      }
      alert('Đã thay đổi thông tin khách hàng thành công')
      window.location.reload();
    }
  }
  const handleDelete = async ()=>{
    const answer= window.confirm('Bạn có chắc chắn muốn xóa khách hàng này không?')
    if(answer)
    {
      Axios.delete('http://localhost:8000/v1/khachhang/deletekhachhang/'+ sdtfirst)
      alert('Đã xóa khách hàng thành công')
      window.location.reload();
    }
  }
  return (
    <div className="EmployeeDetailCustomer">
      <div className="EmployeeDetailCustomer_modal">
        <div className="EmployeeDetailCustomer_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="EmployeeDetailCustomer_modal-body">
          {props.children}
          <div className='EmployeeDetailCustomer_modal-body-inf_label'>
            <p className='Label_PropCustomer'>Tên khách hàng:</p>
            <p className='Label_PropCustomer'>Số điện thoại:</p>
            <p className='Label_PropCustomer'>Email:</p>
            <p className='Label_PropCustomer'>Hóa đơn gần nhất:</p>
          </div>
          <div className='EmployeeDetailCustomer_modal-body-inf_input'>
            <input className='Input_PropCustomer' id='tenkh' type='text' value={tenkh} placeholder='Nhập tên khách hàng' onChange={(e) => setTenKH(e.target.value)}/>
            <input className='Input_PropCustomer' id='sdt' type='text' value={sdt} placeholder='Nhập số điện thoại khách hàng' onChange={(e) => setSDT(e.target.value)}/>
            <input className='Input_PropCustomer' id='email' type='text' value={email} placeholder='Nhập email khách hàng' onChange={(e) => setEmail(e.target.value)}/>
            <input className='Input_PropCustomer' id='email' type='text' value={props.data.LANDENGANNHAT} placeholder='Nhập hóa đơn gần nhất' onChange={(e) => setEmail(e.target.value)} disabled/>
          </div>
        </div>
        <div className='EmployeeDetailCustomer_modal_Btn_Change'>
            <button className='EmployeeDetailCustomer_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            {/* <button className='EmployeeDetailCustomer_modal_Btn_Change_Delete' onClick={handleDelete}>Xóa khách hàng</button> */}
            <button className='EmployeeDetailCustomer_modal_Btn_Change_Confirm' onClick={handelConfirm}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetailCustomer