import React, { useState } from 'react';
import "./AdminRevenue.css"
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Sản phẩm bán được',
      data: ['100','200','500','400','600','100','100','200','500','400','600','100'],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Sản phẩm nhận ký gửi',
      data: ['200','400','50','800','300','300','500','100','300','900','200','800'],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


function AdminRevenue() {
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
{/* -------------------------------------------------------------- */}
      <div className='AdminRevenue_main'>
        <div className='AdminRevenue_Top'>
            <Line data={data} />
        </div>
{/* -------------------------------------------------------------- */}
        <div className="AdminRevenue_Bottom">
          <div className='AdminRevenue_Chart'>
            <div className='AdminRevenue_Chart_Label'>
            <div className='Chart_Name'>Biểu đồ sản phẩm ký gửi và bán ra</div>
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
            {/* <Line className='Chart_Detail' data={data} /> */}
          </div>
          <div className='AdminRevenue_CustomerRecent'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminRevenue