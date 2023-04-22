import React, { useState, useEffect } from 'react';
import './AdminDetailInvoice.css'
import Axios from "axios";

function AdminDetailInvoice(props) {
  let [sanphams, setSanPham] = useState([])
  const getSANPHAM = async () => {
    try {
        const res = await Axios.get('http://localhost:8000/v1/sanpham/getsanphambymakygui/'+ props.data.MAHOADON)
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
          console.log('a',hoadons[0])

      }
      catch (error) {
          console.log(error.message)
      }
  }
  useEffect(() => {
    getSANPHAM();
    getHOADON();
  }, [])

  let total =[0,0,0];
  const calculateTotal = () => {
    for(let i = 0; i < sanphams.length; i++) {
      total[0]+=sanphams[i].GIANHAN;
      total[1]+=sanphams[i].HOAHONG;
      total[2]+=sanphams[i].TIENKHACHNHAN;
    }
  };
  return (
    <div className="AdminDetailInvoice">
      <div className="AdminDetailInvoice_modal">
        <div className="AdminDetailInvoice_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminDetailInvoice_Bottom">
            <div className='AdminDetailInvoice_Detail'>
              <div className='AdminDetailInvoice_Detail_Content_Date'>
                <p className='AdminDetailInvoice_Detail_Content_LabelDay'>Ngày lập hóa đơn: </p>
                <p className='AdminDetailInvoice_Detail_Content_Calendar'>{hoadons[0].NGAYTAODON}</p>
              </div>
              <div className='AdminDetailInvoice_Detail_Content_Date'>
                <p className='AdminDetailInvoice_Detail_Content_LabelDay'>Khách hàng: </p>
                <p className='AdminDetailInvoice_Detail_Content_Customer'>{hoadons[0].SDT}</p>
              </div>
              <p className='AdminDetailInvoice_Detail_ProductInf_Label'>Sản phẩm:</p>
              <div className='AdminDetailInvoice_ProductInf'>
                <td style={{fontWeight:'500'}}>Hình ảnh</td>
                <td style={{fontWeight:'500'}}>STT</td>
                <td style={{fontWeight:'500'}}>Tên sản phẩm</td>
                <td style={{fontWeight:'500'}}>Trạng thái</td>
                <td style={{fontWeight:'500'}}>Giá bán</td>
                <td style={{fontWeight:'500'}}>Hoa hồng</td>
                <td style={{fontWeight:'500'}}>Số tiền nhận</td>
              </div>
            <div className='AdminDetailInvoice_ProductList'>
              {
                sanphams.map((sanphams,index) => {
                    return (
                      <div className='AdminDetailInvoice_ProductInf'>
                        {/* <td></td>                     */}
                        <td><img style={{width:'50px', height:'40px'}} src={"http://localhost:8000/"+sanphams.HINHANH}/></td>
                        <td>{index+1}</td>
                        <td>{sanphams.TENSANPHAM}</td>
                        <td>{sanphams.TRANGTHAI}</td>
                        <td>{sanphams.GIANHAN}</td>
                        <td>{sanphams.HOAHONG}</td>
                        <td>{sanphams.TIENKHACHNHAN}</td>
                      </div>
                    )
                })
              }
            </div>
              <div className='AdminDetailInvoice_ProductInf'>
                <td style={{fontWeight:'500'}}>Số lượng:</td>                    
                <td style={{fontWeight:'500'}}>{sanphams.length}</td>                    
                <td></td>
                <td style={{fontWeight:'500'}}>Tổng tiền:</td>
                {
                  calculateTotal()
                }
                <td style={{fontWeight:'500'}}>{total[0]}</td>
                <td style={{fontWeight:'500'}}>{total[1]}</td>
                <td style={{fontWeight:'500'}}>{total[2]}</td>
              </div>     
            </div> 
          {/* -------------------------------------------------------------- */}
        </div>
        <div className='AdminDetailInvoice_modal_Btn_Change'>
            <button className='AdminDetailInvoice_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailInvoice_modal_Btn_Change_Confirm'>In barcode sản phẩm</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailInvoice