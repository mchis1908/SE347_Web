import React,{useState, useEffect} from 'react'
import './AdminProduct.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import AdminDetailProduct from './ModalDetailProduct/AdminDetailProduct';
import Axios from "axios";

function AdminProduct(props) {
  let [sanphams, setSanPham] = useState([])
  const getSANPHAM = async () => {
      try {
          const res = await Axios.get('http://localhost:8000/v1/sanpham/getsanpham')
          setSanPham(res.data);
          sanphams=res.data;
          console.log(sanphams);
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
const [isSorted, setIsSorted] = useState(false);
const [data,setData]= useState(sanphams)
const [initialData,setInitialData]= useState(data)

const sortByName = () => {
  const sortedData = [...data].sort((a, b) => a.masp.localeCompare(b.masp));
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
    <div className='AdminProduct'>
      <Menu/>
      <Header title="QUẢN LÝ SẢN PHẨM" avt='http://surl.li/ggptd' masp='Huỳnh Minh Chí'/>
      <div className='AdminProduct_main'>
        <div className='AdminProduct_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập sản phẩm cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="AdminProduct-information">
                <tr className="AdminProduct-information-header">
                        <th>Mã sản phẩm <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Tên sản phẩm <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Loại <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Giá bán <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Trạng thái <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Hình ảnh <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                <hr/>
                </tr>
                <div className='AdminProduct_detail_infor'>
                  {
                    sanphams.map(sanphams => {
                          return (
                                  <tr className='AdminProduct-information-detail' onClick={openPopup}>
                                      <div className='AdminProduct-information-detail-wrapper'>
                                          <td >{sanphams.MASANPHAM}</td>
                                          <td >{sanphams.TENSANPHAM}</td>
                                          <td >{sanphams.LOAI}</td>
                                          <td >{sanphams.GIANHAN}</td>
                                          <td >{sanphams.TRANGTHAI}</td>
                                          <td><img style={{maxHeight:'40px', maxWidth:'60px'}} src={'http://localhost:8000/'+sanphams.HINHANH}/></td>
                                          <td className='btn_deleteProduct'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                {isOpen &&
                  <AdminDetailProduct
                    title="Chỉnh sửa sản phẩm"
                    onClose={closePopup}
                  >
                    {props.children}
                  </AdminDetailProduct>
                }
            </table>
          </div>
      </div>
    </div>
  )
}

export default AdminProduct