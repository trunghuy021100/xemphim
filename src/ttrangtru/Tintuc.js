import React, { useState } from 'react'
import {data} from './data-tintuc'
import {data1} from './data-review'
import {data2} from './data-khuyenmai'
import { FaComment, FaThumbsUp } from 'react-icons/fa'
const Tintuc = () => {
    const [hien,setHien]=useState(data);
    const [bien,setBien]=useState(1);
    const [dem,setDem]=useState(1)
const handleChon=(e)=>
    {
        setBien(1);
     let  number=Number(e.target.id);
        if(number===1)
        {
            setHien(data)
        }
        else if(number===2)
        {
            setHien(data1)
        }
        else {
            setHien(data2)
        }
    setDem(number);
      
    }

const handleXemthem=()=>
    {
        setBien(bien+1)
    }
const handleThugon=()=>
    {
        if(bien>1)
            {
                setBien(bien-1)
            }
    }
    return (
        <div className="tin-tuc container">
            <div className="lua-chon">
                <p id="1" onClick={handleChon} className={`${dem===1?"do":""}`}>Tin Tức</p>
                <p id="2"  onClick={handleChon} className={`${dem===2?"do":""}`}>Review</p>
                <p id="3"  onClick={handleChon} className={`${dem===3?"do":""}`}>Khuyến mãi</p>
            </div>
            <div className="tin-tuc-content row">
                {hien.map((item,index)=>
                    {
                        if(index%5===0 | index%5===1 && index<(bien*5))
                            {
                                return (<div className="hieuung1 col-md-6 col-12" key={index}>
                                    <img src={item.image}></img>
                                    <h6>{item.title}</h6>
                                    <p>{item.content}</p>
                                    <p> {item.like}<i> &ensp;<FaThumbsUp></FaThumbsUp> &ensp;</i>{item.comment} &ensp; <FaComment></FaComment></p>

                                </div>)
                            }
                        if(index%5===2 | index%5===3 && index<(bien*5))
                            {
                                return (<div className="hieuung2 col-md-4 col-12" key={index}>
                                <img src={item.image}></img>
                                <h6>{item.title}</h6>
                                <p>{item.content}</p>
                                <p> {item.like}<i> &ensp;<FaThumbsUp></FaThumbsUp> &ensp;</i>{item.comment} &ensp; <FaComment></FaComment></p>

                            </div>)
                            }
                        if(index%5===4 && index<(bien*5)) {
                            return (<div className="hieuung3 col-md-4 col-12" key={index}>
                                {item.listanh.map((items,indexs)=>
                                    {
                                        return (<div key={indexs}>
                                            <img src={items.anh1}></img>
                                            <p>{items.content}</p>
                                        </div>)
                                    })}

                        </div>)
                        }
                        
                    })}
            </div>
            <div className="tienich">
                <p className={`${hien.length>(bien*5)?"":"andi"}`} onClick={handleXemthem}>Xem thêm</p>
                <p className={`${bien>1?"":"andi"}`} onClick={handleThugon}>Thu gọn</p>
               
            </div>
        </div>
    )
}

export default Tintuc
