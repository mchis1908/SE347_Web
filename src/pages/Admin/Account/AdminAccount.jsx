import React, { useState, useEffect } from 'react';
import './AdminAccount.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import AdminDetailAccount from './ModalDetailAccount/AdminDetailAccount';
import Axios from "axios";

function AdminAccount(props) {
  let [accounts, setTaiKhoan] = useState([])
  const getTK = async () => {
      try {
          const res = await Axios.get('http://localhost:8000/v1/taikhoan/gettaikhoan')
          setTaiKhoan(res.data);
          accounts=res.data;
      }
      catch (error) {
          console.log(error.message)
      }
  }
  useEffect(() => {
    getTK();
  }, [])
const [isOpen, setIsOpen] = useState(false);

const openPopup = () => {
  setIsOpen(true);
};

const closePopup = () => {
  setIsOpen(false);
};
const [isSorted, setIsSorted] = useState(false);
const [data,setData]= useState(accounts)
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
    <div className='AdminAccount'>
      <Menu/>
      <Header title="QUẢN LÝ TÀI KHOẢN" avt='http://surl.li/ggptd' name='Huỳnh Minh Chí'/>
      <div className='AdminAccount_main'>
        <div className='AdminAccount_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập tài khoản cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="AdminAccount-information">
                <tr className="AdminAccount-information-header">
                        <th>Tên nhân viên <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Tài khoản <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Mật khẩu <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                <hr/>
                </tr>
                <div className='AdminAccount_detail_infor'>
                  {
                    accounts.map(accounts => {
                      if(accounts.PHANQUYEN=== 'employee')
                          return (
                                  <tr className='AdminAccount-information-detail' onClick={openPopup}>
                                      <div className='AdminAccount-information-detail-wrapper'>
                                          <td className='stadium-name'>{accounts.TENNV}</td>
                                          <td className='team-name'>{accounts.TENTAIKHOAN}</td>
                                          <td className=''>{accounts.MATKHAU}</td>
                                          <td className='btn_deleteAccount'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                {isOpen &&
                  <AdminDetailAccount
                    title="Thông tin tài khoản"
                    onClose={closePopup}
                  >
                    {props.children}
                  </AdminDetailAccount>
                }
            </table>
          </div>
      </div>
    </div>
  )
}

export default AdminAccount