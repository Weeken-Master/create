import React, {useEffect,useRef} from "react";

import "./Body.css"
import logo from "../../assets/images/FlySeo_logo.png"
import logoshopee from '../../assets/images/shopee.png'
import logoTiki from '../../assets/images/1-8.png'
import logosendo from '../../assets/images/sendo.png'
import ReactDOM from "react-dom";
import {
 Link, NavLink,
} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import DeatiFunction from "../DetaiFunction/DeatiFunction";
class Body extends React.Component{
    componentDidMount() {
        // or simply just AOS.init();
        Aos.init({
          // initialise with other settings
          duration : 2000
        });
      }
  
    render(){
        let namecompany =" FlySeo";
        return (
           
            <>
            <section className="home">

            <div className="content" data-aos="fade-right" >
                <h3>{namecompany} công cụ hỗ trợ phân tích thị trường.Seo sản phẩm Shop!</h3>
               
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>       
                <Link  to="/" className="logo">
                    <img src={logoTiki} width="50" height="50" alt=""  style={{margin:"0 7px"}}/> 
                </Link>  
                <Link  to="/" className="logo">
                    <img src={logoshopee} width="70" height="70" alt=""  /> 
                </Link> 
                 <Link  to="/" className="logo">
                    <img src={logosendo} width="50" height="50" alt=""  style={{margin:"0 7px"}} /> 
                </Link>   
                <br></br>
                 <Link  to="/apiv4/sign" className="btns" style={{fontWeight:"bold", textDecoration:"None"}}>Đăng ký ngay!</Link> 
                 
            </div>

            <div className="image" >
                <img src={logo} alt=""/>
            </div>


            </section>


            </>
        )
    }
}
export default Body;