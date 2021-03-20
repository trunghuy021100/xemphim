import React, { useState,useEffect } from 'react'
import {useGlobalContext} from '../context'
import {FaLaughWink} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Loading from '../component/Loading'
const Dangky = () => {
    const {dangky,setDangky}=useGlobalContext();
    const [ho,setHo]=useState("")
    const [ten,setTen]=useState("")
    const [tendn,setTendn]=useState("")
    const [matkhau,setMatkhau]=useState("")
    const [nhaplai,setNhaplai]=useState("")
    const [email,setEmail]=useState("")
    const [sodt,setSodt]=useState("");
    const [xongchua,setXongchua]=useState(false)
    useEffect(()=>
        {
           setTimeout(()=>
            {
                setXongchua(true)
            },1000) 
        },[])
    const handleDangky=()=>{
        const arr=dangky.map((item,index)=>item.tendk);

        if(ho==="" || ten==="" || tendn==="" || nhaplai==="" ||matkhau===""
           || email===""||sodt==="")
            {
                alert("Bạn đã nhập thiếu dữ liêu ! Hãy Nhập lại")
            }
        else if(matkhau!==nhaplai)
            {
                alert("Bạn đã nhập sai mật khẩu")
            }
        else if(matkhau.length<7)
            {
                alert("Mật khâu không đủ khỏe ! Hãy đặt lại để bảo mật tốt hơn")
            }
        else if(arr.includes(tendn))
            {
                alert ("Tên này đã có người dùng ! Hãy đặt lại")
            }
        else{
            const lol=[...dangky,{tendk:tendn,mk:matkhau,sdt:sodt,email:email,ho:ho,ten:ten}]
            setDangky(lol)
            localStorage.setItem("dangkydi",JSON.stringify(lol))
            setTimeout(()=>
            {
                alert("Chúc mừng bạn đã đăng ký thành công !!!")
                setHo("")
                setTen("")
                setTendn("")
                setMatkhau("")
                setNhaplai("")
                setEmail("")
                setSodt("")
                            },500)
                    }
    }
    if(xongchua===false)
    {
        return(
            <div><Loading></Loading></div>
        )
    }
    return (
        <div className="dang-ky">
            
            <form className=" khung-dk">
                <div className="dangky-tt">
                   <i><FaLaughWink></FaLaughWink></i>
                    <h3>Đăng Ký</h3>
                </div>
                <div className="nhap-thongtin row">
                    
                        <input type="text" 
                       
                        placeholder="Họ *"
                        value={ho}
                        onChange={(e)=>setHo(e.target.value)}>

                        </input>
                        <input  type="text" 
                       
                        placeholder="Tên *"
                        value={ten}
                        onChange={(e)=>setTen(e.target.value)}>

                        </input>
                        <input type="text"
                        placeholder="Tài Khoản"
                        value={tendn}
                        onChange={(e)=>setTendn(e.target.value)}></input>
                         <input type="password"
                       
                        placeholder="Mật Khẩu *"
                        value={matkhau}
                        onChange={(e)=>setMatkhau(e.target.value)}>

                        </input>
                        <input  type="password" 
                       
                        placeholder="Xác Nhận Mật Khẩu *"
                        value={nhaplai}
                        onChange={(e)=>setNhaplai(e.target.value)}>

                        </input>
                         <input type="text" 
                        
                         placeholder="Email *"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}>

                        </input>
                        <input  type="text" 
                       
                        placeholder="Số Điện Thoại"
                        value={sodt}
                        onChange={(e)=>setSodt(e.target.value)}>

                        </input>
                        </div>
                        <div className="uudai">
                        
                        <input type="checkbox" ></input>
                            <p>Nhận các thông báo và ưu đãi mới nhất</p>
                            
                            </div>
                    
                        <div className="btn-dangky col-md-12"
                        onClick={handleDangky} >
                            Đăng Ký
                        </div>
                        <p className="xemxet">
                       <Link to="/dangnhapvonao"> Đã có tài khoản tại Tix? Đăng nhập ngay</Link>

                        </p>
                
            </form>

        </div>
    )
}

export default Dangky
