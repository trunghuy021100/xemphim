import React, { useEffect } from 'react'
import {useGlobalContext} from '../context'
import {Pie} from 'react-chartjs-2'
const Ttdetail = ({bien}) => {
    const {listphim,diem,setDiem,songuoi,setSonguoi,bangsao,setBangsao}=useGlobalContext();
    console.log(listphim);
    useEffect(()=>
        {   if(bangsao.length>0)
                {  
                     let str= [ ...new Set(bangsao.map((item) => item.ma))];
                     
                    if(str.includes(Number(bien)))
                    {
                      
                        let arr=bangsao.filter((item)=>item.ma===Number(bien));
                        setDiem(arr[0].sao)
                        setSonguoi(arr[0].sn)
                    }
                    else{
                        if(listphim.length>0)
                        {
                    let arr=listphim.filter((item)=>item.maPhim===Number(bien));
                    let sao=(arr[0].danhGia);
                   
                    setDiem(sao)
                   let ran =Math.floor(Math.random()*99+1)
                  
                   setSonguoi(ran)
                    let aba=[...bangsao,{ma:Number(bien),sao:sao,sn:ran}]
                    setBangsao(aba);
                    localStorage.setItem("getsao",JSON.stringify(aba));
                        }
                    }
                }
        else{
            if(listphim.length>0)
            {
        let arr=listphim.filter((item)=>item.maPhim===Number(bien));
        let sao=(arr[0].danhGia);
        setDiem(sao)
       let ran =Math.floor(Math.random()*99+1)
       
       setSonguoi(ran)
        let aba=[...bangsao,{ma:Number(bien),sao:sao,sn:ran}]
        setBangsao(aba);
        localStorage.setItem("laysao",JSON.stringify(aba));
            }
        }
        },[listphim,bangsao])
    return (
        <div className="khung-ct">
            {listphim.map((item,index)=>
                {
                    if(item.maPhim===Number(bien))
                    {
                        return(
                            <div key={index}>
                            <div className="anh-bia"  style={{backgroundImage:`url("${item.hinhAnh}")`}}>
                                </div>
                                <div className="row">
                            <div className="col-md-6 col-12 canbiet" style={{opacity:"1"}}>
                                <img src={item.hinhAnh}></img>
                                <div className="ct-canbiet">

                                    <span>{item.maPhim}</span>
                                    <p><b>Ngày Khởi Chiếu :</b> {item.ngayKhoiChieu.slice(0,10)}</p>
                                    <p><b>Tên Phim : </b>{item.tenPhim}</p>
                                    <p><b>Bí Danh :</b>{item.biDanh}</p>
                                    </div>
                            </div>
                            <div className="col-md-6 col-12" style={{opacity:1}}>
                                <div className="danhsao">
                           
                            <Pie                            
                             data={{
                                    
                                    datasets: [
                                        {
                                        
                                        backgroundColor: [
                                            "#1fcf2b",
                                            "#000000",
                                        
                                        ],
                                        data: [diem,10-diem]
                                        }
                                    ]
                                    }}
                                    
                                />
                               
                                <div className="sosao">
                                    <p>{diem}</p>
                                </div>
                                <p className="nguoi">&ensp;&ensp;Số người đánh giá :{songuoi}</p>
                            </div>
                          
                            </div>
                        </div>
                        </div>
                        )
                    }
                })}
            
        </div>
    )
}

export default Ttdetail
