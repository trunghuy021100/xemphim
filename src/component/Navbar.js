import React, { useState } from 'react'
import {FaFutbol,FaBars,FaUser, FaUserCircle, FaTimes, FaHome, FaCalendar, FaFilm, FaNewspaper, FaTable, FaUserAstronaut, FaUserCheck, FaSignOutAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context'
const Navbar = () => {
    const [closess,setClosess]=useState(false);
    const {dangnhap,setDangnhap}=useGlobalContext();
    const handlelogout=()=>
        {
            setDangnhap([])
        }
window.addEventListener("resize",function()
    {
        if(window.innerWidth>800)
            {
                setClosess(false)
            }
    })
    return (
        <div className="nav">
            <i className="nav-logo"><FaFutbol></FaFutbol></i>
            <div className="nav-list">
                <ul>
                    <li><Link to="/"><p className="link"><a href="#trangtru">Trang Trủ</a></p></Link></li>
                    <li><p className="link"><a href="#listphim">Lịch Chiếu</a></p></li>
                    <li><p className="link"><a href="#hotpick">Cụm Rạp</a></p></li>
                    <li><p className="link"><a href="#tintuc">TinTuc</a></p></li>
                    
                    
                </ul>
            </div>
            <div className={`${dangnhap.length===0?"nav-log ":"bien nav-log"}`}>
           <Link to="/dangnhapvonao"><p className="link" > <i><FaUser></FaUser></i> &ensp; Đăng Nhập</p> </Link> 
           <p>|</p>
           <Link to="/dangkyvonao"><p className="link"> <i><FaUserCircle></FaUserCircle></i> &ensp; Đăng Ký</p> </Link> 
            </div>
            <div className={`${dangnhap.length!==0?"nav-out ":"bien nav-out"}`}>
                {dangnhap.map((item,index)=>
                    {
                        return ( <div key={index}>
                            <p> <i><FaUserCheck></FaUserCheck></i>&ensp;{`${item.ho} ${item.ten}`}</p>
                            <p>&ensp; | &ensp;</p>
                            <p onClick={handlelogout}><i><FaSignOutAlt></FaSignOutAlt></i>&ensp;Đăng xuất</p>
                        </div>
                        )
                    })}
            </div>
            
            <p className="nav-icons">
                <i onClick={()=>setClosess(true)}><FaBars ></FaBars></i></p>
              
                    <div className={`${closess?"nav-kh mo":"nav-kh"}`}>
                        <ul>
                            <li>
                               <i className="nav-close" onClick={()=>setClosess(false)}>
                                   <FaTimes></FaTimes>
                               </i>
                                
                            </li>
                            <li className={`${dangnhap.length!==0?"link":"bien"}`}><i className="text-primary"><FaUserCheck></FaUserCheck></i><b>
                                {dangnhap.map((item,index)=>
                                    {
                                        return <b>{`${item.ho} ${item.ten}`}</b>
                                    })}</b></li>
                            <Link to="/dangnhapvonao"><li  className={`${dangnhap.length===0?"link":"bien"}`} onClick={()=>setClosess(false)}><i className="text-primary"><FaUser></FaUser></i><b>Đăng Nhập</b></li></Link>
                            <Link to="/dangkyvonao"><li className={`${dangnhap.length===0?"link":"bien"}`} onClick={()=>setClosess(false)}><i  className="text-sencondary"><FaUserCircle></FaUserCircle></i><b>Đăng Ký</b></li></Link>
                            <Link to="/"><li className="link"><i className="text-success"><FaHome></FaHome></i><b>Trang trủ</b></li></Link>
                            <li className="link"><i className="text-danger"><FaCalendar></FaCalendar></i><b><a href="#listphim">Lịch Chiếu</a></b></li>
                            <li className="link"><i className="text-dark"><FaFilm></FaFilm></i><b><a href="#hotpick">Cụm Rạp</a></b></li>
                            <li className="link"><i className="text-warning"><FaNewspaper></FaNewspaper></i><b><a href="#tintuc">Tin Tức</a></b></li>
                           
                            <li className={`${dangnhap.length!==0?"link":"bien"}`} onClick={handlelogout}><i className="text-muted"><FaUserAstronaut></FaUserAstronaut></i><b>Đăng xuất</b></li>

                        </ul>
                    </div>
               
        </div>
    )
}

export default Navbar
