import React from 'react'
import "./Login.css"
import  logo from '../assets/images/5057942.jpg'
import  logoone from '../assets/images/FlySeo_logo.png'
import {Link} from "react-router-dom";




class  Login extends React.Component {
  render(){
    
  return (
    <>
  
    <div className="login">
        <div className="imgBx">
          <div className="imgone">
          <img src={logoone} alt="" />
          </div>
          <div className ="imgtwo">
             <img src={logo} alt="" />
        </div>
        </div>
      
        <div className ="contentBx">
          <div className="formBx">

            <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
            <div className="inputBx">
              <span> Tài khoản đăng nhập:</span>
              <div className="a">
                <span> <i className="fa fa-user-circle" style={{marginRight:"10px", fontSize:"2rem"}}></i></span><input type="text" name="" placeholder="Tài khoản"></input>
             </div>
            </div>
            <div className="inputBx">
              <span> Mật khẩu:</span>
              <div className="a">
              <span><i className="fa fa-lock" aria-hidden="true"  style={{marginRight:"10px",fontSize:"2rem"}}></i></span><input type="text" name=""  placeholder="Mật khẩu"></input>
              </div>
            </div>
             <div className="remember">
              <label ><input type="checkbox" name=""></input > Ghi nhớ mật khẩu!</label>
            </div>

            <div className="inputBx">
               <button >ĐĂNG NHẬP</button>
            
            </div>

            <div className="inputBx">
             <p>Bạn đã có tài khoản? <Link to="/apiv4/sign">Đăng ký</Link></p>
            </div> 
            <h3 style={{textAlign:'center'}}> Hoặc đăng nhập với</h3>
            <ul className="sci">
              <li><i className="fa fa-facebook" ></i></li>
              <li><i className="fa fa-twitter"></i></li>
              <li><i className="fa fa-google"></i></li>
            </ul>
          </div>
        </div>  
    </div>
 

    </>
  )
}}

export default Login