import React,{useState, useEffect} from 'react'
import './AdminCustomer.css'
// import ReactTable from 'react-table';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import AdminDetailCustomer from './ModalDetailCustomer/AdminDetailCustomer';
import Axios from "axios";
import AdminAddCustomer from './ModalAddCustomer/AdminAddCustomer';

function AdminCustomer(props) {
  let [khachhangs, setKhachHang] = useState([])
  const getSANPHAM = async () => {
      try {
          const res = await Axios.get('http://localhost:8000/v1/khachhang/getkhachhang')
          setKhachHang(res.data);
          khachhangs=res.data;
          console.log(khachhangs);
      }
      catch (error) {
          console.log(error.message)
      }
  }
  useEffect(() => {
    getSANPHAM();
  }, [])

const [isOpen, setIsOpen] = useState(false);
const openPopup = () => {
  setIsOpen(true);
};
const closePopup = () => {
  setIsOpen(false);
};

const [isOpen1, setIsOpen1] = useState(false);
const [khachhang, setMaKhachHang] = useState(['']);

const openPopup1 = (khachhangs) => {
  setMaKhachHang(khachhangs);
  setIsOpen1(true);
};
const closePopup1 = () => {
  setIsOpen1(false);
};

const [isSorted, setIsSorted] = useState(false);
const [data,setData]= useState(khachhangs)
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
    <div className='AdminCustomer'>
      <Menu />
      <Header title="QUẢN LÝ KHÁCH HÀNG" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
      <div className='AdminCustomer_main'>
        <div className='AdminCustomer_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập khách hàng cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
          <button className='AdminCustomer_btn_create' onClick={openPopup}>Thêm khách hàng +</button>
        </div>
          <div >
            <table className="AdminCustomer-information">
                <tr className="AdminCustomer-information-header">
                        <th>Họ và tên <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số điện thoại <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Email <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Hóa đơn gần nhất <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số đơn hàng ký gửi <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <hr/>
                </tr>
                <div className='AdminCustomer_detail_infor'>
                  {
                    khachhangs.map(khachhangs => {
                          return (
                                  <tr className='AdminCustomer-information-detail' onClick={() => openPopup1(khachhangs)}>
                                      <div className='AdminCustomer-information-detail-wrapper'>
                                          <td>{khachhangs.HOTEN}</td>
                                          <td>{khachhangs.SDT}</td>
                                          <td>{khachhangs.EMAIL}</td>
                                          <td>{khachhangs.LANDENGANNHAT}</td>
                                          <td>{khachhangs.SODONKYGUI}</td>
                                          <td className='btn_deleteCustomer'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                {isOpen &&
                  <AdminAddCustomer
                    title="Thông tin khách hàng"
                    onClose={closePopup}
                  >
                    {props.children}
                  </AdminAddCustomer>
                }
                {isOpen1 &&
                  <AdminDetailCustomer
                    title="Chỉnh sửa thông tin khách hàng"
                    onClose={closePopup1}
                    data={khachhang}
                  >
                    {props.children}
                  </AdminDetailCustomer>
                }
            </table>
          </div>
      </div>
    </div>
  )
}

export default AdminCustomer