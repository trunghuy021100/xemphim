import React,{useEffect,useState} from 'react'
import Ttdetail from '../Chitiet/Ttdetail'
import Tab from '../Chitiet/Tab'
import {useParams} from 'react-router-dom'
import Loading from '../component/Loading'
const Chitiet = () => {
    const {maphim}=useParams();
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
            <Ttdetail bien={maphim}></Ttdetail>
            <Tab chia={maphim}></Tab>
        </div>
    )
}

export default Chitiet
