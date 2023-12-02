import React, { useState, useEffect } from 'react';
import './Event.css';
import Menu from '../Menu/AdminMenu';
import Header from '../../../common/Header/Header';
import Axios from 'axios';
import ModalEvent from '../Event/ModalEvent/ModalEvent';
const moment = require('moment');

function Event(props) {
const [isOpen, setIsOpen] = useState(false);
const [event, setEvent] = useState();
const [title, setTitle] = useState();
const [events, setEvents] = useState([]);
const [filterTime, setFilterTime] = useState();
const currentDate = moment().format('YYYY-MM-DD');

const openPopup = (item, event) => {
    setIsOpen(true);
    setEvent(item);
    setTitle(event);
};

const closePopup = () => {
    setIsOpen(false);
};

const getSukien = async () => {
    try {
      const res = await Axios.get(
        'http://localhost:8000/v1/sukien/getsukien'
      );
      setEvents(res.data);
    } catch (error) {
      console.log(error.message);
    }
};

const getSukienbyThoiGian = async (filterTime) => {
    try {
      const res = await Axios.get(
        'http://localhost:8000/v1/sukien/getsukien/'+ filterTime
      );
      setEvents(res.data);
    } catch (error) {
      console.log(error.message);
    }
};

const convertDate = (date) => {
    const parts = date.split('-');
  if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${day}/${month}/${year}`;
  } else {
    return NaN;
  }
}

  useEffect(() => {
    if (filterTime) getSukienbyThoiGian(filterTime);
    else getSukien();
}, [filterTime]);

useEffect(() => {
    getSukien();
}, []);

return (
    <div className="Event">
        <Menu />
        <Header title="SỰ KIỆN" avt="http://surl.li/ggptd" />
        <div className="eventMain">
            <div className='event-content'>
                <div className='d-flex flex-row justify-content-end w-100 gap-5'>
                    <input style={{width:'200px', borderRadius:'10px', border: '1px solid #000', padding:'0 8px'}} type='date' onChange={(e) => setFilterTime(e.target.value)}/>
                    <button className='button-solid' onClick={(e) => openPopup(null, 'Thêm sự kiện')}>Thêm sự kiện</button>
                </div>
                <div className="d-flex justify-content-center align-items-start flex-wrap gap-4"
                    style={{overflow:'auto', padding:'16px 0', minHeight:'550px'}}>
                    {!events.length ?(
                            <p>Không có sự kiên nào diễn ra trong thời gian tới</p>
                        ) : ( events.map((item, index) => {
                            return (
                            <div className="event-item-container" onClick={(e) => openPopup(item, 'Chi tiết sự kiện')}>
                                { 
                                    item.HINHANH ? 
                                    <img src={'http://localhost:8000/' + item.HINHANH} className="rounded-top event-image" alt="event" /> 
                                    :
                                    <img src={require('../../../Images/event-no-image.png')} className="rounded-top event-image" alt="event" />
                                }
                                <div className="content-event-container">
                                    <p className="event-title text-center" style={{width:'100%'}}>{item.TIEUDE}</p>
                                    <p className='text-start' style={{height:'80px', width:'100%'}}>{item.MOTA}</p>
                                    <p className="event-title text-center" style={{width:'100%'}}>{convertDate(item.THOIGIANBATDAU)} - {convertDate(item.THOIGIANKETTHUC)}</p>
                                </div>
                                {currentDate< item.THOIGIANBATDAU ? <span className="badge text-bg-danger">Upcoming</span> :<p></p>}
                            </div>
                        )}))
                    }
                </div>
            </div>
        </div>
        {isOpen && (
            <ModalEvent
                title={title}
                onClose={closePopup}
                data={event}
            >
                {props.children}
            </ModalEvent>
        )}
    </div>
);
}

export default Event;
