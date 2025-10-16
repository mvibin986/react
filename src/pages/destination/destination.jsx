import React, {useState} from 'react'


import Destinaationcard  from './destinationcard/Destinaationcard'
import bali from "../../image/bali.jpg"
import thai from "../../image/thai.jpg"
import viet from "../../image/veit.jpg"
import goa from "../../image/goa.jpg"
import swi from "../../image/swi.jpg"
import tok from "../../image/tok.jpg"
import './destination.css'
export default function Destination() {
   
const [search, setSearch]=useState("")

const datas=[
{img:tok,name:"tokiyo",days:"7 Days",amount:"$90000"},
{img:thai,name:"thailand",days:"7 Days",amount:"$90000"},
{img:bali,name:"bali",days:"7 Days",amount:"$90000"},
{img:goa,name:"goa",days:"7 Days",amount:"$90000"},
{img:viet,name:"veitnam",days:"7 Days",amount:"$90000"},
{img:swi,name:"switzerland",days:"7 Days",amount:"$90000"},
]

const filterdDatas=datas.filter(
  (data)=>data.name.toLowerCase().includes(search.toLowerCase().trim())
  

)


  return (
    <div>
        <input type="text"
       placeholder='🔍 search by name'
       value={search}
       onChange={(data)=>setSearch(data.target.value)} />
      
        <div className="container">
             {filterdDatas.map((data)=>(
            <Destinaationcard
              
              img={data.img}
              name={data.name}
              days={data.days}
              amount={data.amount}
            />
            
            ))}
        </div>  
    </div>
  )
}
