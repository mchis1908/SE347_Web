import React, { useState, useEffect } from 'react';
import './CustomerInvoice.css';
import Menu from '../Menu/CustomerMenu';
import Header from '../../../common/Header/Header';
import CustomerDetailInvoice from './ModalDetailInvoice/CustomerDetailInvoice';
import CustomerDetailInvoiceBanHang from './ModalDetailInvoiceBanHang/CustomerDetailInvoiceBanHang';
import Axios from 'axios';
import { useSelector } from 'react-redux';

function CustomerInvoice(props) {
  const user = useSelector((state) => state.value.sdt);
  let [hoadons, setHoaDon] = useState([]);
  const [searchkey, setSearchKey] = useState('');
  const getHoaDon = async () => {
    try {
      const res = await Axios.get('http://localhost:8000/v1/hoadon/gethoadonbykhachhang/' + user);
      setHoaDon(res.data);
      hoadons = res.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (searchkey) handleSearch(searchkey);
    else getHoaDon();
  }, [searchkey]);

  const [isOpen, setIsOpen] = useState(false);
  const [hoadon, setMaHoaDon] = useState(['']);

  const openPopup = (mahoadon) => {
    setMaHoaDon(mahoadon);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const [sortOrder, setSortOrder] = useState('ASC');
  const handleClick = (type) => {
    const sortedData = [...hoadons].sort((a, b) => {
      if (type === 'SOLUONG') {
        return a[type] - b[type];
      } else if (type === 'SDT') {
        return a.SDT.split('-')[1].localeCompare(b.SDT.split('-')[1]);
      } else {
        return a[type].localeCompare(b[type]);
      }
    });

    if (sortOrder === 'ASC') {
      setSortOrder('DESC');
      setHoaDon(sortedData.reverse());
    } else {
      setSortOrder('ASC');
      setHoaDon(sortedData);
    }
  };
  const handleSearch = async (item) => {
    if (item !== '') {
      const res = await Axios.get(
        'http://localhost:8000/v1/hoadon/searchhoadonbykhachhang/' + user + '/' + item
      );
      setHoaDon(res.data);
    }
  };
  return (
    <div className="CustomerInvoice">
      <Menu />
      <Header title="QUẢN LÝ HÓA ĐƠN"/>
      <div className="CustomerInvoice_main">
        <div className="CustomerInvoice_searchbar">
          <input
            className="search-area"
            type="text"
            placeholder="Nhập mã hóa đơn cần tìm"
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <div>
          <table className="CustomerInvoice-information">
            <tr className="CustomerInvoice-information-header">
              <th className="col">
                Mã hóa đơn
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('MAHOADON')}></i>
                </span>
              </th>
              <th className="col">
                Số lượng sản phẩm
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('SOLUONG')}></i>
                </span>
              </th>
              <th className="col">
                Ngày tạo đơn
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('NGAYTAODON')}></i>
                </span>
              </th>
              <th className="col">
                Loại hóa đơn
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('LOAI')}></i>
                </span>
              </th>
              <th className="col">
                Trạng thái
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('TRANGTHAI')}></i>
                </span>
              </th>
            </tr>
            <div className="CustomerInvoice_detail_infor">
              {hoadons.map((hoadons) => {
                return (
                  <tr
                    className="CustomerInvoice-information-detail"
                    onClick={() => openPopup(hoadons)}
                  >
                    <div className="CustomerInvoice-information-detail-wrapper">
                      <td className="col">{hoadons.MAHOADON}</td>
                      <td className="col">{hoadons.SOLUONG}</td>
                      <td className="col">{hoadons.NGAYTAODON}</td>
                      <td className="col" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div
                          className={
                            hoadons.LOAI === 'Bán hàng'
                              ? 'orange-text'
                              : 'pink-text'
                          }
                          style={{
                            width:'80%',
                            border: '1px solid',
                            borderRadius:'8px',
                          }}
                        >
                          {hoadons.LOAI}
                        </div>
                      </td>
                      <td className="col" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                        <div
                          className={
                            hoadons.TRANGTHAI === 'Đã thanh toán'
                              ? 'green-text'
                              : 'red-text'
                          }
                          style={{
                            width:'80%',
                            border: '1px solid',
                            borderRadius:'8px',
                          }}
                        >
                          {hoadons.TRANGTHAI}
                        </div>
                      </td>
                    </div>
                  </tr>
                );
              })}
            </div>
            {isOpen && hoadon.LOAI === 'Ký gửi' && (
              <CustomerDetailInvoice
                title="CHI TIẾT HÓA ĐƠN KÝ GỬI"
                onClose={closePopup}
                data={hoadon}
                db={false}
              >
                {props.children}
              </CustomerDetailInvoice>
            )}
            {isOpen && hoadon.LOAI === 'Bán hàng' && (
              <CustomerDetailInvoiceBanHang
                title="CHI TIẾT HÓA ĐƠN BÁN HÀNG"
                onClose={closePopup}
                data={hoadon}
              >
                {props.children}
              </CustomerDetailInvoiceBanHang>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerInvoice;
