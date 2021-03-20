import React,{useState,useEffect} from 'react'
import {useGlobalContext} from '../context'
import {FaGrinTears} from 'react-icons/fa' 
import {Link} from 'react-router-dom'
import Loading from '../component/Loading'
const Dangnhap = () => {
    const {dangky,setDangnhap,luudatghe,dangnhap}=useGlobalContext();
    const [taikhoandn,setTaikhoandn]=useState("");
    const [taikhoanmk,setTaikhoanmatkhau]=useState("")
    const [newArr,setNewArr]=useState([])
    const [xongchua,setXongchua]=useState(false)
    useEffect(()=>
        {
           setTimeout(()=>
            {
                setXongchua(true)
            },1000) 
        },[])
    const handledangnhap=()=>
    {
        
        if(newArr.length===0)
            {
                alert("Tên tài khoản hoặc mật khẩu không chính xác")
            }
        else{
            setDangnhap(newArr);
                alert("Bạn đã đăng ký thành công")
        }
    }
    useEffect(()=>
    {
        setNewArr(dangky.filter((item)=>item.tendk===taikhoandn && item.mk===taikhoanmk))
        
    },[taikhoandn,taikhoanmk])  
    if(xongchua===false)
        {
            return(
                <div><Loading></Loading></div>
            )
        }
    return (
        <div className="dangnhap">
        
        <form className="khung-dn">
        <div className="dangky-tt">
               <i><FaGrinTears></FaGrinTears></i>
                <h3>Đăng Nhập</h3>
            </div>
             <div className="nhap-vo">
            
                <input 
                type="text"
                className=""
                placeholder="Tên Đăng Nhập"
                onChange={(e)=>setTaikhoandn(e.target.value)}>
                
                </input>
                <input 
                type="password"
                className=""
                placeholder="Mật Khẩu"
                onChange={(e)=>setTaikhoanmatkhau(e.target.value)}>
                
                </input>
                </div>
                <div className="uudai">
                        
                    <input type="checkbox" ></input>
                        <p>Nhớ mật khẩu</p>
                        </div>
           
            <Link to={`${dangnhap.length===0?"/dangnhapvona":`${luudatghe.length===0?"/trangtru":"/datghe"}`}`}>
            <div className="btn-dangky" onClick={handledangnhap} >
                       Đăng Nhập 
                    </div>
            </Link>
                    <p className="xemxet">
                   
                        <Link to="/dangkyvonao">
                        Chưa có tài khoản? Đăng ký ngay</Link>

                    </p>
       
        </form>
        </div>
    )
}

export default Dangnhap

