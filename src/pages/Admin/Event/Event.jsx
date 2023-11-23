import React, { useState, useEffect } from 'react';
import './Event.css';
import Menu from '../Menu/AdminMenu';
import Header from '../../../common/Header/Header';
import Axios from 'axios';

function Event(props) {
  
  return (
    <div className="Event">
        <Menu />
        <Header title="SỰ KIỆN" avt="http://surl.li/ggptd" />
        <div className="eventMain">
            <div className='event-content'>
                <div className='d-flex flex-row justify-content-end w-100 gap-5'>
                    <input style={{width:'200px', borderRadius:'10px', border: '1px solid #000', padding:'0 8px'}}
                        type='date' />
                    <button className='button-solid' data-toggle="modal" data-target="#exampleModalLong">Thêm sự
                        kiện</button>
                </div>
                <div class="d-flex justify-content-center align-items-start flex-wrap gap-4"
                    style={{overflow:'auto', padding:'16px 0'}}>
                    <div class="event-item-container">
                        <img src={require('../../../Images/event-no-image.png')} class="rounded-top event-image"
                            alt="event" />
                        {/* <img src="@/assets/event/png/event-no-image.png" class="img-fluid rounded-top event-image"
                            alt="event" /> */}
                        <div class="content-event-container">
                            <p class="event-title">Tên sự kiện</p>
                            <p class="event-title">Chi tiết sự kiện</p>
                            <p>{ 'Ngày bắt đầu' } - {'Ngày kết thúc'}</p>
                        </div>
                        <span class="badge text-bg-danger">Upcoming</span>
                    </div>
                    <div class="event-item-container">
                        <img src={require('../../../Images/event-no-image.png')} class="rounded-top event-image"
                            alt="event" />
                        {/* <img src="@/assets/event/png/event-no-image.png" class="img-fluid rounded-top event-image"
                            alt="event" /> */}
                        <div class="content-event-container">
                            <p class="event-title">Tên sự kiện</p>
                            <p class="event-title">Chi tiết sự kiện</p>
                            <p>{ 'Ngày bắt đầu' } - {'Ngày kết thúc'}</p>
                        </div>
                        <span class="badge text-bg-danger">Upcoming</span>
                    </div>
                    <div class="event-item-container">
                        <img src={require('../../../Images/event-no-image.png')} class="rounded-top event-image"
                            alt="event" />
                        {/* <img src="@/assets/event/png/event-no-image.png" class="img-fluid rounded-top event-image"
                            alt="event" /> */}
                        <div class="content-event-container">
                            <p class="event-title">Tên sự kiện</p>
                            <p class="event-title">Chi tiết sự kiện</p>
                            <p>{ 'Ngày bắt đầu' } - {'Ngày kết thúc'}</p>
                        </div>
                        <span class="badge text-bg-danger">Upcoming</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Event;
