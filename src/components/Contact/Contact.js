import React from 'react'


import './contact.css'
import Crud from './Crud'
const Contact = () => {
  return (
    <section>
     <div className='container'>
     <Crud />
        <div className='row contact'>
            <div className='col-6'>
                <div className='contact-text'>
                    <h3>Contact</h3>
                    <h2>Message Me..</h2>
                    <p>Need to develop React or WordPress website ? I am here to help you.</p>
                    <div className='mt-10'>
                        <li><span>Address</span> :  Dhaka, Bangladesh</li>
                        <li><span>Email </span> :  forhadhossain0619@gmail.com</li>
                        <li><span>Phone</span> :  01797911253</li>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className='contact-form'>
                    <div>
                        <label>FullName :</label>
                        <input type="text" name='fistname'  placeholder='Your First Name'/>
                    </div>

                    <div>
                        <label>Subject :</label>
                        <input type="text" name='fistname'  placeholder='subject'/>
                    </div>
                    <div>
                        <label>Email :</label>
                        <input type="email" name='email'  placeholder='Your Email'/>
                    </div>
                    <div>
                        <label>Message :</label>
                        <textarea type="email" name='Message'  placeholder='Your Email'></textarea>
                    </div>
                    <div>
                        <button className='btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
       
     </div>
    </section>
  )
}

export default Contact
