import React, { useState, useEffect } from 'react';
import './AdminStaff.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import Axios from "axios";
import AdminDetailStaff from './ModalDetailStaff/AdminDetailStaff';

function AdminStaff(props) {
  let [nhanviens, setNhanVien] = useState([])
  const getNV = async () => {
      try {
          const res = await Axios.get('http://localhost:8000/v1/nhanvien/getnhanvien')
          setNhanVien(res.data);
          nhanviens=res.data;
      }
      catch (error) {
          console.log(error.message)
      }
  }
  useEffect(() => {
    getNV();
  }, [])
const [isOpen, setIsOpen] = useState(false);

const openPopup = () => {
  setIsOpen(true);
};

const closePopup = () => {
  setIsOpen(false);
};
const [isSorted, setIsSorted] = useState(false);
const [data,setData]= useState(nhanviens)
const [initialData,setInitialData]= useState(data)
console.log('data',data)

const sortByName = () => {
  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
  setData(sortedData);
  setIsSorted(true);
};
const resetData = () => {
  setData(initialData);
  setIsSorted(false);
};
const handleClick = () => {
  if (isSorted) {
    resetData();
  } else {
    sortByName();
  }
};
  return (
    <div className='AdminStaff'>
      <Menu/>
      <Header title="QUẢN LÝ NHÂN VIÊN" avt='http://surl.li/ggptd' name='Huỳnh Minh Chí'/>
      <div className='AdminStaff_main'>
        <div className='AdminStaff_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập nhân viên cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
          <button className='AdminStaff_btn_create' onClick={openPopup}>Thêm nhân viên +</button>
        </div>
          <div >
            <table className="AdminStaff-information">
                <tr className="AdminStaff-information-header">
                        <th>Họ và tên <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số điện thoại <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Email <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span> </th>
                        <th>Lương cơ bản <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Lương theo giờ</th>
                <hr/>
                </tr>
                <div className='AdminStaff_detail_infor'>
                  {
                    nhanviens.map(nhanviens => {
                          return (
                                  <tr className='AdminStaff-information-detail' onClick={openPopup}>
                                      <div className='AdminStaff-information-detail-wrapper' >
                                          <td className='team-name'>{nhanviens.HOTEN}</td>
                                          <td className='stadium-name'>{nhanviens.SDT}</td>
                                          <td className=''>{nhanviens.EMAIL}</td>
                                          <td className=''>{nhanviens.LUONGCOBAN}</td>
                                          <td className=''>{nhanviens.LUONGTHEOGIO}</td>
                                          <td className='btn_deleteStaff'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                {isOpen &&
                  <AdminDetailStaff
                    title="Thông tin nhân viên"
                    onClose={closePopup}
                  >
                    {props.children}
                  </AdminDetailStaff>
                }
            </table>
          </div>
      </div>
    </div>
  )
}

export default AdminStaff