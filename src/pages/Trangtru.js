import React, { useEffect, useState } from 'react'
import Slide from '../ttrangtru/Slide'
import Listphim from '../ttrangtru/Listphim'
import Hotpick from '../ttrangtru/Hotpick'
import Tintuc from '../ttrangtru/Tintuc'
import Loading from '../component/Loading'
const Trangtru = () => {
    const [xongchua,setXongchua]=useState(false)
    useEffect(()=>
        {
           setTimeout(()=>
            {
                setXongchua(true)
            },1000) 
        },[])
    if(xongchua===false)
        {
            return(
                <div><Loading></Loading></div>
            )
        }
    return (
        <div>
        <div className="day" id="trangtru"><Slide></Slide></div>   
           <div id="listphim"> <Listphim></Listphim></div>
           <div id="hotpick"><Hotpick></Hotpick></div>
            <div id="tintuc"><Tintuc></Tintuc></div>
        </div>
    )
}

export default Trangtru
