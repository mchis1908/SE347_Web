import React, { useState, useEffect } from 'react';
import './CustomerHome.css';
import Header from '../../../common/Header/Header';
import Menu from '../Menu/CustomerMenu';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPathHome } from '../../../redux/userSlice';

function CustomerHome() {
  const dispatch = useDispatch();
  const path = useSelector((state) => state.pathHome);
  let [minValue, setMinValue] = useState(0);
  let [loaiSP, setLoaiSP] = useState('');
  let [maxValue, setMaxValue] = useState(999999);
  let [sanphams, setSanPham] = useState([]);
  let [sukiens, setSuKiens] = useState([]);
  const [searchkey, setSearchKey] = useState('');

  const getSANPHAM = async () => {
    try {
      const res = await Axios.get(
        'http://localhost:8000/v1/sanpham/getsanphambytrangthai/Chưa bán/' + minValue + '/' + maxValue + '?searchkey='+ searchkey + '&loai='+ loaiSP
      );
      setSanPham(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getSuKien = async () => {
    try {
      const res = await Axios.get( 'http://localhost:8000/v1/sukien/GetSuKienChuaDienRa');
      setSuKiens(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const getLoai = async () => {
    setLoaiSP(path ?? '')
  };

  useEffect(() => {
    getLoai();
  }, [path]);

  useEffect(() => {
    getSANPHAM();
  }, [searchkey, loaiSP, minValue, maxValue]);

  useEffect(() => {
    getSANPHAM();
    getSuKien();
  }, []);

  const handleInputChange = (e) => {
    setSearchKey(e.target.value)
  }

  const convertDate = (date) => {
    const parts = date.split('-');
    if (parts.length === 3) {
      const [year, month, day] = parts;
      return `${day}/${month}/${year}`;
    } else {
      return NaN;
    }
  }

  return (
    <div className="CustomerHome">
      <Menu />
      <Header title="TRANG CHỦ"/>
      <div className="CustomerHome_main">
        <div className='event-banner'>
          <Splide options={{
            autoWidth: true,
            gap: "1rem",
            perMove: 1,
            type : 'loop',
            autoplay: true,
            perPage : 1,
            arrows: false,
            pagination: true,
          }}>
            {sukiens.length === 0 ? (
              <div className="event-container">
                <p>Không có sự kiên nào diễn ra trong thời gian tới</p>
              </div>
              ) : (
                sukiens.map((item, index) => (
                <SplideSlide data-splide-interval="1500" className="event-container">
                  {
                    item.HINHANH ? 
                    <img src={'http://localhost:8000/' + item.HINHANH} style={{width:'100%', height: '220px', objectFit:'contain', borderRadius: '16px'}} alt='img' />
                    :
                    <img src={require("../../../Images/banner.png")} style={{width:'100%', height: '220px', objectFit:'contain', borderRadius: '16px'}} alt='img' />
                  }
                  <p className='text-center' style={{fontWeight:600, fontSize:'20px', color:'#065471'}}>{convertDate(item.THOIGIANBATDAU)} - {convertDate(item.THOIGIANKETTHUC)}</p>
                </SplideSlide>
              )))
            }
          </Splide>
        </div>
        <div className="d-flex flex-column" style={{gap:'24px'}}>
          <div className="d-flex flex-row">
            <div className="col d-flex flex-row justify-content-start" style={{ gap: '16px' }}>
              <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, fontSize: '16px', color: '#065471' }}>
                Tìm kiếm:
              </div>
              <input
                className="search-input input"
                type="text"
                placeholder="Nhập tên sản phẩm"
                style={{ width: '500px' }}
                value={searchkey}
                onChange={handleInputChange}
              />
            </div>
            <div className='d-flex flex-row gap-2 align-items-center'>
              <p style={{ fontWeight: 600, fontSize: '16px', color: '#065471' }}>Khoảng giá:</p>
              <div className='d-flex flex-row gap-1 align-items-center'>
                <input className='input' type='number' value={minValue} onChange={(e) => setMinValue(e.target.value)} style={{width:'100px'}}/>
                <p>đ</p>
              </div>
              <p>-</p>
              <div className='d-flex flex-row gap-1 align-items-center'>
                <input className='input' type='number' value={maxValue} onChange={(e) => setMaxValue(e.target.value)} style={{width:'100px'}}/>
                <p>đ</p>
              </div>
            </div>
          </div>
          <div className="book-container">
            {sanphams.length === 0 ? (
              <p>Không có sản phẩm phù hợp</p>
            ) : (
            sanphams.map((item, index) => (
              <div className="book-item" key={index}>
                {item.HINHANH ? (
                  <img src={'http://localhost:8000/' + item.HINHANH} className="img-product" alt='img'/>
                ) : (
                  <img src="../../../Images/book-default.png" className="img-product" alt='img'/>
                )}
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: '8px', height: '100%' }}>
                  <div className="book-item-text">
                    <p style={{fontWeight: '600'}}>Tên sản phẩm: </p>
                    <p>{item.TENSANPHAM}</p>
                  </div>
                  <div className="book-item-text">
                    <p style={{fontWeight: '600'}}>Loại sản phẩm: </p>
                    <p>{item.LOAI}</p>
                  </div>
                  <div className="book-item-text">
                    <p style={{fontWeight: '600'}}>Giá: </p>
                    <p>{item.GIANHAN.toLocaleString('vi-VN', {maximumFractionDigits: 3})}đ</p>
                  </div>
                </div>
              </div> 
            )))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHome;
