import React from 'react'
import {useGlobalContext} from '../context'
const Tintuc = ({bien}) => {
    const {listphim}=useGlobalContext();
    console.log(listphim);
    return (
        <div className="tintuc">
            {listphim.map((item,index)=>
            {
                if(item.maPhim=== Number(bien))
                    {
                        return (<div key={index} className="row">
                           
                            <div className="tintuc-trai col-md-6">
                                <div>
                                    <p><b>Tên Phim :</b></p>
                                    <p><b>Ngày Công Chiếu :</b></p>
                                    <p><b>Diễn Viễn :</b></p>
                                    <p><b>Thể Loại :</b></p>
                                    <p><b>Định Dạng :</b></p>
                                    <p><b>Ngôn Ngữ :</b></p>
                                </div>
                                <div>
                                <p><b>{item.tenPhim}</b></p>
                                    <p><b>{item.ngayKhoiChieu}</b></p>
                                    <p><b>Faker</b></p>
                                    <p><b>League Of Lengeds</b></p>
                                    <p><b>3D</b></p>
                                    <p><b>Việt Nam</b></p>
                                </div>
                                </div>
                            <div className="tintuc-phai col-md-6">
                                <div>
                                    <h5><b>Mô Tả</b></h5>
                                    <p><b>{item.moTa}</b></p>
                                </div>
                            </div>
                            </div>
                        )
                    }
            })}
                        
        </div>
    )
}

export default Tintuc
