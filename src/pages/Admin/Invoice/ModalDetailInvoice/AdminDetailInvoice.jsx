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
  const currentDate = new Date();
  const handleConfirm = () => {
    if(props.data.TRANGTHAI==='Đã thanh toán') 
    {
      alert('Hóa đơn đã được thanh toán rồi')
      return
    }
    const answer = window.confirm("Xác nhận thanh toán cho khách hàng.",);
    if (answer) {
      for(let i = 0; i < sanphams.length; i++) {
        if(sanphams[i].TRANGTHAI==='Chưa bán')
        {
          Axios.patch('http://localhost:8000/v1/sanpham/updatesanpham/'+ sanphams[i].MASANPHAM,{
            TRANGTHAI: 'Đã trả lại'
          })
        }
      }
      Axios.patch('http://localhost:8000/v1/hoadon/updatehoadon/'+ props.data.MAHOADON,{
        TRANGTHAI: 'Đã thanh toán',
        NGAYTHANHTOAN: currentDate.toLocaleString()
      })
      window.location.reload()
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
                <p className='AdminDetailInvoice_Detail_Content_LabelDay'>Ngày thanh toán: </p>
                <p className='AdminDetailInvoice_Detail_Content_Calendar'>{hoadons[0].NGAYTHANHTOAN}</p>
              </div>
              <div className='AdminDetailInvoice_Detail_Content_Date'>
                <p className='AdminDetailInvoice_Detail_Content_LabelDay'>Khách hàng: </p>
                <p className='AdminDetailInvoice_Detail_Content_Customer'>{hoadons[0].SDT}</p>
              </div>
              <div className='AdminDetailInvoice_Detail_Content_Date'>
                <p className='AdminDetailInvoice_Detail_Content_LabelDay'>Mã hóa đơn:</p>
                <p className='AdminDetailInvoice_Detail_Content_Customer'>{hoadons[0].MAHOADON}</p>
              </div>
              <div className='AdminDetailInvoice_ProductInf'>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Hình ảnh</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>STT</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Tên sản phẩm</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Trạng thái</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Giá bán</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Hoa hồng</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Số tiền nhận</td>
              </div>
            <div className='AdminDetailInvoice_ProductList'>
              {
                sanphams.map((sanphams,index) => {
                    return (
                      <div className='AdminDetailInvoice_ProductInf'>
                        {/* <td></td>                     */}
                        <td><img style={{width:'50px', height:'40px'}} src={"http://localhost:8000/"+sanphams.HINHANH}/></td>
                        <td style={{fontSize:'16px'}}>{index+1}</td>
                        <td style={{fontSize:'16px'}}>{sanphams.TENSANPHAM}</td>
                        <td style={{fontSize:'16px'}}>{sanphams.TRANGTHAI}</td>
                        <td style={{fontSize:'16px'}}>{sanphams.GIANHAN}</td>
                        <td style={{fontSize:'16px'}}>{sanphams.HOAHONG}</td>
                        <td style={{fontSize:'16px'}}>{sanphams.TIENKHACHNHAN}</td>
                      </div>
                    )
                })
              }
            </div>
              <div className='AdminDetailInvoice_ProductInf'>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Số lượng:</td>                    
                <td style={{fontWeight:'500', fontSize:'16px'}}>{sanphams.length}</td>                    
                <td></td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Tổng tiền:</td>
                {
                  calculateTotal()
                }
                <td style={{fontWeight:'500', fontSize:'16px'}}>{total[0]}</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>{total[1]}</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>{total[2]}</td>
              </div>     
            </div> 
          {/* -------------------------------------------------------------- */}
        </div>
        <div className='AdminDetailInvoice_modal_Btn_Change'>
            <button className='AdminDetailInvoice_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailInvoice_modal_Btn_Change_PrintBarcode'>In barcode sản phẩm</button>
            <button className='AdminDetailInvoice_modal_Btn_Change_Confirm' onClick={handleConfirm}>Thanh toán cho khách</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailInvoice