import React,{useState} from 'react'
import './AdminAccount.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';

function AdminAccount() {
  const accounts = [
    {
        name: 'Huỳnh Minh Chí',
        madon: '0756982',
        mail:'20521130@gmail.com',
        phone:'0376488361',
        sl: 5
    },
    {
      name: 'Huỳnh Minh Chí',
      madon: '0756982',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      sl: 5
  },{
    name: 'Huỳnh Minh Chí',
    madon: '0756982',
    mail:'20521130@gmail.com',
    phone:'0376488361',
    sl: 5
},{
        name: 'Huỳnh Minh Chí',
        madon: '0756982',
        mail:'20521130@gmail.com',
        phone:'0376488361',
        sl: 5
    },{
      name: 'Huỳnh Minh Chí',
      madon: '0756982',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      sl: 5
  },{
    name: 'Huỳnh Minh Chí',
    madon: '0756982',
    mail:'20521130@gmail.com',
    phone:'0376488361',
    sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},{
  name: 'Huỳnh Minh Chí',
  madon: '0756982',
  mail:'20521130@gmail.com',
  phone:'0376488361',
  sl: 5
},
]
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
      <Header/>
      <div className='AdminAccount_main'>
        <div className='AdminAccount_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập tài khoản cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
          <button className='AdminAccount_btn_create'>Tạo tài khoản +</button>
        </div>
          <div >
            <table className="AdminAccount-information">
                <tr className="AdminAccount-information-header">
                        <th>Tài khoản <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Mật khẩu <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Tên nhân viên <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                <hr/>
                </tr>
                <div className='AdminAccount_detail_infor'>
                  {
                    data.map(data => {
                          return (
                                  <tr className='AdminAccount-information-detail'>
                                      <div className='AdminAccount-information-detail-wrapper'>
                                          <td className='team-name'>{data.name}</td>
                                          <td className='stadium-name'>{data.phone}</td>
                                          <td className=''>{data.mail}</td>
                                          <td className='btn_deleteAccount'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                
            </table>
          </div>
      </div>
    </div>
  )
}

export default AdminAccount