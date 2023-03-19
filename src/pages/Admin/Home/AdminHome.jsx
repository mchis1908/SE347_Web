import React, { useState } from 'react';
import "./AdminHome.css"
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/Menu"
import Header from '../../../common/Header/Header'

function AdminHome() {
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
    <div className='AdminHome'>
      <Menu/>
      <Header/>
{/* -------------------------------------------------------------- */}
      <div className='AdminHome_main'>
        <div className='AdminHome_Overview'>
          <div className='Overview_block'>
            <div className='Block_top'>
              <Icon icon="fluent-mdl2:product-variant" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom'>Sản phẩm trong kho</p>
          </div>
          <div className='Overview_block'>
            <div className='Block_top'>
              <Icon icon="la:file-invoice-dollar" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom'>Số hóa đơn đến hạn</p>
          </div><div className='Overview_block'>
            <div className='Block_top'>
              <Icon icon="material-symbols:bar-chart" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom'>Doanh thu hôm nay</p>
          </div><div className='Overview_block'>
            <div className='Block_top'>
              <Icon icon="la:file-invoice-dollar" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom'>Số đơn ký gửi hôm nay</p>
          </div>
        </div>
{/* -------------------------------------------------------------- */}
        <div className="AdminHome_Bottom">
          <div className='AdminHome_Chart'>
            <div className='Chart_Name'>Tên biểu đồ</div>
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
            {/* -------------------------------------------------------------- */}
            <div className='Chart_Detail'></div>
          </div>
          <div className='AdminHome_CustomerRecent'>
            <div className='CustomerRecent_Label'>Khách hàng gần đây</div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_Info'>
              <div className='CustomerRecent_Name'>Nguyễn Văn A</div>
              <div className='CustomerRecent_Phone'>0123456789</div>
            </div>
            <div className='CustomerRecent_ViewMore'>Xem Thêm</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome