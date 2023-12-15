import React from 'react';
import './SignIn.css';
import logo from '../../Images/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/userSlice';

const SignIn = () => {
  let data = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchApi = async (key) => {
    try {
      const res = await axios.get(
        'http://localhost:8000/v1/taikhoan/search/' + key
      );
      data = res.data[0];
    } catch (error) {
      console.log(error.message);
    }
    if (data === undefined) {
      // alert('Tài khoản hoặc mật khẩu không chính xác')
      message.error('Tài khoản hoặc mật khẩu không chính xác');
      return;
    }
    const account = document.getElementById('account').value;
    if (
      account === data.TENTAIKHOAN &&
      document.getElementById('password').value === data.MATKHAU
    ) {
      const user = {
        user: account,
        role: data.PHANQUYEN,
        sdt: data.SDT,
        tennv: data.TENNV,
        user_id: data._id,
      };
      console.log(user);
      dispatch(login(user));
      navigate('/home');
    } else {
      message.error('Tài khoản hoặc mật khẩu không chính xác');
      // alert('Tài khoản hoặc mật khẩu không chính xác')
    }
  };

  function TAIKHOAN() {
    let key = document.getElementById('account').value;
    fetchApi(key);
  }
  return (
    <div className="Sign_In_Wrapper">
      <section className="SignIn">
        <div className="Signbox">
          <div className="title">
            <img src={logo} alt="300" className="logo"/>
            <p className="title">PLAN B</p>
          </div>
          <div className="content">
            <form>
              <div className="form_content">
                <label htmlFor="account">Tài khoản</label>
                <input
                  type="text"
                  name="account"
                  id="account"
                  placeholder="Tên đăng nhập"
                />
              </div>
              <div className="form_content">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mật khẩu"
                />
              </div>
            </form>
          </div>
          <button className="signin_btn" onClick={TAIKHOAN}>
            <p style={{margin: 0, fontSize: '20px', fontWeight: 'bold'}}>Đăng nhập</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
