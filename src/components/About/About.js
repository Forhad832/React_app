import React from 'react'

import Forhad from './Forhad.png'

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <div className='about-text'>
                    <h3>About Me</h3>
                    <h2 className='color'>My Story</h2>
                    <p>I am Forhad Hossen, I am an Diploma Final semester Student and I am also learing Web Development Front-end Developer with 5 years+ professional experience by providing service to ‘ IT Solutions ‘. Enjoy Coding and problem solver.</p>
                    <hr></hr>
                   <div className='mt-10'>
                       <li><span>Age</span> :  22</li>
                       <li><span>Nationality</span> : Bangladeshi</li>
                       <li><span>Language</span> : Bangla,English</li>
                       <li><span>Address</span> :  Dhaka, Bangladesh</li>
                        <li><span>Email </span> :  forhadhossain0619@gmail.com</li>
                        <li><span>Phone</span> :  01797911253</li>
                   </div>
                </div>
            </div>
            <div className='col-6'>
                <div>
                    <img src={Forhad}  alt='Forhad Imaeg'/>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
