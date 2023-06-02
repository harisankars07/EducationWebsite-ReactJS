import React from 'react'
import './plans.css'
import { Link } from 'react-router-dom'

function Plans() {
    const pricingData =[
        {
        title:'Regular Member',
        price:'$0',
        duration:'/month',
        color:'#fff',
        features:[
            'Unlimited Access To Courses',
            'Customer Support',
            'Personal Mentor',
            'Standard Options',
            '5 Days Per Week'
        ]
    },
    {
        title:'Premium Member',
        price:'$100',
        duration:'/month',
        color:'#6f55f2',
        features:[
            'Unlimited Access To Courses',
            'Customer Support',
            'Personal Mentor',
            'Standard Options',
            '5 Days Per Week'
        ]
    },
    {
        title:'Standard Member',
        price:'$10',
        duration:'/month',
        color:'#fff',
        features:[
            'Unlimited Access To Courses',
            'Customer Support',
            'Personal Mentor',
            'Standard Options',
            '5 Days Per Week'
        ]
    },

]
  return (
    <div className='container'>
        <div className='pricing_top'>
        <h2 className='section_title'>
                Premium Pricing Plan
            </h2>
            <p>Unlock The Elite Pricing Plans with EduTech and soar ahead of panning
            </p>

        </div>
        <div className='pricing_wrapper'>
            {pricingData.map((pricingItem,index) =>(
    <div className='pricing_item' key={index}>
        <div className='pricing_card-top' 
        style={{background: pricingItem.color}}>
            <h2 className='section_title'>
                {pricingItem.title}</h2>
            <h2 className='pricing_section_title'>{pricingItem.price}<span>{pricingItem.duration}</span></h2>

        </div>
        <div className='services'>
            <ul>
                {pricingItem.features.map((feature, index) =>(
                    <li key={index}>{feature}</li>
                ))}
            </ul>
          <Link  to='/contact'>  <button className='register-btn'>
                Join
            </button></Link>
        </div>
    </div>
  ))}
        </div>
      
    </div>
  )
}

export default Plans
