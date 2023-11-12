import React, { useState, useEffect, useRef  } from 'react';
import { useReactToPrint } from 'react-to-print';
import './CustomerDetailInvoice.css'
import Axios from "axios";
import Barcode from '../../../../common/Barcode/Barcode';
import {message } from 'antd';

function CustomerDetailInvoice(props) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  let [sanphamdaban, setSanPhamDaBan] = useState([])
  const handleConfirm = async () => {
    if(props.data.TRANGTHAI==='Đã thanh toán') 
    {
      // alert('Hóa đơn đã được thanh toán rồi')
      message.warning('Hóa đơn đã được thanh toán rồi')
      return
    }
    const answer = window.confirm("Bạn có chắc chắn trả tiền cho khách hàng. Cửa hàng sẽ nhận được hoa hồng cho từng sản phẩm đã bán. Vui lòng xác nhận với khách hàng lại một lần nữa",);
    if (answer) {
      for(let i = 0; i < sanphams.length; i++) {
        if(sanphams[i].TRANGTHAI==='Chưa bán')
        {
          Axios.patch('http://localhost:8000/v1/sanpham/updatesanpham/'+ sanphams[i].MASANPHAM,{
            TRANGTHAI: 'Đã trả lại'
          })
        }
        else 
        sanphamdaban.push(sanphams[i])
      }
      console.log(sanphamdaban)
      Axios.patch('http://localhost:8000/v1/hoadon/updatehoadon/'+ props.data.MAHOADON,{
        TRANGTHAI: 'Đã thanh toán',
        NGAYTHANHTOAN: currentDate.toLocaleString('en-AU', options).replaceAll('/', '-')
      })
      // ---------Xử lý doanh thu tháng---------
    const formatThang = currentDate.toLocaleString('en-AU', options).replaceAll('/', '-').substring(3,10);
    // console.log(formatNgay)
    try {
      const response1 = await Axios.get('http://localhost:8000/v1/baocaodtthang/getBaoCaoDTThang/' + formatThang);
      const bct = response1.data;
      const res = await Axios.patch(
        'http://localhost:8000/v1/baocaodtthang/updateBaoCaoDTThang/' + formatThang,
        {
          DOANHTHU: bct.DOANHTHU + total[1],
          SANPHAM: [...bct.SANPHAM, ...sanphamdaban]
        }
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Axios.post('http://localhost:8000/v1/baocaodtthang/themBaoCaoDTThang/', {
          THOIGIAN: formatThang,
          DOANHTHU: total[1],
          SANPHAM: sanphamdaban,
        });
        console.log('Chưa có báo cáo, hệ thống sẽ tạo báo cáo');
      } else {
        console.log('Lỗi khi gửi yêu cầu Axios: ', error.message);
      }
    }
      window.location.reload()
    }
  };
  return (
    <div className="CustomerDetailInvoice" >
      <div className="CustomerDetailInvoice_modal" >
        <div className="CustomerDetailInvoice_modal-header">
          <h3>{props.title}</h3>
          <button className='button-exit' onClick={props.onClose}>X</button>
        </div>
        <div className="CustomerDetailInvoice_Bottom">
          <div ref={componentRef}>
            <div className='CustomerDetailInvoice_Detail'>
              <div className='CustomerDetailInvoice_Detail_Content_Date'>
                <p className='CustomerDetailInvoice_Detail_Content_LabelDay'>Ngày lập hóa đơn: </p>
                <p className='CustomerDetailInvoice_Detail_Content_Calendar'>{hoadons.NGAYTAODON}</p>
              </div>
              <div className='CustomerDetailInvoice_Detail_Content_Date'>
                <p className='CustomerDetailInvoice_Detail_Content_LabelDay'>Ngày thanh toán: </p>
                <p className='CustomerDetailInvoice_Detail_Content_Calendar'>{hoadons.NGAYTHANHTOAN}</p>
              </div>
              <div className='CustomerDetailInvoice_Detail_Content_Date'>
                <p className='CustomerDetailInvoice_Detail_Content_LabelDay'>Khách hàng: </p>
                <p className='CustomerDetailInvoice_Detail_Content_Customer'>{hoadons.SDT}</p>
              </div>
              <div className='CustomerDetailInvoice_Detail_Content_Date1'>
                <p className='CustomerDetailInvoice_Detail_Content_LabelDay1'>Mã hóa đơn:</p>
                <Barcode value={hoadons.MAHOADON} height={20} width={1} fontSize={16}/>
              </div>
              <div className='CustomerDetailInvoice_ProductInf'>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Hình ảnh</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>STT</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Tên sản phẩm</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Trạng thái</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Giá bán</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Hoa hồng</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Số tiền nhận</td>
              </div>
            <div className='CustomerDetailInvoice_ProductList' >
              {
                sanphams.map((sanphams,index) => {
                    return (
                      <div className='CustomerDetailInvoice_ProductInf'>
                        {/* <td></td>                     */}
                        <td><img style={{width:'50px', height:'40px', 'objectFit':'cover'}} src={"http://localhost:8000/"+sanphams.HINHANH}/></td>
                        <td style={{fontSize:'16px'}}>{index+1}</td>
                        <td style={{fontSize:'16px'}}>{sanphams.TENSANPHAM}</td>
                        <td style={{fontSize:'16px'}}>{sanphams.TRANGTHAI}</td>
                        <td style={{fontSize:'16px'}}>{sanphams.GIANHAN.toLocaleString('vi-VN', { maximumFractionDigits: 3 })}đ</td>
                        <td style={{fontSize:'16px'}}>{sanphams.HOAHONG.toLocaleString('vi-VN', { maximumFractionDigits: 3 })}đ</td>
                        <td style={{fontSize:'16px'}}>{sanphams.TIENKHACHNHAN.toLocaleString('vi-VN', { maximumFractionDigits: 3 })}đ</td>
                      </div>
                    )
                })
              }
            </div>
              <div className='CustomerDetailInvoice_ProductInf'>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Số lượng:</td>                    
                <td style={{fontWeight:'500', fontSize:'16px'}}>{sanphams.length}</td>                    
                <td></td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>Tổng tiền:</td>
                {
                  calculateTotal()
                }
                <td style={{fontWeight:'500', fontSize:'16px'}}>{total[0].toLocaleString('vi-VN', { maximumFractionDigits: 3 })}đ</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>{total[1].toLocaleString('vi-VN', { maximumFractionDigits: 3 })}đ</td>
                <td style={{fontWeight:'500', fontSize:'16px'}}>{total[2].toLocaleString('vi-VN', { maximumFractionDigits: 3 })}đ</td>
              </div>     
            </div> 
          </div>
          {/* -------------------------------------------------------------- */}
          <div className='CustomerDetailInvoice_modal_Btn_Change'>
            <button className='CustomerDetailInvoice_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='CustomerDetailInvoice_modal_Btn_Change_PrintInvoice' onClick={handlePrint}>In hóa đơn</button>
            {/* <button className='CustomerDetailInvoice_modal_Btn_Change_PrintBarcode' onClick={handlePrint}>In barcode sản phẩm</button> */}
            <button className='CustomerDetailInvoice_modal_Btn_Change_Confirm' onClick={handleConfirm} style={{display: props.db ? 'none' : 'block'}}>Thanh toán cho khách</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CustomerDetailInvoice