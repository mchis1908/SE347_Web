import React, { useEffect, useState } from 'react'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { NavLink } from 'react-router-dom';
import './AdminReport.css'
import { Button, DatePicker } from 'antd'
import Axios from "axios";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function AdminReport() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const hoadons=['1','2','3','4']
    return (
      <div className='AdminReport'>
        <Menu/>
        <Header title="BÁO CÁO" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
        <div className='AdminReport_main'>
            <div className='AdminReport_information'>
                <Box sx={{ width: '84vw', typography: 'body1', margin:'2vh 2vw', background:'#fff' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Doanh Thu Sản Phẩm" value="1" />
                            <Tab label="Bảng Lương" value="2" />
                            <Tab label="Sản Phẩm Quá Hạn" value="3" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div>
                                <table>
                                    <tr style={{display:'flex', flexDirection:'row' }}>
                                        <th style={{border:'solid 1px #000', width:'20vw', fontSize:'14px'}}>STT</th>
                                        <th style={{border:'solid 1px #000', width:'20vw', fontSize:'14px'}}>Mã Sản Phẩm</th>
                                        <th style={{border:'solid 1px #000', width:'20vw', fontSize:'14px'}}>Mã Hóa Đơn</th>
                                        <th style={{border:'solid 1px #000', width:'20vw', fontSize:'14px'}}>Hoa Hồng</th>
                                    </tr>
                                    <div>
                                    {
                                        hoadons.map(hoadons => {
                                        return (
                                            <tr style={{display:'flex', flexDirection:'row' }}>
                                                <td style={{border:'solid 1px #000', width:'20vw', fontSize:'14px', textAlign:'center'}}>1</td>
                                                <td style={{border:'solid 1px #000', width:'20vw', fontSize:'14px', textAlign:'center'}}>123456</td>
                                                <td style={{border:'solid 1px #000', width:'20vw', fontSize:'14px', textAlign:'center'}}>456789</td>
                                                <td style={{border:'solid 1px #000', width:'20vw', fontSize:'14px', textAlign:'center'}}>300000</td>
                                            </tr>
                                        )})
                                    }
                                    </div>
                                    <tr style={{display:'flex', flexDirection:'row' }}>
                                        <td style={{border:'solid 1px #000', width:'20vw', fontSize:'14px', textAlign:'center'}}>Tổng:</td>
                                        <td style={{border:'solid 1px #000', width:'20vw', fontSize:'14px', textAlign:'center'}}></td>
                                        <td style={{border:'solid 1px #000', width:'20vw', fontSize:'14px', textAlign:'center'}}></td>
                                        <td style={{border:'solid 1px #000', width:'20vw', fontSize:'14px', textAlign:'center'}}>100000</td>
                                    </tr>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div>
                                <table>
                                    <tr style={{display:'flex', flexDirection:'row' }}>
                                        <th style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px'}}>STT</th>
                                        <th style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px'}}>Tên nhân viên</th>
                                        <th style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px'}}>Lương theo giờ</th>
                                        <th style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px'}}>Lương cơ bản</th>
                                        <th style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px'}}>Số giờ làm việc</th>
                                        <th style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px'}}>Tổng lương</th>
                                    </tr>
                                    <div>
                                    {
                                        hoadons.map(hoadons => {
                                        return (
                                            <tr style={{display:'flex', flexDirection:'row' }}>
                                                <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}>1</td>
                                                <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}>123456</td>
                                                <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}>456789</td>
                                                <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}>456789</td>
                                                <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}>456789</td>
                                                <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}>300000</td>
                                            </tr>
                                        )})
                                    }
                                    </div>
                                    <tr style={{display:'flex', flexDirection:'row' }}>
                                        <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}>Tổng:</td>
                                        <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}></td>
                                        <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}></td>
                                        <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}></td>
                                        <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}></td>
                                        <td style={{border:'solid 1px #000', width:'13.3vw', fontSize:'14px', textAlign:'center'}}>100000</td>
                                    </tr>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <div>
                                <table>
                                    <tr style={{display:'flex', flexDirection:'row' }}>
                                        <th style={{border:'solid 1px #000', width:'16vw', fontSize:'14px'}}>STT</th>
                                        <th style={{border:'solid 1px #000', width:'16vw', fontSize:'14px'}}>Mã Sản Phẩm</th>
                                        <th style={{border:'solid 1px #000', width:'16vw', fontSize:'14px'}}>Mã Hóa Đơn Ký gửi</th>
                                        <th style={{border:'solid 1px #000', width:'16vw', fontSize:'14px'}}>Khách Hàng</th>
                                        <th style={{border:'solid 1px #000', width:'16vw', fontSize:'14px'}}>Ngày Ký Gửi</th>
                                    </tr>
                                    <div>
                                    {
                                        hoadons.map(hoadons => {
                                        return (
                                            <tr style={{display:'flex', flexDirection:'row' }}>
                                                <td style={{border:'solid 1px #000', width:'16vw', fontSize:'14px', textAlign:'center'}}>1</td>
                                                <td style={{border:'solid 1px #000', width:'16vw', fontSize:'14px', textAlign:'center'}}>123456</td>
                                                <td style={{border:'solid 1px #000', width:'16vw', fontSize:'14px', textAlign:'center'}}>456789</td>
                                                <td style={{border:'solid 1px #000', width:'16vw', fontSize:'14px', textAlign:'center'}}>456789</td>
                                                <td style={{border:'solid 1px #000', width:'16vw', fontSize:'14px', textAlign:'center'}}>300000</td>
                                            </tr>
                                        )})
                                    }
                                    </div>
                                </table>
                            </div>
                        </TabPanel>
                    </TabContext>
                </Box>
                <Button style={{left : '1210px', background: '#18884F', color: '#FFFFFF'}}>
                    Xuất báo cáo
                </Button>
            </div>
        </div>
      </div>
    )
  }
  
  export default AdminReport