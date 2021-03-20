import React, { useEffect, useState } from 'react'
import { FaComment,FaStar, FaTimes } from 'react-icons/fa';
import {useGlobalContext} from '../context'

const Danh = ({bien}) => {
    const {bangnx,setBangnx,bangsao,setBangsao,dangnhap}=useGlobalContext();
    const bang=[0,1,2,3,4,5,6,7,8,9];
    const [demsao,setDemsao]=useState(-1);
    const [trangthai,setTrangthai]=useState(false);
    const [laybang,setLaybang]=useState([])
    const [noidung,setNoidung]=useState(null)
    
    const handleNhanxet=()=>
        {
            let arr=([...bangnx,{so:demsao,ma:Number (bien),content:noidung,t:Date.parse(new Date),name:"vodanh"}])
            setBangnx(arr);
            localStorage.setItem("laylai",JSON.stringify(arr));
            let banga=bangsao.map((item,index)=>
                {
                    if(item.ma===Number(bien))
                    {
                        const y=((item.sao*item.sn +demsao+1)/(item.sn+1)).toFixed(2);
                        return {...item,sao:y,sn:item.sn+1}
                    }
                    else{
                        return {...item}
                    }
                })
            setBangsao(banga)
            localStorage.setItem("getsao",JSON.stringify(banga));
            setTimeout(()=>
                {
                    setTrangthai(false);
                    setDemsao(-1);
                    setNoidung("")

                },100)
        }
    useEffect(()=>
        {
            if(bangnx.length>0)
            {
            let arr=bangnx.filter((item,index)=>item.ma===Number(bien));
            if(arr.length>0)
                {
                    setLaybang(arr);
                    
                }
            }
        },[bangnx])
    
    return (
        <div className="binhluan">
            <div className="cmt">
                <h6 onClick={()=>
                    {
                        if(dangnhap.length===1)
                            {
                                setTrangthai(~trangthai);

                            }
                        else{
                            alert("bạn phải đăng nhập trước khi bình luận")
                        }
                    }}> &ensp;<FaComment></FaComment> &ensp;Comment vô ...</h6>
            </div>
            <div className={`${trangthai?"khung-cmt hiendi":"khung-cmt"}`}>
                <div className="cho-cmt">
                    <p className="sao">
                        {bang.map((item,index)=>
                            {
                                if(demsao>=index)
                                {
                                    return (<b className="vang" onClick={()=>setDemsao(index)} key={index}><FaStar></FaStar></b>)
                                }
                                else{
                                    return (<b onClick={()=>setDemsao(index)} key={index}><FaStar></FaStar></b>)
                                }
                            })}
                    </p>
                   
                    <p><input placeholder="comment ..." onChange={(e)=>setNoidung(e.target.value) } value={noidung}></input></p>
                    <button className="btn btn-primary" onClick={handleNhanxet}>Nhận Xét</button>
                </div>
            </div>
            <div className="list-cmt">
                {laybang.map((item,index)=>
                    {   let thoi;
                        let t=Date.parse(new Date)-item.t;
                        if(t>86400000)
                        {
                            thoi=`${Math.floor(t/86400000)} ngày trước`
                        }
                        else if(t>3600000)
                        {
                            thoi=`${Math.floor(t/3600000)} giờ trước`
                        }
                        else{
                            thoi=`${Math.floor(t/60000)} phút trước`
                        }
                        setInterval(()=>
                            {
                                
                        let x=Date.parse(new Date)-item.t;
                        if(x>86400000)
                        {
                            thoi=`${Math.floor(x/86400000)} ngày trước`
                        }
                        else if(x>3600000)
                        {
                            thoi=`${Math.floor(x/3600000)} giờ trước`
                        }
                        else{
                            thoi=`${Math.floor(x/60000)} phút trước`
                        }
                            },1000)


                        return (<div className="tung-cmt" key={index}>
                            <p className="title-cmt">
                                <b>{item.name}</b>
                                <b >{item.so+1}<i className="vang"> <FaStar></FaStar></i></b>
                            </p>
                            <p className="content-cmt">{item.content}</p>
                            <p className="time-cmt">
                                {
                                    thoi
                                }
                            </p>
                        </div>)
                    })}
            </div>
        </div>
    )
}

export default Danh
