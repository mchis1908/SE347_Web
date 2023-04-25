import React, { useState } from 'react';
import "./AdminChart.css";
import { Icon } from '@iconify/react';
import Menu from "../Menu/AdminMenu";
import Header from '../../../common/Header/Header';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { DatePicker } from 'antd';

function AdminChart() {
  const data1 = {
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
  const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgb(90, 106, 207)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: ['200','400','50','800','300','300','500','100','300','900','200','800'],
      }
    ]
  };
  const data3 = {
    labels: ['Bán hàng', 'Ký gửi'],
    datasets: [{
      label: 'Số hóa đơn',
      data: [300, 50],
      backgroundColor: [
        'rgb(249, 175, 94,0.54)',
        'rgb(90, 106, 207)'
      ],
      hoverOffset: 4
    }]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false // Tắt tự động điều chỉnh kích thước
  };
  return (
    <div className='AdminChart'>
      <Menu/>
      <Header title="BIỂU ĐỒ" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
      <div className='AdminChart_main'>
        <div className='AdminChart_Top'>
          <div className='AdminChart_Chart'>
            <div className='AdminChart_Chart_Label'>
              <div className='Chart_Name'>Biểu đồ sản phẩm nhận vào và bán ra</div>
              <div className='Chart_Date'>
                <p className='Chart_LabelDay' style={{color:'#35a2eb'}}>Tháng:</p>
                <DatePicker style={{width:'10vw',height:'3vh', marginLeft:'2vw'}} picker="month"/>
              </div>
            </div>
              <Line data={data1} options={options} />
          </div>
        </div>
{/* -------------------------------------------------------------- */}
        <div className="AdminChart_Bottom">
        <div className='AdminChart_Chart'>
            {/* <div className='Chart_Name'>Biểu đồ doanh thu theo tháng</div> */}
            <div className='AdminChart_Chart_Label'>
              <div className='Chart_Name'>Biểu đồ doanh thu theo tháng</div>
              <div className='Chart_Date'>
                <p className='Chart_LabelDay' style={{color:'#35a2eb'}}>Năm:</p>
                <DatePicker style={{width:'10vw',height:'3vh', marginLeft:'2vw'}} picker="year"/>
              </div>
            </div>
            {/* <DatePicker style={{width:'10vw',height:'3vh', marginLeft:'2vw'}} picker="year"/> */}
            <Bar data={data2} options={options} />
          </div>
          <div className='AdminChart_ProductPercents'>
            <div className='AdminChart_ProductPercents_title'>
              <div className='ProductPercents_Label'>Số hóa đơn ngày: </div>
              <DatePicker style={{width:'8vw',height:'3vh', marginLeft:'1vw'}}/>
            </div>
            <Doughnut data={data3} options={options} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminChart