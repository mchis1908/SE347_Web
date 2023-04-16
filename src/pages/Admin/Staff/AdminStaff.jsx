import React,{useState} from 'react'
import './AdminStaff.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import AdminDetailStaff from './ModalDetailStaff/AdminDetailStaff';

function AdminStaff(props) {
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
const [isOpen, setIsOpen] = useState(false);

const openPopup = () => {
  setIsOpen(true);
};

const closePopup = () => {
  setIsOpen(false);
};
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
                        <th>Lương cơ bản <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span> </th>
                        <th>Lương theo giờ <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số giờ làm việc tháng: <span>3</span></th>
                <hr/>
                </tr>
                <div className='AdminStaff_detail_infor'>
                  {
                    data.map(data => {
                          return (
                                  <tr className='AdminStaff-information-detail' onClick={openPopup}>
                                      <div className='AdminStaff-information-detail-wrapper' >
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