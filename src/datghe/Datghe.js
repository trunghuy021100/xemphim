import React, { useEffect, useState } from 'react'
import {data} from './data-ghe'
import {useGlobalContext} from '../context'
import {FaSquare} from 'react-icons/fa'
const Datghe = () => {
    const {luudatghe,luurang,setLuurang}=useGlobalContext();
    const [ghechon,setGhechon]=useState([]);
    const [dangchon,setDangChon]=useState([]);
   const handleClick=(item)=>
    {   
        setDangChon([...dangchon,{soghe:item.id-1,nameghe:item.name}])
        

    }
    const handleBochon=(items)=>
        {
            let arr=dangchon.filter((item)=>item.soghe!==items)
            setDangChon(arr)
        }
    const handleThanhtoan=()=>

        {  console.log(luurang);
            
            let arr=[];
            dangchon.map((item,index)=>
                {
                    arr.push(item.soghe)
                })
            setGhechon(ghechon.concat(arr))
            
            let cc=luurang.filter((item)=>(item.ma ===luudatghe[0] && item.tencum===luudatghe[3] && item.gio===luudatghe[5]))
                if(cc.length>0)
                    {
                     let bang=  luurang.map((item,index)=>
                            {
                                if((item.ma ===luudatghe[0] && item.tencum===luudatghe[3] && item.gio===luudatghe[5]))
                                    {
                                        return {...item,banga:ghechon.concat(arr)};
                                    }
                                else{
                                    return {...item}
                                }
                            })
                          
                            setLuurang(bang)
                            localStorage.setItem("luurang",JSON.stringify(bang))
                    }
                else{
                   let  bang=[...luurang,{ma:luudatghe[0],tencum:luudatghe[3],gio:luudatghe[5],banga:ghechon}]
                  
                   setLuurang(bang);
                    localStorage.setItem("luurang",JSON.stringify(bang))

                }
               
         setTimeout(()=>
         {
             setDangChon([])
         },100)
        }
    useEffect(()=>
        {
           
           let arr=luurang.filter((item)=>item.ma ===luudatghe[0] && item.tencum===luudatghe[3] && item.gio===luudatghe[5])
           
            if(arr.length>0)
                {
                    setGhechon(arr[0].banga)
                }
            else{
                let random=[];
            for(let i=0;i<25;i++)


                {   let t=Math.floor(Math.random()*50+20)
                    if(!random.includes(t))
                        {
                            random.push(t);
                        }
                }
            setGhechon(random)
            }   
        },[])
    return (
        <div className="datghe row">
            <div className="col-md-9">
                <h3>2 . Chọn Ghế và kiểm tra thông tin</h3>
                <p><b>Phim : </b><b className="do">{luudatghe[1]}</b></p>
                <p><b>Chi nhánh : </b><b className="do">{luudatghe[3]}</b></p>
                <p><b>Giá vé : </b><b className="do">${luudatghe[4]}</b></p>
                <p><b>Ngày chiếu : </b><b className="do">{luudatghe[5].slice(0,10)}</b></p>
                <p><b>Giờ chiếu : </b><b className="do">{luudatghe[5].slice(10)}</b></p>
                <div className="datve">
                    <div className="luu-y">
                        <h6 className="text-danger">Đọc kĩ các chú thích dưới đây</h6>
                        <div className="ghichu">
                        <p><b><i><FaSquare className="text-success"></FaSquare></i> &ensp; Ghế trống &ensp;</b></p>
                        <p><b><i><FaSquare className="text-danger"></FaSquare></i> &ensp; Ghế đã đăt &ensp;</b></p>
                        <p><b><i><FaSquare className="text-warning"></FaSquare></i> &ensp; Ghế đang chọn &ensp;</b></p>
                        </div>
                        

                    </div>
                    <div className="o-datve">
                    {data.map((item,index)=>
                        {   if(ghechon.includes(index))
                            {      return ( <i className="o text-danger" key={index}>
                                   <FaSquare></FaSquare>
                                    </i>
                            )}
                            else if((dangchon.map((item)=>item.soghe)).includes(index))
                            {
                                return(<i className="o text-warning" key={index} onClick={()=>handleBochon(index)}>
                                <FaSquare></FaSquare>
                                 </i>)
                            }
                            else {
                                return ( <i className="o text-success" key={index} onClick={()=>handleClick(item)}>
                                <FaSquare></FaSquare>
                                 </i>
                                )
                            }
                        })}
                        </div>
                </div>
            </div>

            <div className="col-md-3 ticket" >
                <div className="anh">
                    <img src={luudatghe[2]}></img>
                </div>
                <div className="thongtin-ve">
                        <div className="chongoi">
                            <p>Chỗ ngồi :
                                {
                                    dangchon.map((item,index)=>
                                        {
                                            return (
                                                <b key={index}>{item.nameghe}</b>
                                            )
                                        })
                                }
                            </p>
                        </div>
                        <p> Số lượng : <b>{dangchon.length}</b></p>
                        <p>Tổng tiền :<b>${dangchon.length * luudatghe[4]}</b></p>
                        <button className="btn btn-danger" onClick={handleThanhtoan}>Thanh toán</button>
                </div>
            </div>
        </div>
    )
}

export default Datghe
