import React, { useState } from 'react';
import "./AdminRevenue.css";
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/AdminMenu";
import Header from '../../../common/Header/Header';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


function AdminRevenue() {
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
    labels: ['January', 'February'],
    datasets: [{
      label: 'My First Dataset',
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
    
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };
  return (
    <div className='AdminRevenue'>
      <Menu/>
      <Header/>
      <div className='AdminRevenue_main'>
        <div className='AdminRevenue_Top'>
          <div className='AdminRevenue_Chart'>
            <div className='AdminRevenue_Chart_Label'>
            <div className='Chart_Name'>Biểu đồ sản phẩm nhận vào và bán ra</div>
            <div className='Chart_Date'>
              <p className='Chart_LabelDay'>Ngày:</p>
              <button className='Chart_Calendar' onClick={toggleCalendar}>{selectedDate.toLocaleDateString()}</button>
              {showCalendar && (
                <Calendar
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              )}
            </div>
            </div>
              <Line data={data1} options={options} />
          </div>
        </div>
{/* -------------------------------------------------------------- */}
        <div className="AdminRevenue_Bottom">
          <div className='AdminRevenue_Chart'>
            <div className='Chart_Name'>Biểu đồ doanh thu theo tháng</div>
            <Bar data={data2} options={options} />
          </div>
          <div className='AdminRevenue_ProductPercents'>
            <div className='ProductPercents_Label'>Biểu đồ sản phẩm</div>
            <Doughnut data={data3} options={options} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminRevenue