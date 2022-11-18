import React from 'react'
import Navbar from '../navbar/navbar'
import Card from '../card/card'
import Map from '../reactmap'
import "./jobs.css"
function jobs() {
  const numbers = ["Software Engineer","Ouality Engineer","Web Developer"];
  return (
    <div className='jobs'>
       <Navbar /> 
       
       <Card name="Jobs Page" body="User has now landed on the Jobs page"/>
       <div className='info'>The following are job oppurtunities we offer : <br></br><Map numbers={numbers} /></div>
       </div>
       
  )
}

export default jobs