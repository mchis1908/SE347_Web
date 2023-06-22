import React,{useState, useEffect} from 'react'
import './AdminDetailAccount.css'
import Axios from "axios";
import { message } from 'antd';

function AdminDetailAccount(props) {
  const [tennv, setTenNV] = useState(props.data.TENNV)
  const [tentk, setTenTK] = useState(props.data.TENTAIKHOAN)
  const [matkhau, setMatKhau] = useState(props.data.MATKHAU)
  const handelConfirm = async ()=>{
    if (document.getElementById('tennv').value === ''
    || document.getElementById('tentk').value === ''
    || document.getElementById('matkhau').value === '') {
      // alert('Vui lòng nhập đầy đủ thông tin tài khoản')
      message.warning('Vui lòng nhập đầy đủ thông tin tài khoản')
      return
    }
    const answer= window.confirm('Bạn có chắc chắn muốn sửa thông tin tài khoản này không?')
    if(answer)
    {
      try {
        const res = await Axios.patch('http://localhost:8000/v1/taikhoan/updatetaikhoan/'+ props.data.SDT, {
            TENNV: tennv,
            TENTAIKHOAN: tentk,
            MATKHAU: matkhau,
          })
      } catch (error) {
        if (error.response && error.response.status === 500) {
            // alert('Tên tài khoản đã tồn tại. Vui lòng nhập tên tài khoản khác');
            message.error('Tên tài khoản đã tồn tại. Vui lòng nhập tên tài khoản khác')
            return
        }
      }
      // alert('Đã thay đổi thông tin khách hàng thành công')
      message.success('Đã thay đổi thông tin khách hàng thành công')
      window.location.reload();
    }
  }
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
            <input className='Input_PropAccount' id='tennv' type='text' placeholder='Tên nhân viên' value={tennv} onChange={(e)=> setTenNV(e.target.value)}></input>
            <input className='Input_PropAccount' id='tentk' type='text' placeholder='Tài khoản' value={tentk} onChange={(e)=> setTenTK(e.target.value)}></input>
            <input className='Input_PropAccount' id='matkhau' type='text' placeholder='Mật khẩu' value={matkhau} onChange={(e)=> setMatKhau(e.target.value)}></input>
          </div>
        </div>
        <div className='AdminDetailAccount_modal_Btn_Change'>
            <button className='AdminDetailAccount_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailAccount_modal_Btn_Change_Confirm' onClick={handelConfirm}>Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailAccount