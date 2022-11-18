import React from 'react'
import Navbar from '../navbar/navbar'
import Card from '../card/card'
import Map from '../reactmap'
import "./contact.css"
function contact() {
const numbers = [8765456789,8436789065,8765456789];
  return (
    <div className='contact'>
      <Navbar />  
      <Card name="Contact Page" body="User has now landed on the Contact Page"/>
      <div className='info'>The following are our contact numbers: <br></br><Map numbers={numbers} /></div>
      </div>
  )
}

export default contact