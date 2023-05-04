import React,{useState, useEffect} from 'react'
import './AdminInvoice.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import AdminDetailInvoice from './ModalDetailInvoice/AdminDetailInvoice';
import AdminDetailInvoiceBanHang from './ModalDetailInvoiceBanHang/AdminDetailInvoiceBanHang';
import Axios from "axios";
import Barcode from '../../../common/Barcode/Barcode';

function AdminInvoice(props) {
  let [hoadons, setHoaDon] = useState([])
  const [searchkey, setSearchKey] = useState('')
  const getHoaDon = async () => {
      try {
          const res = await Axios.get('http://localhost:8000/v1/hoadon/gethoadon')
          setHoaDon(res.data);
          hoadons=res.data;
          console.log(hoadons);
      }
      catch (error) {
          console.log(error.message)
      }
  }
  useEffect(() => {
    if(searchkey) handleSearch(searchkey)
    else getHoaDon();
  }, [searchkey])
const [isOpen, setIsOpen] = useState(false);
const [hoadon, setMaHoaDon] = useState(['']);

const openPopup = (mahoadon) => {
  setMaHoaDon(mahoadon);
  setIsOpen(true);
};

const closePopup = () => {
  setIsOpen(false);
};
const [isSorted, setIsSorted] = useState(false);
const [data,setData]= useState(hoadons)
const [initialData,setInitialData]= useState(data)

const sortByName = () => {
  const sortedData = [...data].sort((a, b) => a.MAHOADON.localeCompare(b.MAHOADON));
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
      const res = await Axios.get('http://localhost:8000/v1/hoadon/searchhoadon/'+ sk)
      setHoaDon(res.data);
  }
};
  return (
    <div className='AdminInvoice'>
      <Menu/>
      <Header title="QUẢN LÝ HÓA ĐƠN" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
      <div className='AdminInvoice_main'>
        <div className='AdminInvoice_searchbar'>
          <input className="search-area" type="text" placeholder='Nhập khách hàng hoặc mã hóa đơn cần tìm' onChange={(e)=> setSearchKey(e.target.value)}/>
          {/* <span className='bg-search-btn'><button className='search-btn'><Icon icon="ic:baseline-search" /></button></span> */}
        </div>
          <div >
            <table className="AdminInvoice-information">
                <tr className="AdminInvoice-information-header">
                        <th>Mã hóa đơn <span><Icon style={{paddingLeft:'10px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Khách hàng <span><Icon style={{paddingLeft:'10px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Số lượng sản phẩm<span><Icon style={{paddingLeft:'10px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Loại hóa đơn <span><Icon style={{paddingLeft:'10px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Ngày tạo đơn <span><Icon style={{paddingLeft:'10px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                        <th>Trạng thái <span><Icon style={{paddingLeft:'10px'}} onClick={handleClick} icon="ph:sort-ascending-bold" /></span></th>
                <hr/>
                </tr>
                <div className='AdminInvoice_detail_infor'>
                  {
                    hoadons.map(hoadons => {
                      const arr = hoadons.SDT.split('-');
                      const result = arr[1];
                          return (
                                  <tr className='AdminInvoice-information-detail' onClick={() => openPopup(hoadons)}>
                                      <div className='AdminInvoice-information-detail-wrapper'>
                                          <td>{hoadons.MAHOADON}</td>
                                          {/* <td><Barcode style={{width:'5vw'}} value={hoadons.MAHOADON} /></td> */}
                                          <td>{result}</td>
                                          <td>{hoadons.SOLUONG}</td>
                                          <td>{hoadons.LOAI}</td>
                                          <td>{hoadons.NGAYTAODON}</td>
                                          <td>{hoadons.TRANGTHAI}</td>
                                          <td className='btn_deleteInvoice'><Icon icon="solar:trash-bin-trash-bold" color="#ff333f" /></td>
                                      </div>
                                  </tr>
                          )
                      })
                  }
                </div>
                {isOpen && hoadon.LOAI==='Ký gửi' &&
                  <AdminDetailInvoice
                    title="CHI TIẾT HÓA ĐƠN KÝ GỬI"
                    onClose={closePopup}
                    data={hoadon}
                    db={false}
                  >
                    {props.children}
                  </AdminDetailInvoice>
                }
                {isOpen && hoadon.LOAI==='Bán hàng' &&
                  <AdminDetailInvoiceBanHang
                    title="CHI TIẾT HÓA ĐƠN BÁN HÀNG"
                    onClose={closePopup}
                    data={hoadon}
                  >
                    {props.children}
                  </AdminDetailInvoiceBanHang>
                }   
            </table>
          </div>
      </div>
    </div>
  )
}

export default AdminInvoice