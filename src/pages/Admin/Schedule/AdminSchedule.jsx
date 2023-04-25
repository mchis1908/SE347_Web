import React,{useState} from 'react'
import './AdminSchedule.css'
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Icon } from '@iconify/react';
import { daysInWeek, getDaysInMonth } from 'date-fns';

function AdminSchedule(props) {
  const accounts = [
  {
      name: 'Huỳnh Minh Chí',
      account: 'chi1223',
      password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
  {
    name: 'Huỳnh Minh Chí',
    account: 'chi1223',
    password:'ewitueiwơ',
  },
]
const tdItems = [];
const [day,setDay]= useState(28);
for(let i = 0; i < day; i++) {
  tdItems[i]=i+1;
}
const HandleChange=(e)=>{
  const inputValue = e.target.value;
  setDay(getDaysInMonth(new Date(inputValue.slice(0, 4),inputValue.slice(-2) -1)));
  console.log('a',inputValue.slice(-2));
  e.target.value=inputValue;
}
const [data,setData]= useState(accounts)
  return (
    <div className='AdminSchedule'>
      <Menu/>
      <Header title="LỊCH LÀM VIỆC" avt='http://surl.li/ggptd' name={localStorage.getItem('user')}/>
      <div className='AdminSchedule_main'>
        <div className='AdminSchedule_searchbar'>
          <label>Chọn thời gian:</label>
          <input className="AdminSchedule_searchbar_search-area" type="month" onChange={HandleChange}/>
        </div>
          <div >
            <table className="AdminSchedule-information">
                <tr className='AdminSchedule-information-detail' >
                    <div className='AdminSchedule-information-detail-wrapper'>
                        <td style={{maxWidth:'10vw', minWidth:'10vw', border: 'solid #000', borderWidth:'0 1px 1px 0'}}>Tên\Ngày</td>
                        {
                          tdItems.map(tdItems => {
                            return(
                              <td style={{border: 'solid #000', borderWidth:'0 1px 1px 0'}}>{tdItems}</td>
                            )
                          })
                        }
                        <td style={{maxWidth:'10vw', minWidth:'10vw', border: 'solid #000', borderWidth:'0 1px 1px 0'}}>Tổng số giờ</td>
                    </div>
                </tr>
                <div className='AdminSchedule_detail_infor'>
                  {
                    data.map(data => {
                        return (
                          <tr className='AdminSchedule-information-detail' >
                              <div className='AdminSchedule-information-detail-wrapper'>
                                  <td style={{maxWidth:'10vw', minWidth:'10vw', border: 'solid #000', borderWidth:'0 1px 1px 0'}}>{data.name}</td>
                                  {
                                    tdItems.map(tdItems => {
                                      return(
                                        <td style={{border: 'solid #000', borderWidth:'0 1px 1px 0'}}><input style={{width:'4vw'}} value='0'></input></td>
                                      )
                                    })
                                  }
                                  <td style={{maxWidth:'10vw', minWidth:'10vw', border: 'solid #000', borderWidth:'0 1px 1px 0'}}>20</td>
                              </div>
                          </tr>
                        )
                    })
                  }
                </div>
            </table>
          </div>
      </div>
    </div>
  )
}

export default AdminSchedule