import React from 'react'
import './AdminDetailProduct.css'

function AdminDetailProduct(props) {
  return (
    <div className="AdminDetailProduct">
      <div className="AdminDetailProduct_modal">
        <div className="AdminDetailProduct_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminDetailProduct_modal-body">
          {props.children}
          <div className='AdminDetailProduct_modal-body-inf_label'>
            <p className='Label_PropProduct'>Tên sản phẩm</p>
            <p className='Label_PropProduct'>Loại sản phẩm</p>
            <p className='Label_PropProduct'>Giá sản phẩm</p>
          </div>
          <div className='AdminDetailProduct_modal-body-inf_input'>
            <input className='Input_PropProduct' type='text' placeholder='Nhập tên sản phẩm'></input>
            <input className='Input_PropProduct' type='text' placeholder='Chọn Loại sản phẩm'></input>
            <input className='Input_PropProduct' type='text' placeholder='Nhập giá sản phẩm'></input>
          </div>
          <div className='AdminDetailProduct_modal-body-inf_image'>
            <img src="http://surl.li/ggptd" alt="description of image" style={{width: '13vw', height: '20vh'}}/>
            <button className='AdminDetailProduct_modal_Btn_AddImg'>Thêm hình ảnh +</button>
          </div>
        </div>
        <div className='AdminDetailProduct_modal_Btn_Change'>
            <button className='AdminDetailProduct_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailProduct_modal_Btn_Change_Delete' onClick={props.onClose}>Xóa sản phẩm</button>
            <button className='AdminDetailProduct_modal_Btn_Change_Confirm' onClick={props.onClose}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailProduct