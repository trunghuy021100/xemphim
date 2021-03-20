import React, { useState,useEffect } from 'react'
import {data} from './data-slide'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

const Slide = () => {
    const [picture,setPicture]=useState(data)
    const [index,setIndex]=useState(0);
    const handleTruotTrai=()=>
    {
      
        if(window.innerWidth<768)
            {
                setIndex(index+1);
               
               
            }
    }
    useEffect(()=>
        {
            if(index===4)
            {
                setIndex(0);
            }
            
        },[index])
    useEffect(() => {
        let slide=setInterval(()=>
            {
                
                setIndex(index + 1);
                
            },5000)
        return () => {
            clearInterval(slide);
        }
    }, [index])
    
    return (
<section className="section" draggable="true" onDragEnd={handleTruotTrai}>
    <div className="section-center">
             {picture.map((pic,picIndex)=>
                {
                    const {id,image,name,title,qoute}=pic;
                    let position='nextSlide';
                    if(picIndex===index)
                        {
                            position="activeSlide";
                        }
                    if(picIndex===index-1 || (index === 0 && picIndex === picture.length - 1))
                        {
                            position="lastSlide";
                        }
                        return(
                            
                            <article className={position}  key={id}>
                                <img src={image} alt={name} className="person-img"></img>
                            </article>
                        )
                })}
               <FiChevronLeft className="prev" onClick={()=>setIndex(index-1)}></FiChevronLeft>
               <FiChevronRight className="next" onClick={()=>setIndex(index+1)}></FiChevronRight>
                
         </div>
</section>
    )
}

export default Slide
