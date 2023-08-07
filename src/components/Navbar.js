import React , { useState } from 'react'
import '../App.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate, useLocation} from 'react-router-dom';

function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation(); 

  // let isActive = (name) => console.log(name,location.pathname.substring(1,name.length+1))
  let isActive = (name) => location.pathname.substring(1,name.length+1)===name?"active":"";

  console.log(isActive("resume"))
  return (
    <>
    <div className='navbar'>
        <div onClick={()=> {navigate('/')}} >  Georgia Witchel  </div>
        <div className='navbar-buttons'>
            <div className={isActive("resume")} onClick={()=> {navigate('/resume')}}>  Resume </div>
            <div className={isActive("portfolio")} onClick={()=> {navigate('/portfolio')}}> Portfolio</div>
            <div className={isActive("alpinism")} onClick={()=> {navigate('/alpinism')}}> Alpinism</div>
            <div className={isActive("creative")} onClick={()=> {navigate('/creative')}}> Watercolor</div>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default Navbar