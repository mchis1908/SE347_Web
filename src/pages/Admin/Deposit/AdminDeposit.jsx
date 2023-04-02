import React, { useState } from 'react';
import "./AdminDeposit.css"
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'

function AdminDeposit() {
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
    <div className='AdminDeposit'>
      <Menu/>
      <Header/>
{/* -------------------------------------------------------------- */}
      <div className='AdminDeposit_main'>
        <div className="AdminDeposit_Bottom">
          <div className='AdminDeposit_Chart'>
            <div className='Chart_Date'>
              <p className='Chart_LabelDay'>Ngày lập hóa đơn:</p>
              <button className='Chart_Calendar' onClick={toggleCalendar}>{selectedDate.toLocaleDateString()}</button>
              {showCalendar && (
                <Calendar
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              )}
            </div>
            <div className='Chart_Detail'></div>
          </div>
          {/* -------------------------------------------------------------- */}
          <div className='AdminDeposit_CustomerInf'>
                <p>Khách hàng</p>
                <input></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDeposit