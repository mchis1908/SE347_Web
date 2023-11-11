import React, { useState, useEffect } from 'react';
import './AdminProduct.css';
import Menu from '../Menu/AdminMenu';
import Header from '../../../common/Header/Header';
import AdminDetailProduct from './ModalDetailProduct/AdminDetailProduct';
import Axios from 'axios';

function AdminProduct(props) {
  let [sanphams, setSanPham] = useState([]);
  const getSANPHAM = async () => {
    try {
      const res = await Axios.get(
        'http://localhost:8000/v1/sanpham/getsanpham'
      );
      setSanPham(res.data);
      sanphams = res.data;
      console.log(sanphams);
    } catch (error) {
      console.log(error.message);
    }
  };
  const [searchkey, setSearchKey] = useState('');
  useEffect(() => {
    if (searchkey) handleSearch(searchkey);
    else getSANPHAM();
  }, [searchkey]);

  const [isOpen, setIsOpen] = useState(false);
  const [sanpham, setMaSanPham] = useState(['']);

  const openPopup = (sanphams) => {
    setMaSanPham(sanphams);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const [sortOrder, setSortOrder] = useState('ASC');
  const handleClick = (type) => {
    const sortedData = [...sanphams].sort((a, b) => {
      if (type === 'GIANHAN') {
        return a[type] - b[type];
      } else {
        return a[type].localeCompare(b[type]);
      }
    });

    if (sortOrder === 'ASC') {
      setSortOrder('DESC');
      setSanPham(sortedData.reverse());
    } else {
      setSortOrder('ASC');
      setSanPham(sortedData);
    }
  };
  const handleSearch = async (sk) => {
    if (sk !== '') {
      const res = await Axios.get(
        'http://localhost:8000/v1/sanpham/searchsanpham/' + sk
      );
      setSanPham(res.data);
    }
  };
  return (
    <div className="AdminProduct">
      <Menu />
      <Header title="QUẢN LÝ SẢN PHẨM" avt="http://surl.li/ggptd" />
      <div className="AdminProduct_main">
        <div className="AdminProduct_searchbar">
          <input
            className="search-area"
            type="text"
            placeholder="Nhập thông tin sản phẩm cần tìm"
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <div>
          <table className="AdminProduct-information">
            <tr className="AdminProduct-information-header">
              <th className='col'>
                Mã sản phẩm
                <span>
                  <i class="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('MASANPHAM')}></i>
                </span>
              </th>
              <th className='col'>
                Tên sản phẩm
                <span>
                  <i class="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('TENSANPHAM')}></i>
                </span>
              </th>
              <th className='col'>
                Loại
                <span>
                  <i class="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('LOAI')}></i>
                </span>
              </th>
              <th className='col'
                style={{
                  textAlign: 'end',
                  maxWidth: '10.6vw',
                  minWidth: '10.6vw',
                }}
              >
                Giá bán
                <span>
                  <i class="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('GIANHAN')}></i>
                </span>
              </th>
              <th className='col' style={{ maxWidth: '16.6vw', minWidth: '16.6vw' }}>
                Trạng thái
                <span>
                  <i class="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('TRANGTHAI')}></i>
                </span>
              </th>
              <th className='col'>
                Hình ảnh
                <span>
                  <i class="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('MASANPHAM')}></i>
                </span>
              </th>
              <hr />
            </tr>
            <div className="AdminProduct_detail_infor">
              {sanphams.map((sanphams) => {
                return (
                  <tr
                    className="AdminProduct-information-detail"
                    onClick={() => openPopup(sanphams)}
                  >
                    <div className="AdminProduct-information-detail-wrapper">
                      <td className='col'>{sanphams.MASANPHAM}</td>
                      <td className='col'>{sanphams.TENSANPHAM}</td>
                      <td className='col'>{sanphams.LOAI}</td>
                      <td className='col'>
                        {sanphams.GIANHAN.toLocaleString('vi-VN', {
                          maximumFractionDigits: 3,
                        })}
                        đ
                      </td>
                      <td className='col'>
                        <p
                          className={
                            sanphams.TRANGTHAI === 'Đã bán'
                              ? 'green-text'
                              : 'red-text'
                          }
                          style={{
                            border: '1px solid',
                            height: '4vh',
                            margin: '8px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {sanphams.TRANGTHAI}
                        </p>
                      </td>
                      <td className='col'>
                        <img
                          style={{
                            maxHeight: '40px',
                            width: '50px',
                            verticalAlign: 'middle',
                            objectFit: 'cover',
                          }}
                          src={'http://localhost:8000/' + sanphams.HINHANH}
                          alt="img"
                        />
                      </td>
                    </div>
                  </tr>
                );
              })}
            </div>
            {isOpen && sanpham.TRANGTHAI === 'Đã bán' && (
              <AdminDetailProduct
                title="Chỉnh sửa sản phẩm"
                onClose={closePopup}
                data={sanpham}
                db={true}
              >
                {props.children}
              </AdminDetailProduct>
            )}
            {isOpen && sanpham.TRANGTHAI === 'Chưa bán' && (
              <AdminDetailProduct
                title="Chỉnh sửa sản phẩm"
                onClose={closePopup}
                data={sanpham}
                db={false}
              >
                {props.children}
              </AdminDetailProduct>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
