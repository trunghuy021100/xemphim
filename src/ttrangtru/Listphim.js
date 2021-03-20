import React, { useEffect, useState } from 'react'
import {useGlobalContext} from '../context'
import Detail from './Detail'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
const Listphim = () => {
    const {listphim}=useGlobalContext();
    const [trangthai,setTrangthai]=useState(true);
    const [bien,setBien]=useState(0)

    useEffect(()=>
        {
            if(bien>3 && trangthai===true)
            {
               setBien(0)
            }
            if(bien<0 && trangthai===true)
            {
               setBien(3)
            }
            if(bien>4 && trangthai===false)
            {
                setBien(0)
            }
            if(bien<0 && trangthai===false)
            {
               setBien(5)
            }
            
        },[bien])
    const handledung=()=>
        {
            setBien(0);
            setTrangthai(true)
        }
    const handlesai=()=>
        {
            setBien(0);
            setTrangthai(false)
        }
    const handleKeo=()=>{
        if(window.innerWidth<568)
            {
                setBien(bien+1);
            }
    }
    return (
        <div className="container phim-bao" draggable="true" onDragEnd={handleKeo}> 
            <div className="phim-title">
                <p className={`${trangthai?"do":""}`} onClick={handledung}>Đang Chiếu</p>
                <p  className={`${trangthai?"":"do"}`} onClick={handlesai}>Sắp Chiếu</p>
            </div>
            <div className="list-phim row">
                {
                    listphim.map((item,index)=>
                        {
                            if(trangthai===true && index>=(bien*8) && index <(bien*8+8))
                            {
                                return (<Detail item={item} key={index}></Detail>)
                            }
                            if(trangthai===false && index>=(bien*8+32) && index <(bien*8+40))
                            {
                                return  (<Detail item={item} key={index}></Detail>)
                                
                            }
                            
                        })
                }
            </div>
            <div className="chuyen">
            <FiChevronLeft className="sang-trai" onClick={()=>setBien(bien-1)}></FiChevronLeft>
               <FiChevronRight className="sang-phai" onClick={()=>setBien(bien+1)}></FiChevronRight>
            </div>
        </div>
    )
}

export default Listphim
