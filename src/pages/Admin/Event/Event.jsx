import React, { useState, useEffect } from 'react';
import './Event.css';
import Menu from '../Menu/AdminMenu';
import Header from '../../../common/Header/Header';
import Axios from 'axios';
import ModalEvent from '../Event/ModalEvent/ModalEvent';

function Event(props) {
const [isOpen, setIsOpen] = useState(false);
const [event, setEvent] = useState();
const [title, setTitle] = useState();
const [events, setEvents] = useState([
    {TIEUDE: '1', MOTA: '1', HINHANH: '1', THOIGIANBATDAU: '10/10/2023', THOIGIANKETTHUC:'2023/12/10'},
    {TIEUDE: '2', MOTA: '2', HINHANH: '2', THOIGIANBATDAU: '10/10/2023', THOIGIANKETTHUC:'2023/12/10'},
    {TIEUDE: '3', MOTA: '3', HINHANH: '3', THOIGIANBATDAU: '10/10/2023', THOIGIANKETTHUC:'2023/12/10'},
]);
const openPopup = (item, event) => {
    setIsOpen(true);
    setEvent(item);
    setTitle(event);
};
const closePopup = () => {
    setIsOpen(false);
};
return (
    <div className="Event">
        <Menu />
        <Header title="SỰ KIỆN" avt="http://surl.li/ggptd" />
        <div className="eventMain">
            <div className='event-content'>
                <div className='d-flex flex-row justify-content-end w-100 gap-5'>
                    <input style={{width:'200px', borderRadius:'10px', border: '1px solid #000', padding:'0 8px'}}
                        type='date' />
                    <button className='button-solid' onClick={(e) => openPopup(null, 'Thêm sự kiện')}>Thêm sự kiện</button>
                </div>
                <div className="d-flex justify-content-center align-items-start flex-wrap gap-4"
                    style={{overflow:'auto', padding:'16px 0'}}>
                    {events.map((item, index) => {
                        return (
                        <div className="event-item-container" onClick={(e) => openPopup(item, 'Chi tiết sự kiện')}>
                            <img src={require('../../../Images/event-no-image.png')} className="rounded-top event-image" alt="event" />
                            <div className="content-event-container">
                                <p className="event-title">{item.TIEUDE}</p>
                                <p className="event-title">{item.MOTA}</p>
                                <p>{item.THOIGIANBATDAU} - {item.THOIGIANKETTHUC}</p>
                            </div>
                            <span className="badge text-bg-danger">Upcoming</span>
                        </div>
                    )})}
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
