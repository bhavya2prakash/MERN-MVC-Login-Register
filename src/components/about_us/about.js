import React from 'react'
import Navbar from '../navbar/navbar'
import Card from '../card/card'
import "./about.css"
function about() {
  return (
    <div className='about'>
        <Navbar />
        <Card name="About Us Page" body="User has now landed on the About Page"/>

    </div>
  )
}

export default about