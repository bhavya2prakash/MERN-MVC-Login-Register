import React from 'react'
import "./home.css"
import Navbar from '../navbar/navbar'
import Card from '../card/card'
function home({updateUser}) {
  return (
  
    
    <div className='home'>
    <Navbar />

    <Card name="Home Page" body="User has successfully logged in and landed on the Home Page"/>
    <div className="button" onClick={() => updateUser({})} >Logout</div>
   
</div>

  )
}

export default home