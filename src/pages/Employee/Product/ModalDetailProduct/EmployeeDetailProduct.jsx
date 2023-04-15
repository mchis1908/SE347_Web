import React from 'react'
import './EmployeeDetailProduct.css'

function EmployeeDetailProduct(props) {
  return (
    <div className="EmployeeDetailProduct">
      <div className="EmployeeDetailProduct_modal">
        <div className="EmployeeDetailProduct_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="EmployeeDetailProduct_modal-body">
          {props.children}
          <div className='EmployeeDetailProduct_modal-body-inf_label'>
            <p className='Label_PropProduct'>Tên sản phẩm</p>
            <p className='Label_PropProduct'>Loại sản phẩm</p>
            <p className='Label_PropProduct'>Giá sản phẩm</p>
          </div>
          <div className='EmployeeDetailProduct_modal-body-inf_input'>
            <input className='Input_PropProduct' type='text' placeholder='Nhập tên sản phẩm'></input>
            <input className='Input_PropProduct' type='text' placeholder='Chọn loại sản phẩm'></input>
            <input className='Input_PropProduct' type='text' placeholder='Nhập giá sản phẩm'></input>
          </div>
          <div className='EmployeeDetailProduct_modal-body-inf_image'>
            <img src="http://surl.li/ggptd" alt="description of image" style={{width: '13vw', height: '20vh'}}/>
            <button className='EmployeeDetailProduct_modal_Btn_AddImg'>Thêm hình ảnh +</button>
          </div>
        </div>
        <div className='EmployeeDetailProduct_modal_Btn_Change'>
            <button className='EmployeeDetailProduct_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='EmployeeDetailProduct_modal_Btn_Change_Confirm' onClick={props.onClose}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetailProduct