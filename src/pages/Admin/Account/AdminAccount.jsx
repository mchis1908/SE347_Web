import React,{useState} from 'react'
import './AdminAccount.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import AdminDetailAccount from './ModalDetailAccount/AdminDetailAccount';

function AdminAccount(props) {
  const accounts = [
  {
      name: 'Huỳnh Minh Chí',
      account: 'chi1223',
      password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
]
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
                    data.map(data => {
                          return (
                                  <tr className='AdminAccount-information-detail' onClick={openPopup}>
                                      <div className='AdminAccount-information-detail-wrapper'>
                                          <td className='team-name'>{data.name}</td>
                                          <td className=''>{data.account}</td>
                                          <td className='stadium-name'>{data.password}</td>
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