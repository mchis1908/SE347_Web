import React from 'react'
import "./SignIn.css"
import logo from "../../Images/logo.png"
import { useNavigate } from 'react-router-dom'


const SignIn = () => {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/admin/home');
      }
    return (
        <div className='Sign_In_Wrapper'>
            <section className='SignIn'>
                <div className="Signbox">
                    <div className="title">
                        <img src={logo} alt='300' class='PlanB'/>
                        <p class='title'>PLAN B</p>
                    </div>
                    <div className="content">
                        <form>
                            <div className="form_content">
                                <label htmlFor="account">Tài khoản</label>
                                <input type="text" name="account" id="account" placeholder="Tên đăng nhập" />
                            </div>
                            <div className="form_content">
                                <label htmlFor="password">Mật khẩu</label>
                                <input type="password" name="password" id="password" placeholder="Mật khẩu" />
                            </div>
                        </form>
                        <button className='signin_btn' onClick={handleClick} ><h3>Đăng nhập</h3></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignIn
