import React from 'react'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import './AdminReport.css'
import { Button, DatePicker } from 'antd'
import Table from 'rc-table'

const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

function AdminReport() {
    return (
      <div className='AdminReport'>
        <Menu/>
        <Header title="BÁO CÁO" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
        <div className='AdminAccount_main'>
            <div className='AdminReport_information'>
                
                {/* Doanh thu sản phẩm theo tháng */}
                <div style={{
                    // display: "flex",
                    backgroundColor:'#fff',
                    margin:'5vh 2vw',
                    borderRadius: '10px',
                }}>
                    <div style={{display: "flex", marginLeft : "50px"}}> 
                        <p style={{lineHeight : "6px"}}>Doanh thu sản phẩm theo tháng: </p>
                        <DatePicker style={{marginLeft : "20px", marginTop : "6px"}} onChange={onChange} picker="month"/>
                    </div>
                    <div style={{minHeight :'16vh',maxHeight :'16vh', overflow:'auto', padding : '15px'}}>
                        <table >
                            <tr>
                                <th  style={{border: '1px solid #000', width : '55px'}}>STT</th>
                                <th  style={{border: '1px solid #000'}}>Mã sản phẩm</th>
                                <th  style={{border: '1px solid #000'}}>Mã Hóa Đơn</th>
                                <th style={{border: '1px solid #000'}}>Hoa Hồng</th>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>1</td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>120000 Đ</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>2</td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000', paddingLeft : '20px', width : '336px'}}>320000 Đ</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>2</td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000', paddingLeft : '20px', width : '336px'}}>320000 Đ</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000', textAlign: 'center'}}>Tổng: </td>
                                <td style={{border: '1px solid #000', paddingLeft : '20px', width : '336px'}}>320000 Đ</td>
                            </tr>
                        </table>
                    </div>
                    

                </div>

                {/* Bảng lương nhân viên */}
                <div style={{
                    // display: "flex",
                    backgroundColor:'#fff',
                    height :'22vh',
                    margin:'5vh 2vw',
                    borderRadius: '10px'
                }}>

                    <div style={{display: "flex", marginLeft : "50px"}}> 
                        <p style={{lineHeight : "6px"}}>Bảng lương nhân viên: </p>
                    </div>

                    <div style={{padding : '15px'}}>
                        <table>
                            <tr>
                                <th  style={{border: '1px solid #000'}}>STT</th>
                                <th  style={{border: '1px solid #000'}}>Tên Nhân Viên</th>
                                <th  style={{border: '1px solid #000'}}>Lương theo giờ</th>
                                <th style={{border: '1px solid #000'}}>Lương cơ bản</th>
                                <th  style={{border: '1px solid #000'}}>Số giờ làm việc</th>
                                <th style={{border: '1px solid #000'}}>Tổng lương</th>
                                
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>1</td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>120000 Đ</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>2</td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000', paddingLeft : '20px', width : '336px'}}>320000 Đ</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000', textAlign: 'center'}}>Tổng: </td>
                                <td style={{border: '1px solid #000', paddingLeft : '20px', width : '336px'}}>320000 Đ</td>
                            </tr>

                        </table>

                    </div>
                </div>

                {/* Sản phẩm ký gửi tồn kho quá 60 ngày */}
                <div style={{
                    // display: "flex",
                    backgroundColor:'#fff',
                    height :'20vh',
                    margin:'5vh 2vw',
                    borderRadius: '10px'
                }}>
                    <div style={{
                        display: "flex", 
                        marginLeft : "50px"
                    }}> 
                        <p style={{
                            lineHeight : "6px"
                        }}>Sản phẩm ký gửi tồn kho quá 60 ngày: </p>
                    </div>

                    <div style={{padding: '15px'}}>
                        <table>
                            <tr>
                                <th  style={{border: '1px solid #000'}}>STT</th>
                                <th  style={{border: '1px solid #000'}}>Mã sản phẩm</th>
                                <th  style={{border: '1px solid #000'}}>Mã Hóa Đơn Ký gửi</th>
                                <th style={{border: '1px solid #000'}}>Khách Hàng</th>
                                <th style={{border: '1px solid #000'}}>Ngày Ký Gửi</th>
                                
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>1</td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>1-5-2023</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>2</td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000'}}></td>
                                <td style={{border: '1px solid #000', paddingLeft : '20px'}}>30-04-2023</td>
                            </tr>

                        </table>
                    </div>
                </div>

                <Button style={{left : '1210px', background: '#18884F', color: '#FFFFFF'}}>
                    Xuất báo cáo
                </Button>
            </div>
        </div>
      </div>
    )
  }
  
  export default AdminReport