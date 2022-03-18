import React from 'react'
import frontPhoto from "./front.jpg"



function Card({card,handleChoice,flipped}) {


    const handleClick =()=>{
        handleChoice(card) 
    }


  return (
    <div className='card' >
    <div className={flipped ? "flipped" : ""}>
    <img  className='front'  src={card.img} alt='backPhoto'style={{width:"200px",height:"200px"}}/>
    
    <img className='back' onClick={handleClick}  src ={frontPhoto} alt="frontPhoto" style={{width:"200px",height:"200px"}}/>
    </div>
    </div>


   
  )


}

export default Card;