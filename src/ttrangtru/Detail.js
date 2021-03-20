import React, { useState } from 'react'
import {FaVideo,FaPlay, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Detail = ({item}) => {
    const [chon,setChon]=useState(null);
    const [trangthai,setTrangthai]=useState(false)
    const handleChon=(item)=>
        {
            setTrangthai(true);
            setChon(item)
        }
    const handleDong=()=>
        {
            setChon(null);
            setTrangthai(false);
        }
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 phim-part">
            <div className="khung-part">
                <img src={item.hinhAnh}></img>
                <div className="sao-phim">

                </div>
                <div className="tt-phim"></div>
                <div className="chi-phim">
                   <p className="ma-phim">{item.maPhim}</p>
                   <p className="ten-phim">{item.tenPhim}</p>
                </div>
                <div className="video-phim">
                    <i onClick={()=>handleChon(item.trailer)}> <FaPlay></FaPlay></i>
                    <div>
                        <Link to={`/chitiet/${item.maPhim}`}><button className="btn btn-danger link">ĐẶT VÉ</button></Link>
                    </div>
                   
                </div>
               
                <div className={`${trangthai?"khung-video hienlen":"khung-video"}`}>
                <i onClick={handleDong}><FaTimes></FaTimes></i>
                        <div>
                        
                            <iframe width="100%" height="100%" src={chon}></iframe>
                        </div>
                        </div>
            </div>
            
        </div>
    )
}

export default Detail
