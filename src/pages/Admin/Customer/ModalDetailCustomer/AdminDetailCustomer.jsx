import React from 'react'
import './AdminDetailCustomer.css'

function AdminDetailCustomer(props) {
  return (
    <div className="AdminDetailCustomer">
      <div className="AdminDetailCustomer_modal">
        <div className="AdminDetailCustomer_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminDetailCustomer_modal-body">
          {props.children}
          <div className='AdminDetailCustomer_modal-body-inf_label'>
            <p className='Label_PropCustomer'>Tên khách hàng:</p>
            <p className='Label_PropCustomer'>Số điện thoại:</p>
            <p className='Label_PropCustomer'>Email:</p>
          </div>
          <div className='AdminDetailCustomer_modal-body-inf_input'>
            <input className='Input_PropCustomer' type='text' placeholder='Nhập tên khách hàng'></input>
            <input className='Input_PropCustomer' type='text' placeholder='Nhập số điện thoại khách hàng'></input>
            <input className='Input_PropCustomer' type='text' placeholder='Nhập email khách hàng'></input>
          </div>
        </div>
        <div className='AdminDetailCustomer_modal_Btn_Change'>
            <button className='AdminDetailCustomer_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailCustomer_modal_Btn_Change_Confirm' onClick={props.onClose}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailCustomer