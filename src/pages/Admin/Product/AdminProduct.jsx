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
  const [searchkey, setSearchKey] = useState('')
  useEffect(() => {
    if(searchkey) handleSearch(searchkey)
    else getSANPHAM();
  }, [searchkey])

const [isOpen, setIsOpen] = useState(false);
const [sanpham, setMaSanPham] = useState(['']);

const openPopup = (sanphams) => {
  setMaSanPham(sanphams);
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
const handleSearch = async(sk) => {
  if(sk!=='')
  {
    const res = await Axios.get('http://localhost:8000/v1/sanpham/searchsanpham/'+ sk)
    setSanPham(res.data);
  }
};
  return (
    <div className='AdminProduct'>
      <Menu/>
      <Header title="QUẢN LÝ SẢN PHẨM" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
      <div className='AdminProduct_main'>
        <div className='AdminProduct_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập thông tin sản phẩm cần tìm' onChange={(e)=> setSearchKey(e.target.value)}/>
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
                                  <tr className='AdminProduct-information-detail' onClick={() => openPopup(sanphams)}>
                                      <div className='AdminProduct-information-detail-wrapper'>
                                          <td >{sanphams.MASANPHAM}</td>
                                          <td >{sanphams.TENSANPHAM}</td>
                                          <td >{sanphams.LOAI}</td>
                                          <td >{sanphams.GIANHAN.toLocaleString('vi-VN', { maximumFractionDigits: 3 })}</td>
                                          <td >{sanphams.TRANGTHAI}</td>
                                          <td><img style={{maxHeight:'40px', maxWidth:'60px'}} src={'http://localhost:8000/'+sanphams.HINHANH}/></td>
                                          <td className='btn_deleteProduct'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                {isOpen && sanpham.TRANGTHAI==='Đã bán' &&
                  <AdminDetailProduct
                    title="Chỉnh sửa sản phẩm"
                    onClose={closePopup}
                    data={sanpham}
                    db={true}
                  >
                    {props.children}
                  </AdminDetailProduct>
                }
                {isOpen && sanpham.TRANGTHAI==='Chưa bán' &&
                  <AdminDetailProduct
                    title="Chỉnh sửa sản phẩm"
                    onClose={closePopup}
                    data={sanpham}
                    db={false}
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