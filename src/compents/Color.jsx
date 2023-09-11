import React,{ useState } from 'react'

const Color = () => {
  const [initial,final] = useState("blue");
  return (
    <div>
   


   
  
        <h1 style={{color: initial}}>Color is {initial}</h1>
        <button onClick={()=>{final("red")}} onDoubleClick={()=>{final("blue")}}>Red</button>
      
    
    
    </div>

  )
  }

export default Color
