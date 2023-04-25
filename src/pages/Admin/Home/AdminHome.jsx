import React, { useState } from 'react';
import "./AdminHome.css"
import { Icon } from '@iconify/react';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Link, Navigate } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import { DatePicker } from 'antd';

// function AdminHome({ isAuthenticated }) {
//   if (!isAuthenticated) {
//     return <Navigate to="/" />;
//   }
function AdminHome() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Sản phẩm bán được',
        data: ['100','200','500','400','600','100','100','200','500','400','600','100'],
        borderColor: 'rgba(6, 170, 171)',
        backgroundColor: 'rgba(6, 170, 171, 0.5)',
      },
      {
        label: 'Sản phẩm nhận ký gửi',
        data: ['200','400','50','800','300','300','500','100','300','900','200','800'],
        borderColor: 'rgb(255, 119, 119)',
        backgroundColor: 'rgb(255, 119, 119, 0.5)',
      },
    ],
  };
  console.log('user',localStorage.getItem('user'))
  const options = {
    responsive: true,
    maintainAspectRatio: false // Tắt tự động điều chỉnh kích thước
  };
  const customers = [
    {
      name: 'Yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Minh Chí',
      mail:'20521130@gmail.com',
      phone:'0376488362',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Ronaldo',
      mail:'20521130@gmail.com',
      phone:'0376488367',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Messi',
      mail:'20521130@gmail.com',
      phone:'0376488368',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Minh Chí',
      mail:'20521130@gmail.com',
      phone:'0376488362',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Ronaldo',
      mail:'20521130@gmail.com',
      phone:'0376488367',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Messi',
      mail:'20521130@gmail.com',
      phone:'0376488368',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Minh Chí',
      mail:'20521130@gmail.com',
      phone:'0376488362',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Ronaldo',
      mail:'20521130@gmail.com',
      phone:'0376488367',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Messi',
      mail:'20521130@gmail.com',
      phone:'0376488368',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
]
  const currentYear = new Date().getFullYear();
  const yearList = [];
  for (let i = 1900; i <= currentYear; i++) {
    yearList.push(<option key={i} value={i}>{i}</option>);
  }
  return (
    <div className='AdminHome'>
      <Menu/>
      <Header title="TRANG CHỦ" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
      <div className='AdminHome_main'>
        <div className='AdminHome_Overview'>
        <div className='Overview_block1'>
            <div className='Block_top'>
              <Icon icon="fluent-mdl2:product-variant" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom' style={{color:'#517dff'}}>Sản phẩm đã nhận hôm nay</p>
          </div>
          <div className='Overview_block2'>
            <div className='Block_top'>
              <Icon icon="la:file-invoice-dollar" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom' style={{color:'#ff333f'}}>Số hóa đơn ký gửi hôm nay</p>
          </div>
          <div className='Overview_block3'>
            <div className='Block_top'>
              <Icon icon="clarity:employee-group-line" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom' style={{color:'#ff9533'}}>Nhân viên của cửa hàng</p>
          </div>
          <div className='Overview_block4'>
            <div className='Block_top'>
              <Icon icon="la:file-invoice-dollar" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom' style={{color:'#30d559'}}>Số hóa đơn bán hàng hôm nay</p>
          </div>
        </div>
{/* -------------------------------------------------------------- */}
        <div className="AdminHome_Bottom">
          <div className='AdminHome_Chart'>
            <div className='AdminHome_Chart_Label'>
            <div className='Chart_Name'>Biểu đồ sản phẩm ký gửi và bán ra</div>
            <div className='Chart_Date'>
              <p className='Chart_LabelDay' style={{color:'#35a2eb'}}>Tháng:</p>
              <DatePicker style={{width:'10vw',height:'3vh', marginLeft:'2vw'}} picker="month"/>
            </div>
            </div>
            {/* -------------------------------------------------------------- */}
            <Line data={data} options={options} />
          </div>
          <div className='AdminHome_CustomerRecent'>
            <div className='CustomerRecent_Label'>Khách hàng gần đây</div>
              <div className='CustomerRecent_Info_List'>
                {
                  customers.map((customers,index) => {
                    if (index < 10) {
                      return (
                                <div className='CustomerRecent_Info'>
                                  <img className='CustomerRecent_Avt' src={customers.avt} alt="image"/>
                                  <div className='CustomerRecent_Name'>{customers.name}</div>
                                  <div className='CustomerRecent_Phone'>{customers.phone}</div>
                                </div>
                        )
                    }
                    })
                }
              </div>
            <Link to='/admin/customer'>
              <div className='CustomerRecent_ViewMore'>Xem thêm <Icon icon="ic:round-read-more" color="#878787" /></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome