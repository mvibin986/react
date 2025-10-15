import React from 'react'




export default function Destinaationcard(props) {
   
        
    


  return (
<>




 <div class="card">
            <img src={props.img} alt=""/>
           <div className='data'>
            <h1>{props.name}</h1>
            <p>{props.days}</p>
            <p>{props.amount}</p>
            </div> 
            <button>book Now</button>
        </div></>
      
   
    
  )
}
