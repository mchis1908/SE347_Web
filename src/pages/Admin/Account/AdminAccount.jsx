import React, { useState, useEffect } from 'react';
import './AdminAccount.css';
import Menu from '../Menu/AdminMenu';
import Header from '../../../common/Header/Header';
import AdminDetailAccount from './ModalDetailAccount/AdminDetailAccount';
import Axios from 'axios';

function AdminAccount(props) {
  let [accounts, setTaiKhoan] = useState([]);
  const getTK = async () => {
    try {
      const res = await Axios.get(
        'http://localhost:8000/v1/taikhoan/gettaikhoan'
      );
      setTaiKhoan(res.data);
      accounts = res.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  const [searchkey, setSearchKey] = useState('');

  useEffect(() => {
    if (searchkey) handleSearch(searchkey);
    else getTK();
  }, [searchkey]);

  const handleSearch = async (sk) => {
    if (sk !== '') {
      const res = await Axios.get(
        'http://localhost:8000/v1/taikhoan/searchtaikhoan/' + sk
      );
      setTaiKhoan(res.data);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [inftaikhoan, setInfTaiKhoan] = useState(['']);

  const openPopup = (tk) => {
    setInfTaiKhoan(tk);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const [sortOrder, setSortOrder] = useState('ASC');
  const handleClick = (type) => {
    const sortedData = [...accounts].sort((a, b) => {
      return a[type].localeCompare(b[type]);
    });
    if (sortOrder === 'ASC') {
      setSortOrder('DESC');
      setTaiKhoan(sortedData.reverse());
    } else {
      setSortOrder('ASC');
      setTaiKhoan(sortedData);
    }
  };
  return (
    <div className="AdminAccount">
      <Menu />
      <Header title="QUẢN LÝ TÀI KHOẢN" avt="http://surl.li/ggptd" />
      <div className="AdminAccount_main">
        <div className="AdminAccount_searchbar">
          <input
            className="search-area"
            type="text"
            placeholder="Nhập tên tài khoản hoặc nhân viên cần tìm"
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <div>
          <table className="AdminAccount-information">
            <tr className="AdminAccount-information-header">
              <th className='col'>
                Tên nhân viên{' '}
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('TENNV')}></i>
                </span>
              </th>
              <th className='col'>
                Tài khoản{' '}
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('TENTAIKHOAN')}></i>
                </span>
              </th>
              <th className='col'>
                Mật khẩu{' '}
                <span>
                  <i className="bi bi-sort-down-alt" style={{ paddingLeft: '10px', fontSize:'18px' }} onClick={() => handleClick('MATKHAU')}></i>
                </span>
              </th>
              <hr />
            </tr>
            <div className="AdminAccount_detail_infor">
              {accounts.map((accounts) => {
                if (accounts.PHANQUYEN === 'employee')
                  return (
                    <tr
                      className="AdminAccount-information-detail"
                      onClick={() => openPopup(accounts)}
                    >
                      <div className="AdminAccount-information-detail-wrapper">
                        <td className="col">{accounts.TENNV}</td>
                        <td className="col">{accounts.TENTAIKHOAN}</td>
                        <td className="col">{accounts.MATKHAU}</td>
                      </div>
                    </tr>
                  );
              })}
            </div>
            {isOpen && (
              <AdminDetailAccount
                title="Thông tin tài khoản"
                onClose={closePopup}
                data={inftaikhoan}
              >
                {props.children}
              </AdminDetailAccount>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminAccount;
