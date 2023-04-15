import React,{useState} from 'react'
import './EmployeeCustomer.css'
import ReactTable from 'react-table';
// import 'react-table/react-table.css';
import Menu from "../Menu/EmployeeMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import EmployeeDetailCustomer from './ModalDetailCustomer/EmployeeDetailCustomer';

function EmployeeCustomer(props) {
  const customers = [
    {
      name: 'Yaaaaaaaaaaaaaaa',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      recent:'30/03/2023',
      cost:'3.000',
    },
    {
      name: 'Minh Chí',
      mail:'20521130@gmail.com',
      phone:'0376488362',
      recent:'30/03/2023',
      cost:'3.000',
    },
    {
      name: 'Ronaldo',
      mail:'20521130@gmail.com',
      phone:'0376488367',
      recent:'30/03/2023',
      cost:'3.000',
    },
    {
      name: 'Messi',
      mail:'20521130@gmail.com',
      phone:'0376488368',
      recent:'30/03/2023',
      cost:'3.000',
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
const [data,setData]= useState(customers)
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
    <div className='EmployeeCustomer'>
      <Menu />
      <Header title="QUẢN LÝ KHÁCH HÀNG" avt='http://surl.li/ggptd' name='Huỳnh Minh Chí'/>
      <div className='EmployeeCustomer_main'>
        <div className='EmployeeCustomer_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập khách hàng cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
          <button className='EmployeeCustomer_btn_create' onClick={openPopup}>Thêm khách hàng +</button>
        </div>
          <div >
            <table className="EmployeeCustomer-information">
                <tr className="EmployeeCustomer-information-header">
                        <th>Họ và tên <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số điện thoại <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Email <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Lần đến gần nhất <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số đơn hàng ký gửi <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <hr/>
                </tr>
                <div className='EmployeeCustomer_detail_infor'>
                  {
                    data.map(data => {
                          return (
                                  <tr className='EmployeeCustomer-information-detail' onClick={openPopup}>
                                      <div className='EmployeeCustomer-information-detail-wrapper'>
                                          <td>{data.name}</td>
                                          <td>{data.phone}</td>
                                          <td>{data.mail}</td>
                                          <td>{data.recent}</td>
                                          <td>{data.cost}</td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                {isOpen &&
                  <EmployeeDetailCustomer
                    title="Thông tin khách hàng"
                    onClose={closePopup}
                  >
                    {props.children}
                  </EmployeeDetailCustomer>
                }
            </table>
          </div>
      </div>
    </div>
  )
}

export default EmployeeCustomer