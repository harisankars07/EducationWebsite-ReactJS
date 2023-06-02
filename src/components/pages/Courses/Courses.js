import React from 'react'
import './Courses.css'
import ai from '../../../assets/img/ai.png'
import sd from '../../../assets/img/sd.png'
import dg from '../../../assets/img/dg.png'
import hacker from '../../../assets/img/hacking.png'

 

function Courses() {
    const courseData =[
    {
        title:'AI DEVELOPMENT',
        Desc:'Master AI Development!!!',
        img:ai,
    },
    {
        title:'DIGITAL MARKETING',
        Desc:'Master Digital Marketing!!!!',
        img:dg,
    },
    {
        title:'CYBER SECURITY',
        Desc:'Master Cyber Security!!!',
        img:hacker,
    },
    {
        title:'SOFTWARE DEVELOPMENT',
        Desc:'Master Software Development!!!',
        img:sd,
    },

];


  return (
    <div className='container course-container'>
        <div className='course-top'>
            <h2 className='section_title'>Our  Free Courses</h2>
            <p>The Top Trending Free Courses With free certificates</p>
        <div className='course-wrapper'>
            {
                courseData.map((course,index)=>(
                    <div className='course-item'key={index}>
                    <span className='course-icon'>
                        <img src={course.img} alt=''/>
                    </span>
                    <div className='course_content'>
                        <h4>{course.title}</h4>
                        <p>{course.Desc}</p>
                    </div>     
                    </div>  
                ))
            }
        </div> 
        </div>
    </div>
  )
}

export default Courses
