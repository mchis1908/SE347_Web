import React, { useState, useEffect } from 'react';
import './CustomerHome.css';
import Header from '../../../common/Header/Header';
import Menu from '../Menu/CustomerMenu';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Axios from 'axios';

function CustomerHome() {
  let [sanphams, setSanPham] = useState([]);
  const [searchkey, setSearchKey] = useState('');

  const getSANPHAM = async () => {
    try {
      const res = await Axios.get(
        'http://localhost:8000/v1/sanpham/getsanphambytrangthai/' + 'Chưa bán/?searchkey='+ searchkey
      );
      setSanPham(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSANPHAM();
  }, [searchkey]);

  useEffect(() => {
    getSANPHAM();
  }, []);

  const handleInputChange = (e) => {
    setSearchKey(e.target.value)
  }

  return (
    <div className="CustomerHome">
      <Menu />
      <Header title="TRANG CHỦ" avt="http://surl.li/ggptd" />
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
            <SplideSlide data-splide-interval="1500" className="event-item">
              <div className="event-container">
                <img src={require("../../../Images/banner.png")}
                  style={{width:'100%', height: '220px', objectFit:'contain', borderRadius: '16px'}} alt='img' />
                {/* <img v-else src="@/assets/event/banner.png"
                  style={{width:'100%', height: '250px', objectFit:'contain', borderRadius: '16px'}}> */}
                <p className='text-center' style={{fontWeight:600, fontSize:'20px', color:'#065471'}}>{'Ngày bắt đầu'}-{'Ngày kết thúc'}</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="d-flex flex-column" style={{gap:'24px'}}>
          <div className="d-flex flex-row">
            <div className="col d-flex flex-row justify-content-start" style={{ gap: '16px' }}>
              <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, fontSize: '16px', color: '#065471' }}>
                Search:
              </div>
              <input
                className="search-input input"
                type="text"
                placeholder="Enter your input"
                style={{ width: '500px' }}
                value={searchkey}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="book-container">
            {sanphams.length === 0 ? (
              <p>Không có sản phẩm phù hợp</p>
            ) : (
            sanphams.map((item, index) => (
              <div className="book-item" key={index}>
                {item.HINHANH ? (
                  <img src={'http://localhost:8000/' + item.HINHANH} style={{ height: '100px', objectFit: 'contain', zIndex: 0 }} alt='img'/>
                ) : (
                  <img src="../../../Images/book-default.png" style={{ height: '100px', objectFit: 'contain', zIndex: 0 }} alt='img'/>
                )}
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: '8px', height: '100%' }}>
                  <div className="book-item-text">
                    <p>Tên sản phẩm:</p>
                    <p>{item.TENSANPHAM}</p>
                  </div>
                  <div className="book-item-text">
                    <p>Loại sản phẩm</p>
                    <p>{item.LOAI}</p>
                  </div>
                  <div className="book-item-text">
                    <p>Giá:</p>
                    <p>{item.GIANHAN.toLocaleString('vi-VN', {maximumFractionDigits: 3})}</p>
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
