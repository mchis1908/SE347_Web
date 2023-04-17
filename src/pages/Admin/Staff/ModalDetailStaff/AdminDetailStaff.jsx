import React from 'react'
import './AdminDetailStaff.css'

function AdminDetailStaff(props) {
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
            <p className='Label_PropStaff'>Tài khoản:</p>
            <p className='Label_PropStaff'>Mật khẩu:</p>
          </div>
          <div className='AdminDetailStaff_modal-body-inf_input'>
            <input className='Input_PropStaff' type='text' placeholder='Nhập tên nhân viên'></input>
            <input className='Input_PropStaff' type='text' placeholder='Nhập số điện thoại nhân viên'></input>
            <input className='Input_PropStaff' type='text' placeholder='Nhập số email nhân viên'></input>
            <input className='Input_PropStaff' type='text' placeholder='Nhập lương cơ bản'></input>
            <input className='Input_PropStaff' type='text' placeholder='Nhập lương theo giờ'></input>
            <input className='Input_PropStaff' type='text' placeholder='Nhập tài khoản'></input>
            <input className='Input_PropStaff' type='text' placeholder='Nhập mật khẩu'></input>
          </div>
        </div>
        <div className='AdminDetailStaff_modal_Btn_Change'>
            <button className='AdminDetailStaff_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailStaff_modal_Btn_Change_Confirm' onClick={props.onClose}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailStaff