import React from 'react'





export default function Destinaationcard(props) {
   
        
    


  return (
<>




 <div class="card">
            <img src={props.img} alt="" />
           
              <h1>{props.name}</h1>
              <h3>{props.days}</h3>
              <h4>{props.amount}</h4>
            
            <button>book Now</button>
        </div>
        
        
        
        
        
        </>
      
   
    
  )
}
