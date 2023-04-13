import React,{useState} from 'react'
import './AdminStaff.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';

function AdminStaff() {
  const staffs = [
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
  },
]
const [isSorted, setIsSorted] = useState(false);
const [data,setData]= useState(staffs)
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
      <Header/>
      <div className='AdminStaff_main'>
        <div className='AdminStaff_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập nhân viên cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="AdminStaff-information">
                <tr className="AdminStaff-information-header">
                        <th>Họ và tên <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số điện thoại <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Căn cước công dân <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số giờ làm việc tháng: <span>3</span></th>
                        <th>Lương thưởng <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span> </th>
                <hr/>
                </tr>
                <div className='AdminStaff_detail_infor'>
                  {
                    data.map(data => {
                          return (
                                  <tr className='AdminStaff-information-detail'>
                                      <div className='AdminStaff-information-detail-wrapper'>
                                          <td className='team-name'>{data.name}</td>
                                          <td className='stadium-name'>{data.phone}</td>
                                          <td className=''>{data.mail}</td>
                                          <td className=''>{data.sl}</td>
                                          <td className=''>{data.madon}</td>
                                          <td className='btn_deleteStaff'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
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

export default AdminStaff