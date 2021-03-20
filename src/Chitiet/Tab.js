import React, { useEffect, useState } from 'react'
import Lichchieu from './Lichchieu'
import Danh from './Danh' 
import Tintuc from './Tintuc'

const Tab = ({chia}) => {
    const [dem,setDem]=useState(0)
    return (
        <div className="tab">
            <div className="tab-chon">
                <p className={`${dem==0?"do":"moao"}`} onClick={()=>setDem(0)}>Lịch Chiếu</p>
                <p className={`${dem==1?"do":"moao"}`} onClick={()=>setDem(1)}>Thông Tin</p>
                <p className={`${dem==2?"do":"moao"}`} onClick={()=>setDem(2)}>Bình Luận</p>
            </div>
            <div className="tab-content container">
                <div className={`${dem===0?"":"out"}`} >
                    <Lichchieu ma={chia}></Lichchieu>
                </div>
                <div className={`${dem===1?"":"out"}`}>
                <Tintuc bien={chia}></Tintuc>
                    </div>
                    <div className={`${dem===2?"":"out"}`}>
                        
                        <Danh bien={chia}></Danh>
                    </div>
            </div>
        </div>
    )
}

export default Tab
