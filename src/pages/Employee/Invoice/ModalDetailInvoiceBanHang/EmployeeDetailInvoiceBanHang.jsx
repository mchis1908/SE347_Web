import React, { useState, useEffect, useRef } from 'react';
import './EmployeeDetailInvoiceBanHang.css'
import Axios from "axios";
import { useReactToPrint } from 'react-to-print';
import Barcode from '../../../../common/Barcode/Barcode';

function EmployeeDetailInvoiceBanHang(props) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  let [sanphams, setSanPham] = useState([])
  const getSANPHAM = async () => {
    try {
        const res = await Axios.get('http://localhost:8000/v1/sanpham/getsanphambymabanhang/'+ props.data.MAHOADON)
        setSanPham(res.data);
        sanphams=res.data;
    }
    catch (error) {
        console.log(error.message)
    }
  }
  let [hoadons, setHoaDon] = useState([''])
  const getHOADON = async () => {
      try {
          const res = await Axios.get('http://localhost:8000/v1/hoadon/gethoadon/'+ props.data.MAHOADON)
          setHoaDon(res.data);
          hoadons=res.data;
      }
      catch (error) {
          console.log(error.message)
      }
  }
  useEffect(() => {
    getSANPHAM();
    getHOADON();
  }, [])
  const calculateTotal = () => {
    let total =0;
    for(let i = 0; i < sanphams.length; i++) {
      total+=sanphams[i].GIANHAN;
    }
    return total;
  };
  return (
    <div className="EmployeeDetailInvoiceBanHang">
      <div className="EmployeeDetailInvoiceBanHang_modal">
        <div className="EmployeeDetailInvoiceBanHang_modal-header">
          <h3>{props.title}</h3>
          <button className='button-exit' onClick={props.onClose}>X</button>
        </div>
        <div className="EmployeeDetailInvoiceBanHang_Bottom">
          <div ref={componentRef}>
            <div className='EmployeeDetailInvoiceBanHang_Detail'>
              <div className='EmployeeDetailInvoiceBanHang_Detail_Content_Date'>
                <p className='EmployeeDetailInvoiceBanHang_Detail_Content_LabelDay'>Ngày lập hóa đơn: </p>
                <p className='EmployeeDetailInvoiceBanHang_Detail_Content_Calendar'>{hoadons.NGAYTAODON}</p>
              </div>
              <div className='EmployeeDetailInvoiceBanHang_Detail_Content_Date'>
                <p className='EmployeeDetailInvoiceBanHang_Detail_Content_LabelDay'>Khách hàng: </p>
                <p className='EmployeeDetailInvoiceBanHang_Detail_Content_Customer'>{hoadons.SDT}</p>
              </div>
              <div className='EmployeeDetailInvoiceBanHang_Detail_Content_Date1'>
                <p className='EmployeeDetailInvoiceBanHang_Detail_Content_LabelDay1'>Mã hóa đơn: </p>
                <Barcode value={hoadons.MAHOADON} height={20} width={1} fontSize={16}/>

              </div>
              <div className='EmployeeDetailInvoiceBanHang_ProductInf'>
                <td style={{fontWeight:'500'}}>Hình ảnh</td>
                <td style={{fontWeight:'500'}}>STT</td>
                <td style={{fontWeight:'500'}}>Tên sản phẩm</td>
                <td style={{fontWeight:'500'}}>Mã đơn gửi</td>
                <td style={{fontWeight:'500'}}>Giá bán</td>
              </div>
            <div className='EmployeeDetailInvoiceBanHang_ProductList'>
              {
                sanphams.map((sanphams,index) => {
                    return (
                      <div className='EmployeeDetailInvoiceBanHang_ProductInf'>
                        {/* <td></td>                     */}
                        <td><img style={{width:'50px', height:'40px'}} src={"http://localhost:8000/"+sanphams.HINHANH}/></td>
                        <td>{index+1}</td>
                        <td>{sanphams.TENSANPHAM}</td>
                        <td>{sanphams.MAHOADONKG}</td>
                        <td>{sanphams.GIANHAN.toLocaleString('vi-VN', { maximumFractionDigits: 3 })}đ</td>
                      </div>
                    )
                })
              }
            </div>
              <div className='EmployeeDetailInvoiceBanHang_ProductInf'>
                <td style={{fontWeight:'500'}}>Số lượng:</td>                    
                <td style={{fontWeight:'500'}}>{sanphams.length}</td>                    
                <td></td>
                <td style={{fontWeight:'500'}}>Tổng tiền:</td>
                <td style={{fontWeight:'500'}}>{calculateTotal().toLocaleString('vi-VN', { maximumFractionDigits: 3 })}đ</td>
              </div>     
            </div> 
          </div>

            
          {/* -------------------------------------------------------------- */}
        </div>
        <div className='EmployeeDetailInvoiceBanHang_modal_Btn_Change'>
            <button className='EmployeeDetailInvoiceBanHang_modal_Btn_Change_Cancel' onClick={props.onClose}>Thoát</button>
            <button className='EmployeeDetailInvoiceBanHang_modal_Btn_Change_Confirm' onClick={handlePrint}>In hóa đơn</button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetailInvoiceBanHang