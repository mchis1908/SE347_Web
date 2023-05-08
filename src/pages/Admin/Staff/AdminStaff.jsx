import React, { useState, useEffect } from 'react';
import './AdminStaff.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import Axios from "axios";
import AdminDetailStaff from './ModalDetailStaff/AdminDetailStaff';
import AdminAddStaff from './ModalAddStaff/ModalDetailStaff/AdminAddStaff';

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
  const [searchkey, setSearchKey] = useState('')

  useEffect(() => {
    if(searchkey) handleSearch(searchkey)
    else getNV();
  }, [searchkey])
  const handleSearch = async(sk) => {
    if(sk!=='')
    {
      const res = await Axios.get('http://localhost:8000/v1/nhanvien/searchnhanvien/'+ sk)
      setNhanVien(res.data);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [nhanvien, setMaNhanVien] = useState(['']);

  const openPopup1 = (nhanviens) => {
    setMaNhanVien(nhanviens);
    setIsOpen1(true);
  };
  const closePopup1 = () => {
    setIsOpen1(false);
  };
  const [isSorted, setIsSorted] = useState(false);
  const [data,setData]= useState(nhanviens)
  const [initialData,setInitialData]= useState(data)

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
      <Header title="QUẢN LÝ NHÂN VIÊN" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
      <div className='AdminStaff_main'>
        <div className='AdminStaff_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập thông tin nhân viên cần tìm' onChange={(e)=> setSearchKey(e.target.value)}/>
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
                                  <tr className='AdminStaff-information-detail' onClick={() => openPopup1(nhanviens)}>
                                      <div className='AdminStaff-information-detail-wrapper' >
                                          <td className='team-name'>{nhanviens.HOTEN}</td>
                                          <td className='stadium-name'>{nhanviens.SDT}</td>
                                          <td className=''>{nhanviens.EMAIL}</td>
                                          <td className=''>{nhanviens.LUONGCOBAN}</td>
                                          <td className=''>{nhanviens.LUONGTHEOGIO}</td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                {isOpen &&
                  <AdminAddStaff
                    title="Thông tin nhân viên"
                    onClose={closePopup}
                  >
                    {props.children}
                  </AdminAddStaff>
                }
                {isOpen1 &&
                  <AdminDetailStaff
                    title="Thông tin nhân viên"
                    onClose={closePopup1}
                    data={nhanvien}
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