import React, { useState, useEffect } from 'react';
import './AdminDetailInvoice.css'
import Axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function AdminDetailInvoice(props) {
  const handlePrint = () => {
    const input = document.getElementById('my-html');
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape', // Thiết lập chiều ngang
      unit: 'mm', // Thiết lập đơn vị đo
      format: 'a2', // Thiết lập kích thước trang in
    });
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('my-pdf.pdf');
  });
  };

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
      alert('Hóa đơn đã được thanh toán rồi')
      return
    }
    const answer = window.confirm("Bạn có chắc chắn thanh toán hóa đơn cho khách hàng không.",);
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
        NGAYTHANHTOAN: currentDate.toLocaleString('en-AU', options)
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
    <div className="AdminDetailInvoice" >
      <div className="AdminDetailInvoice_modal" >
        <div className="AdminDetailInvoice_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="AdminDetailInvoice_Bottom" id="my-html">
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
            <button className='AdminDetailInvoice_modal_Btn_Change_PrintBarcode' onClick={handlePrint}>In barcode sản phẩm</button>
            <button className='AdminDetailInvoice_modal_Btn_Change_Confirm' onClick={handleConfirm}>Thanh toán cho khách</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailInvoice