import React, { useState, useEffect } from 'react';
import './ModalEvent.css'
import Axios from "axios";
import {message} from 'antd';

function ModalEvent(props) {
    const [selectedFile, setSelectedFile] = useState([])
    const [tenEvent, setTenEvent] = useState()
    const [mota, setMoTa] = useState()
    const [startDay, setStartDay] = useState()
    const [endDay, setEndDay] = useState()
    const [hinhanh, setHinhAnh] = useState()

    useEffect(() => {
        if(props.data){
            setTenEvent(props.data.TIEUDE ? props.data.TIEUDE : '')
            setMoTa(props.data.MOTA ? props.data.MOTA : '')
            setStartDay(props.data.THOIGIANBATDAU ? props.data.THOIGIANBATDAU : '')
            setEndDay(props.data.THOIGIANKETTHUC ? props.data.THOIGIANKETTHUC : '')
            setHinhAnh(props.data.HINHANH ? props.data.HINHANH : '')
        }
    }, []);

    const onSelectedFile = (e) => {
        setHinhAnh(null)
        const selectedFiles = e.target.files;
        const selectedFileArrays = Array.from(selectedFiles);
        const imageURL = selectedFileArrays.map((file) => {
        return URL.createObjectURL(file)
        })
        setSelectedFile(imageURL)
        setHinhAnh(e.target.files[0])
    }
    return (
        <div className="ModalEvent">
            <div className="ModalEvent-content">
                <div className="modal-header">
                    <h3 className="text-center w-100">{props.title}</h3>
                </div>
                <div className="modal-body d-flex flex-column gap-3">
                    <div className='event-detail'>
                        <p className='title'>Hình ảnh:</p>
                        <div className='banner-event' style={{}}>
                            {selectedFile.length ?
                                <label className='image-upload' style={{border: '2px solid #000'}}>
                                    <img style={{width: '100%', height: '100%', borderRadius: '5px', 'objectFit':'contain'}} src={selectedFile} alt='' /> 
                                    <input
                                        style={{display: 'none'}}
                                        type='file'
                                        accept='image/png , image/jpg'
                                        onChange={(e) => onSelectedFile(e)}
                                    />
                                </label>
                                : 
                                <label className='image-upload'>
                                    <i class="bi bi-download" style={{fontSize: '40px'}}></i>
                                    <input
                                    style={{display: 'none'}}
                                    type='file'
                                    accept='image/png , image/jpg'
                                    onChange={(e) => onSelectedFile(e)}
                                    />
                                </label>
                            }
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                        <div className='event-detail'>
                            <p className='title'>Tên sự kiện:</p>
                            <input className='input' value={tenEvent} onChange={(e) => setTenEvent(e.target.value)}/>
                        </div>
                        <div className='event-detail'>
                            <p className='title'>Mô tả:</p>
                            <textarea className='input' value={mota} onChange={(e) => setMoTa(e.target.value)}/>
                        </div>
                        <div className='event-detail'>
                            <p className='title'>Thời gian bắt đầu:</p>
                            <input className='input' type='date' value={startDay} onChange={(e) => setStartDay(e.target.value)}/>
                        </div>
                        <div className='event-detail'>
                            <p className='title'>Thời gian kết thúc:</p>
                            <input className='input' type='date' value={endDay} onChange={(e) => setEndDay(e.target.value)}/>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between mt-2'>
                        {props.data ? <button className='button-delete'>Delete</button> :<p></p>}
                        <div className='d-flex flex-row justify-content-end gap-3'>
                            <button className='button-cancel' onClick={props.onClose}>Cancel</button>
                            <button className='button-solid'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEvent