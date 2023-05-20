import React,{useState} from 'react'
import './EmployeeProduct.css'
import Menu from "../Menu/EmployeeMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import EmployeeDetailProduct from './ModalDetailProduct/EmployeeDetailProduct';

function EmployeeProduct(props) {
  const products = [
    {
        masp: '26500000323',
        madon: '0756982',
        loai:'Quần',
        trangthai:'Đã bán',
        gia: 500000,
        hinhanh:'http://surl.li/ggptd'
    },
    {
      masp: '26500000323',
      madon: '075000006982',
      loai:'Quần',
      trangthai:'Đã bán',
      gia: 500000,
      hinhanh:'http://surl.li/ggptd'
  },{
    masp: '26500000323',
    madon: '075000006982',
    loai:'Quần',
    trangthai:'Đã bán',
    gia: 500000,
    hinhanh:'http://surl.li/ggptd'
},{
        masp: '26500000323',
        madon: '075000006982',
        loai:'Áo',
        trangthai:'Đã bán',
        gia: 500000,
        hinhanh:'http://surl.li/ggptd'
    },{
      masp: '26500000323',
      madon: '075000006982',
      loai:'Áo',
      trangthai:'Đã bán',
      gia: 500000,
      hinhanh:'http://surl.li/ggptd'
  },{
    masp: '26500000323',
    madon: '075000006982',
    loai:'Áo',
    trangthai:'Đã bán',
    gia: 500000,
    hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  madon: '075000006982',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  madon: '075000006982',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  madon: '075000006982',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  madon: '075000006982',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  madon: '075000006982',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  madon: '075000006982',
  loai:'Quần',
  trangthai:'Đã bán',
  gia: 500000,
  hinhanh:'http://surl.li/ggptd'
},{
  masp: '26500000323',
  madon: '075000006982',
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
    <div className='EmployeeProduct'>
      <Menu/>
      <Header title="QUẢN LÝ SẢN PHẨM" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
      <div className='EmployeeProduct_main'>
        <div className='EmployeeProduct_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập sản phẩm cần tìm'/>
          <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span>
        </div>
          <div >
            <table className="EmployeeProduct-information">
                <tr className="EmployeeProduct-information-header">
                        <th>Mã sản phẩm <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Mã hóa đơn <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Chủ sở hữu <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Giá bán <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Trạng thái <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Hình ảnh <span><Icon style={{paddingLeft:'20px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                <hr/>
                </tr>
                <div className='EmployeeProduct_detail_infor'>
                  {
                    data.map(data => {
                          return (
                                  <tr className='EmployeeProduct-information-detail' onClick={openPopup}>
                                      <div className='EmployeeProduct-information-detail-wrapper'>
                                        <td >{data.masp}</td>
                                        <td >{data.madon}</td>
                                        <td >{data.loai}</td>
                                        <td >{data.gia}</td>
                                        <td >{data.trangthai}</td>
                                        <td><img style={{heigh:'60px', width:'60px'}} src={data.hinhanh}/></td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                {isOpen &&
                  <EmployeeDetailProduct
                    title="Chỉnh sửa sản phẩm"
                    onClose={closePopup}
                  >
                    {props.children}
                  </EmployeeDetailProduct>
                }
            </table>
          </div>
      </div>
    </div>
  )
}

export default EmployeeProduct