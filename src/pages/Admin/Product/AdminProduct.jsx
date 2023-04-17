import React,{useState} from 'react'
import './AdminProduct.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import AdminDetailProduct from './ModalDetailProduct/AdminDetailProduct';

function AdminProduct(props) {
  const products = [
    {
        masp: '26500000323',
        tensp: 'Áo gucci',
        loai:'Quần',
        trangthai:'Đã bán',
        gia: 500000,
        hinhanh:'http://surl.li/ggptd'
    },
    {
      masp: '26500000323',
      tensp: 'Quần jean',
      loai:'Quần',
      trangthai:'Đã bán',
      gia: 500000,
      hinhanh:'http://surl.li/ggptd'
  },{
    masp: '26500000323',
    tensp: 'Quần jean',
    loai:'Quần',
    trangthai:'Đã bán',
    gia: 500000,
    hinhanh:'http://surl.li/ggptd'
},{
        masp: '26500000323',
        tensp: 'Quần jean',
        loai:'Áo',
        trangthai:'Đã bán',
        gia: 500000,
        hinhanh:'http://surl.li/ggptd'
    },{
      masp: '26500000323',
      tensp: 'Quần jean',
      loai:'Áo',
      trangthai:'Đã bán',
      gia: 500000,
      hinhanh:'http://surl.li/ggptd'
  },{
    masp: '26500000323',
    tensp: 'Quần jean',
    loai:'Áo',
    trangthai:'Đã bán',
    gia: 500000,
    hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  tensp: 'Quần jean',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  tensp: 'Quần jean',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  tensp: 'Quần jean',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  tensp: 'Quần jean',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  tensp: 'Quần jean',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  tensp: 'Quần jean',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  tensp: 'Quần jean',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
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
const [data,setData]= useState(products)
const [initialData,setInitialData]= useState(data)
console.log('data',data)

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
                    data.map(data => {
                          return (
                                  <tr className='AdminProduct-information-detail' onClick={openPopup}>
                                      <div className='AdminProduct-information-detail-wrapper'>
                                          <td >{data.masp}</td>
                                          <td >{data.tensp}</td>
                                          <td >{data.loai}</td>
                                          <td >{data.gia}</td>
                                          <td >{data.trangthai}</td>
                                          <td><img style={{heigh:'60px', width:'60px'}} src={data.hinhanh}/></td>
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