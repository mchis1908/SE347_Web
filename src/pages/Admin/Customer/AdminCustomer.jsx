import React,{useState} from 'react'
import './AdminCustomer.css'
import ReactTable from 'react-table';
// import 'react-table/react-table.css';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';

function AdminCustomer() {
  const customers = [
    {
      name: 'Y Chía',
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
const [isSorted, setIsSorted] = useState(false);
const [data,setData]= useState(customers)
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
    <div className='AdminCustomer'>
      <Menu/>
      <Header/>
      <div className='AdminCustomer_main'>
        <div className='AdminCustomer_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập khách hàng cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
          <button className='AdminCustomer_btn_create'>Thêm khách hàng +</button>
        </div>
          <div >
            <table className="AdminCustomer-information">
                <tr className="AdminCustomer-information-header">
                        <th>Họ và tên <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số điện thoại <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Email <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Lần đến gần nhất <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số tiền có thể nhận <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <hr/>
                </tr>
                <div className='AdminCustomer_detail_infor'>
                  {
                    data.map(data => {
                          return (
                                  <tr className='AdminCustomer-information-detail'>
                                      <div className='AdminCustomer-information-detail-wrapper'>
                                          <td className='name'>{data.name}</td>
                                          <td className='phone'>{data.phone}</td>
                                          <td className='mail'>{data.mail}</td>
                                          <td className='recent'>{data.recent}</td>
                                          <td className='cost'>{data.cost}</td>
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

export default AdminCustomer