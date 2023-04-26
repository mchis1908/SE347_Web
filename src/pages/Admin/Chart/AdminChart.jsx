import React, { useState, useEffect } from 'react';
import "./AdminChart.css";
import { Icon } from '@iconify/react';
import moment from 'moment';
import Menu from "../Menu/AdminMenu";
import Header from '../../../common/Header/Header';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { DatePicker } from 'antd';
import Axios from "axios";

function AdminChart() {
  const today = moment().format('DD-M-YYYY');
  const [ngay, setNgay] = useState(moment().format('DD-M-YYYY'))
  const [namdt, setNamDT] = useState(moment().format('YYYY'))
  const [thangsp, setThangSP] = useState(moment().format('M-YYYY'))
  const [dayinmonth, setDayInMonth] = useState(moment(thangsp, 'M-YYYY').daysInMonth())
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
  const [data3, setData3] = useState({
    labels: ['Nhận', 'Bán'],
    datasets: [{
      label: 'Sản phẩm',
      data: [0, 0],
      backgroundColor: [
        'rgb(249, 175, 94,0.54)',
        'rgb(90, 106, 207)'
      ],
      hoverOffset: 4
    }]
  });
  const getdata3 = async () => {
    try {
      const response = await Axios.get('http://localhost:8000/v1/baocaospngay/getBaoCaoSPNgay/' + today);
      const bcn = response.data;
      const newData = {
        labels: ['Nhận', 'Bán'],
        datasets: [{
          label: 'Sản phẩm',
          data: [bcn.SLSANPHAMNHAN, bcn.SLSANPHAMBAN],
          backgroundColor: [
            'rgb(249, 175, 94,0.54)',
            'rgb(90, 106, 207)'
          ],
          hoverOffset: 4
        }]
      };
      setData3(newData);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        await Axios.post('http://localhost:8000/v1/baocaospngay/themBaoCaoSPNgay/', {
          THOIGIAN: today,
          SLSANPHAMBAN: 0,
          SLSANPHAMNHAN: 0,
        });
        console.log('Chưa có báo cáo, hệ thống sẽ tạo báo cáo');
        const newData = {
          labels: ['Nhận', 'Bán'],
          datasets: [{
            label: 'Sản phẩm',
            data: [0, 0],
            backgroundColor: [
              'rgb(249, 175, 94,0.54)',
              'rgb(90, 106, 207)'
            ],
            hoverOffset: 4
          }]
        };
        setData3(newData);
      } else {
        console.log('Lỗi khi gửi yêu cầu Axios: ', error.message);
      }
    }
  }
  const handleSPNgay = async (dateString) => {
    if (dateString !== '') {
        try {
            const response = await Axios.get('http://localhost:8000/v1/baocaospngay/getBaoCaoSPNgay/' + dateString);
            const bcn = response.data;
            const newData = {
                labels: ['Nhận', 'Bán'],
                datasets: [{
                    label: 'Sản phẩm',
                    data: [bcn.SLSANPHAMNHAN, bcn.SLSANPHAMBAN],
                    backgroundColor: [
                        'rgb(249, 175, 94,0.54)',
                        'rgb(90, 106, 207)'
                    ],
                    hoverOffset: 4
                }]
            };
            if(bcn.SLSANPHAMNHAN===0 || bcn.SLSANPHAMBAN===0) {
              alert('Chưa có dữ liệu');
              window.location.reload();
            }
            setData3(newData);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert('Chưa có dữ liệu');
                window.location.reload();
            }
        }
    }
  };

  useEffect(() => {
    if (ngay) {
        handleSPNgay(ngay);
    } else {
        getdata3();
    }
  }, [ngay]);

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
                <DatePicker
                style={{ width: '8vw', height: '3vh', marginLeft: '1vw' }}
                format="M-YYYY"
                picker='month'
                allowClear={true}
                defaultValue={moment()}
                value={thangsp ? moment(thangsp, 'M-YYYY') : null}
                onChange={(date, dateString) => {
                  setThangSP(dateString);
                  setDayInMonth(moment(dateString, 'M-YYYY').daysInMonth())
                  console.log('Tháng:', dateString);
                  console.log('Tháng có:', dayinmonth);
                }}
              />
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
                <DatePicker style={{width:'10vw',height:'3vh', marginLeft:'2vw'}} picker="year" format="YYYY" />
              </div>
            </div>
            {/* <DatePicker style={{width:'10vw',height:'3vh', marginLeft:'2vw'}} picker="year"/> */}
            <Bar data={data2} options={options} />
          </div>
          <div className='AdminChart_ProductPercents'>
            <div className='AdminChart_ProductPercents_title'>
              <div className='ProductPercents_Label'>Số sản phẩm ngày: </div>
              <DatePicker
                style={{ width: '8vw', height: '3vh', marginLeft: '1vw' }}
                format="DD-M-YYYY"
                allowClear={true}
                defaultValue={moment()}
                value={ngay ? moment(ngay, 'DD-M-YYYY') : null}
                onChange={(date, dateString) => {
                  setNgay(dateString);
                  console.log('Ngày:', dateString);
                  handleSPNgay(dateString);
                }}
              />
            </div>
            <Doughnut data={data3} options={options} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminChart