import React, { useState } from 'react'
import { FaCheckCircle, FaExclamationCircle, FaExclamationTriangle } from 'react-icons/fa';

const Thongbao = ({type,content}) => {
    const [mau,setMau]=useState("");
    
   
    return (
        <div className="thongbao">
            <div className="o-thongbao">
                <p>
                    <i className={`${type="success"?"mauxanh":"an"}`}><FaCheckCircle></FaCheckCircle></i>
                    <i className={`${type="warning"?"mauvang":"an"}`}><FaExclamationTriangle></FaExclamationTriangle></i>
                    <i className={`${type="error"?"maudo":"an"}`}><FaExclamationCircle></FaExclamationCircle></i>
                </p>
                </div>
            
        </div>
    )
}

export default Thongbao
