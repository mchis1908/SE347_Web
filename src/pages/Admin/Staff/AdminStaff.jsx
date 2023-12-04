import React, { useState, useEffect } from 'react';
import './AdminStaff.css';
import Menu from '../Menu/AdminMenu';
import Header from '../../../common/Header/Header';
import Axios from 'axios';
import AdminDetailStaff from './ModalDetailStaff/AdminDetailStaff';
import AdminAddStaff from './ModalAddStaff/AdminAddStaff';

function AdminStaff(props) {
  let [nhanviens, setNhanVien] = useState([]);
  const getNV = async () => {
    try {
      const res = await Axios.get(
        'http://localhost:8000/v1/nhanvien/getnhanvien'
      );
      setNhanVien(res.data);
      nhanviens = res.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  const [searchkey, setSearchKey] = useState('');

  useEffect(() => {
    if (searchkey) handleSearch(searchkey);
    else getNV();
  }, [searchkey]);
  const handleSearch = async (sk) => {
    if (sk !== '') {
      const res = await Axios.get(
        'http://localhost:8000/v1/nhanvien/searchnhanvien/' + sk
      );
      setNhanVien(res.data);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [nhanvien, setMaNhanVien] = useState(['']);

  const openPopup1 = (nhanviens) => {
    setMaNhanVien(nhanviens);
    setIsOpen1(true);
  };
  const closePopup1 = () => {
    setIsOpen1(false);
  };
  const [sortOrder, setSortOrder] = useState('ASC');
  const handleClick = (type) => {
    const sortedData = [...nhanviens].sort((a, b) => {
      if (type === 'LUONGCOBAN' || type === 'LUONGTHEOGIO') {
        return a[type] - b[type];
      } else {
        return a[type].localeCompare(b[type]);
      }
    });

    if (sortOrder === 'ASC') {
      setSortOrder('DESC');
      setNhanVien(sortedData.reverse());
    } else {
      setSortOrder('ASC');
      setNhanVien(sortedData);
    }
  };
  return (
    <div className="AdminStaff">
      <Menu />
      <Header title="QUẢN LÝ NHÂN VIÊN"/>
      <div className="AdminStaff_main">
        <div className="AdminStaff_searchbar">
          <input
            className="search-area"
            type="text"
            placeholder="Nhập thông tin nhân viên cần tìm"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button className="AdminStaff_btn_create" onClick={openPopup}>
            Thêm nhân viên +
          </button>
        </div>
        <div>
          <table className="AdminStaff-information">
            <tr className="AdminStaff-information-header">
              <th className='col'>
                Họ và tên{' '}
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('HOTEN')}></i>
                </span>
              </th>
              <th className='col'>
                Số điện thoại{' '}
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('SDT')}></i>
                </span>
              </th>
              <th className='col'>
                Email{' '}
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('EMAIL')}></i>
                </span>{' '}
              </th>
              <th className='col'>
                Lương cơ bản{' '}
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('LUONGCOBAN')}></i>
                </span>
              </th>
              <th className='col'>
                Lương theo giờ{' '}
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('LUONGTHEOGIO')}></i>
                </span>
              </th>
              <hr />
            </tr>
            <div className="AdminStaff_detail_infor">
              {nhanviens.map((nhanviens) => {
                return (
                  <tr
                    className="AdminStaff-information-detail"
                    onClick={() => openPopup1(nhanviens)}
                  >
                    <div className="AdminStaff-information-detail-wrapper">
                      <td className='col'>{nhanviens.HOTEN}</td>
                      <td className='col'>{nhanviens.SDT}</td>
                      <td className='col'>{nhanviens.EMAIL}</td>
                      <td className='col'>
                        {nhanviens.LUONGCOBAN.toLocaleString('vi-VN', {
                          maximumFractionDigits: 3,
                        })}
                        đ
                      </td>
                      <td className='col'>
                        {nhanviens.LUONGTHEOGIO.toLocaleString('vi-VN', {
                          maximumFractionDigits: 3,
                        })}
                        đ
                      </td>
                    </div>
                  </tr>
                );
              })}
            </div>
            {isOpen && (
              <AdminAddStaff title="Thông tin nhân viên" onClose={closePopup}>
                {props.children}
              </AdminAddStaff>
            )}
            {isOpen1 && (
              <AdminDetailStaff
                title="Thông tin nhân viên"
                onClose={closePopup1}
                data={nhanvien}
              >
                {props.children}
              </AdminDetailStaff>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminStaff;
