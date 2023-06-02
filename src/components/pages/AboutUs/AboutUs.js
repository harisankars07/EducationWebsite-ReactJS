import React from 'react'
import miya from '../../../assets/img/miya.jpg'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className='container'>
        <div className='about-us-container'>
            <div className='team-members'>
            <h2>Our Team</h2>
                <div className='member-card'>
                    <img className='member-image' src={miya} alt=''>
                    </img>
                    <h3 className='member-name'><center>MIYA</center></h3>
                    <p className='member-role'><center>Co-Founder</center></p>
                </div>
                    
                </div>
                
         
            <div className='about-us-description'>
    <h1 className='about-us-heading'>About Us</h1>
    <p>I want to work with an organization that can give me ample opportunities to grow so that I will be able
to help in the growth of that organization and will be able to enhance my skills and my capabilities.</p>
               
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs
