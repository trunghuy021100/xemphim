import React, { useState } from 'react'
import {useGlobalContext} from '../context'
import {FaSadTear} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Lichchieu = ({ma}) => {
    const {listrap,luudatghe,setLuudatghe,dangnhap}=useGlobalContext();

    console.log(listrap);
    console.log(listrap);
    const bang=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const ngay=["SUN","MON","TUE","WED","THUR","FRI","SAT"]
    
    let tg=new Date();
    const[bien,setBien]=useState(tg.getDate());

    console.log(bien);
    const[dem,setDem]=useState(0);
    const [hieuung,setHieuung]=useState(-1)
    return (
        <div className="lichchieu container">
            <div className="row">
                <div className="col-md-5">

                </div>
                <div className="col-md-7">
                <div className="chonngay ">
               {bang.map((item,index)=>
                   {    let time=new Date();
                       time.setDate(time.getDate()+index);
                       let bienngay,bienthang;
                       if(time.getDate()<10)
                           {
                               bienngay=`0${time.getDate()}`
                           }
                       else{
                           bienngay=`${time.getDate()}`
                       }
                       if(time.getMonth()<10)
                       {
                           bienthang=`0${time.getMonth()}`
                       }
                       else{
                       bienthang=`${time.getMonth()}`
                   }
                       return(<div className={`${bien===time.getDate()?"khung-time do":"khung-time"}`} key={index}
                       onClick={()=>setBien(time.getDate())}>
                           <h5>{ngay[time.getDay()]}</h5>
                           <div className="time-duoi">
                               <h3>{bienngay}</h3>
                               <p>{bienthang}</p>
                               </div>
                       </div>)
                   })}
               </div>
               </div>
            </div>
           
            <div className="row day-xuong">
            <div className="lichchieu-logo col-md-5">
                {listrap.map((item,index)=>
                    {
                        return(<div key={index} className={`${index===dem?"logo do":"logo moao"}`} onClick={()=>setDem(index)}>
                            <img src={item.logo}></img>
                            <b>{item.tenHeThongRap}</b>
                        </div>)
                    })}
            </div>
            <div className="ngay-chieu col-md-7">
                    {
                    listrap.map((item,index)=>
                        {
                            const {logo,lstCumRap,tenHeThongRap,maHeThongRap}=item;
                            if(index===dem)
                                { let k=0;
                                    return(
                                        <div key={index}>
                                            {lstCumRap.map((items,indexs)=>
                                                {   let t=0;
                                                    const {danhSachPhim,diaChi,maCumRap,tenCumRap}=items;
                                                    {   
                                                        return (<div key={indexs}>
                                                            {danhSachPhim.map((itemss,indexss)=>
                                                                {
                                                                    const {hinhAnh,maPhim,tenPhim,lstLichChieuTheoPhim}=itemss;
                                                                    let str= [ ...new Set(lstLichChieuTheoPhim.map((item) => Number(item.ngayChieuGioChieu.slice(8,10))))];
                                                                   
                                                                    if(maPhim===Number(ma) && str.includes(bien)===true)
                                                                        {
                                                                            console.log(str);
                                                                            return (
                                                                                <div key={indexss}>
                                                                                    <h5 onClick={()=>{
                                                                                        if(hieuung===indexss)
                                                                                            {
                                                                                                setHieuung(-1)
                                                                                            }
                                                                                        else {
                                                                                            setHieuung(indexss)
                                                                                        }
                                                                                    }}>{tenCumRap}</h5>
                                                                                    <div className={`${indexss===hieuung?"btn-lich cao":"btn-lich"}`}>
                                                                                        {lstLichChieuTheoPhim.map((itemsss,indexsss)=>
                                                                                            {
                                                                                                if(Number (itemsss.ngayChieuGioChieu.slice(8,10))===bien)
                                                                                                    {
                                                                                                        return (<Link to={`${dangnhap.length===0?"/dangnhapvonao":"/datghe"}`}><button className="btn btn-primary" key={indexsss}
                                                                                                        onClick={()=>
                                                                                                            {
                                                                                                                setLuudatghe([maPhim,tenPhim,hinhAnh,tenCumRap,itemsss.giaVe,itemsss.ngayChieuGioChieu])
                                                                                                            }}>
                                                                                                            {itemsss.ngayChieuGioChieu.slice(10)}
                                                                                                            
                                                                                                        </button></Link>)
                                                                                                    }
                                                                                            })}
                                                                                        </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    else{
                                                                        t++;
                                                                        if(t===(danhSachPhim.length))
                                                                            {
                                                                                k++;
                                                                                if(k===lstCumRap.length)
                                                                                    {
                                                                                        return(<h5 className="logo-sad">
                                                                                            <FaSadTear></FaSadTear>
                                                                                        </h5>)
                                                                                    }
                                                                            }
                                                                    }

                                                                    
                                                                })}
                                                        </div>)
                                                        
                                                    }
                                                  
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

export default Lichchieu
