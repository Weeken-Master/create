import React  from "react";
import './Nav.css';
import ReactDOM from "react-dom";
import {
 Link, NavLink,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo  from '../../assets/images/FlySeo_logo.png'
import { faGears,faMoneyCheckDollar,faComments} from "@fortawesome/free-solid-svg-icons";
import Body from "../Body/Body";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Nav extends React.Component{
    render(){
    const notify = () => {
        const resolveAfter3Sec = new Promise((resolve, reject) =>{ 
               setTimeout( resolve,3000)
              });
               toast.promise(resolveAfter3Sec, {
                  pending: 'Đang xử lý........!' , 
                  success: 'Thành công!',
                  error: 'Promise rejected 🤯'
               }); 
          }
        return(
            <>
                <div className="header">
         
                <Link  to="/" className="logo">
                    <img src={logo} width="100" height="50" alt="" /> 
                </Link>  
                    <Link  to="/" className="logo" style={{}}>
                      <h2>FlySeo </h2>  Nơi đặt niềm tin của bạn !
                    </Link>
              


                {/* <Link  to="/" className="logo">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                </Link>   */}    
                <div className="header-right">
                    <NavLink to="/"  activeClassName="active" exact={true} ><i className="fa fa-fw fa-home"></i>Home</NavLink>
                    <NavLink to="/detail/function"  > <FontAwesomeIcon icon={ faGears} /> Tính năng</NavLink>
                    <NavLink to="/pricelist"  activeClassName="active" > Bảng giá</NavLink>
                    <NavLink to="/review/app"  activeClassName="active" > Đánh giá</NavLink>
                    <NavLink to="/tutorial/app"  activeClassName="active" ><i className="fa fa-pencil fa-fw" aria-hidden="true"></i> Hướng dẫn</NavLink>
                    <NavLink to="/apiv4/login"  activeClassName="active"   ><i className="fa fa-fw fa-user"></i>Đăng nhập   </NavLink>
                    {/* <button  onClick={notify} > Thử notiface<ToastContainer theme="colored" /></button> */}
                </div>
                </div>
         
 


            </>
        )
    }



}
export default Nav;