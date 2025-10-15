import React, {useState} from 'react'
import Destinaationcard  from './destinationcard/Destinaationcard'
import bali from "../../image/bali.jpg"
import thai from "../../image/thai.jpg"
import viet from "../../image/veit.jpg"
import goa from "../../image/goa.jpg"
import swi from "../../image/swi.jpg"
import tok from "../../image/tok.jpg"
export default function Destination() {
   


  return (
    <div>
    
      
        <div className="container">
        <Destinaationcard img={tok} name="tokiyo" days="7days"  amount="$70,000"
        />
        <Destinaationcard img={bali} name="bali" days="4days" amount="$30,000"/>
        <Destinaationcard img={thai} name="thailand" days="4days"  amount="$60,000"/>
        <Destinaationcard img={viet} name="vietnam" days="6days"  amount="$50,000"/>
        <Destinaationcard img={goa} name="goa" days="5days"  amount="$25,000"/>
        <Destinaationcard img={swi} name="Switzerland" days="7days"  amount="$90,000"/>
    </div> 
    </div>
  )
}
