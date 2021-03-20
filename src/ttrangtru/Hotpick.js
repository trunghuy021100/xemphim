import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../context'
const Hotpick = () => {
    const {listrap,luudatghe,setLuudatghe,dangnhap}=useGlobalContext();
   
    const [ma,setMa]=useState(0);
    const  [dem,setDem]=useState(0);
  
    const handleClick1=(items)=>
        {   setMa(items);
            setDem(0);
        }
    
    return (
        <div className="container">
            <h1>HOT PICK</h1>
            <div className="chi-tiet row">
                <div className="hot-logo col-md-2">
                    {listrap.map((item,index)=>
                        {
                            return (<img src={item.logo} key={index} onClick={()=>handleClick1(index) }
                            className={`${index===ma?"":"mo-di"}`}></img>)
                        })}
                </div>
                <div className="hot-content col-md-10 ">
                   {
                       listrap.map((item,index)=>
                        {
                            if(index===ma)
                                {
                                    return (
                                        <div key={index}>
                                            {item.lstCumRap.map((items,indexs)=>
                                                {
                                                    const {danhSachPhim,diaChi,maCumRap,tenCumRap}=items;
                                                    let str=danhSachPhim[0].lstLichChieuTheoPhim[0].ngayChieuGioChieu.slice(0,10);
                                                    
                                                    return(<div className="content row" key={indexs}>

                                                        <div className={`${indexs===dem?"content-trai col-md-6 do":"content-trai col-md-6"}`} onClick={()=>setDem(indexs)}>
                                                            <p>{tenCumRap}</p>
                                                        </div>
                                                        <div className={`${indexs===dem?"content-phai col-md-6 hien":"content-phai col-md-6 an"}`}>
                                                            <div className="chu-de">
                                                                <img src={danhSachPhim[0].hinhAnh}></img>
                                                                <div>
                                                                     <b>{danhSachPhim[0].tenPhim.toUpperCase()}</b>
                                                                     <p>{danhSachPhim[0].maPhim}</p>
                                                                </div>
                                                               
                        
                                                            </div>
                                                            <div className="gio">
                                                                {danhSachPhim[0].lstLichChieuTheoPhim.map((itemss,indexss)=>
                                                                    { 
                                                                        if(itemss.ngayChieuGioChieu.slice(0,10)===str)
                                                                            {
                                                                               
                                                                                return(
                                                                                  <Link to={`${dangnhap.length===0?"/dangnhapvonao":"/datghe"}`}><button className="btn btn-primary" key={indexss}
                                                                                  onClick={()=>
                                                                                    setLuudatghe([danhSachPhim[0].maPhim,danhSachPhim[0].tenPhim,danhSachPhim[0].hinhAnh,danhSachPhim[0].tenCumRap,itemss.giaVe,itemss.ngayChieuGioChieu])}>{itemss.ngayChieuGioChieu.slice(10)}</button></Link>  
                                                                                )
                                                                            }
                                                                    })}
                                                            </div>
                                                        </div>
                                                        </div>)
                                                })}
                                        </div>
                                    )
                                }
                        })
                   }
                </div>
            </div>
        </div>
    )
}

export default Hotpick
