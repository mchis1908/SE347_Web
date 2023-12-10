import React, { useState, useEffect, useRef } from 'react';
import './AdminDepositPrintBarcode.css'
import { useReactToPrint } from 'react-to-print';
import Axios from "axios";
import Barcode from '../../../../common/Barcode/Barcode';

function AdminDepositPrintBarcode(props) {
  const [allsanpham, setAllSanPham] = useState(props.data)
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="AdminDepositPrintBarcode">
      <div className="AdminDepositPrintBarcode_modal">
        <div className="AdminDepositPrintBarcode_modal-header">
          <h3>{props.title}</h3>
        </div>
        <div className="AdminDepositPrintBarcode_modal-body" ref={componentRef}>
          {props.children}
          <div className='AdminDepositPrintBarcode_modal-body-header'>
            <th className='Label_PropDeposit' style={{maxWidth:'8vw',minWidth:'8vw',width:'fitContent'}}>STT</th>                    
            <th className='Label_PropDeposit'>Tên sản phẩm:</th>
            <th className='Label_PropDeposit'>Barcode sản phẩm:</th>
            <th className='Label_PropDeposit' style={{maxWidth:'15vw',minWidth:'15vw',width:'fitContent'}}>Giá</th>
          </div>
          <div className='AdminDepositPrintBarcode_inf' >
              {
                allsanpham.map((sp,index) => {
                    return (
                      <tr className='AdminDepositPrintBarcode-information-detail' >
                        <div className='AdminDepositPrintBarcode_modal-body-inf'>
                          <td style={{maxWidth:'8vw',minWidth:'8vw', width:'fitContent'}}>{index+1}</td>
                          <td>{sp.TENSANPHAM}</td>
                          <td><Barcode value={sp.MASANPHAM} height={20} width={1} fontSize={16}/></td>
                          <td style={{maxWidth:'15vw',minWidth:'15vw',width:'fitContent'}}>{sp.GIANHAN.toLocaleString('vi-VN', { maximumFractionDigits: 3 })}đ</td>
                        </div>
                      </tr>
                    )
                })
              }
            </div>
        </div>
        <div className='AdminDepositPrintBarcode_modal_Btn_Change'>
            <button className='AdminDepositPrintBarcode_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDepositPrintBarcode_modal_Btn_Change_Confirm' onClick={handlePrint}>In</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDepositPrintBarcode