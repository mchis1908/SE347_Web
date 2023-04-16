import React from 'react'
import './AdminDetailAccount.css'

function AdminDetailAccount(props) {
  return (
    <div className="AdminDetailAccount">
      <div className="AdminDetailAccount_modal">
        <div className="AdminDetailAccount_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminDetailAccount_modal-body">
          {props.children}
          <div className='AdminDetailAccount_modal-body-inf_label'>
            <p className='Label_PropAccount'>Tên nhân viên:</p>
            <p className='Label_PropAccount'>Tài khoản:</p>
            <p className='Label_PropAccount'>Mật khẩu:</p>
          </div>
          <div className='AdminDetailAccount_modal-body-inf_input'>
            <input className='Input_PropAccount' type='text' placeholder='Tên nhân viên'></input>
            <input className='Input_PropAccount' type='text' placeholder='Tài khoản'></input>
            <input className='Input_PropAccount' type='text' placeholder='Mật khẩu'></input>
          </div>
        </div>
        <div className='AdminDetailAccount_modal_Btn_Change'>
            <button className='AdminDetailAccount_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailAccount_modal_Btn_Change_Confirm' onClick={props.onClose}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailAccount