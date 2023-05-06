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
                                    <tr style={{display:'block', }}>
                                        <th style={{border:'solid 1px #000', width:'10vw'}}>1</th>
                                        <th style={{border:'solid 1px #000', width:'10vw'}}>2</th>
                                        <th style={{border:'solid 1px #000', width:'10vw'}}>3</th>
                                        <th style={{border:'solid 1px #000', width:'10vw'}}>4</th>
                                        <th style={{border:'solid 1px #000', width:'10vw'}}>4</th>
                                    </tr>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
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