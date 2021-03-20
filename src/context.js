import React,{useContext, useEffect, useState} from 'react'

const AppContext=React.createContext();
const AppProvider=({children})=>
    {    
        const url="https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
        const url1="https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01";
        const [listphim,setListphim]=useState([]);
        const [listrap,setListrap]=useState([]);
        const [diem,setDiem]=useState(null);
        const [songuoi,setSonguoi]=useState();
        const [bangnx,setBangnx]=useState(JSON.parse(localStorage.getItem("laylai"))||[])
        const [bangsao,setBangsao]=useState(JSON.parse(localStorage.getItem("getsao"))||[])
        const [dangky,setDangky]=useState(JSON.parse(localStorage.getItem("dangkydi"))||[])
        const [luurang,setLuurang]=useState(JSON.parse(localStorage.getItem("luurang"))||[])
        const [dangnhap,setDangnhap]=useState([])
        const [luudatghe,setLuudatghe]=useState([])
        useEffect(async()=>
            {
                const responsive = await fetch(url)
                const data=await responsive.json();
                setListphim(data);
                

            },[])
        useEffect(async()=>
            {
                const responsive = await fetch(url1)
                const data=await responsive.json();
                setListrap(data);
                

            },[])
        return <AppContext.Provider value={{
        
            listphim,setListphim,
            listrap,setListrap,
            diem,setDiem,
            songuoi,setSonguoi,
            bangnx,setBangnx,
            bangsao,setBangsao,
            dangky,setDangky,
            dangnhap,setDangnhap,
            luudatghe,setLuudatghe,
            luurang,setLuurang

            
        }}>
            {children}
        </AppContext.Provider>
    }
export const useGlobalContext = () => {
        return useContext(AppContext)
      }
      
     export { AppContext, AppProvider }