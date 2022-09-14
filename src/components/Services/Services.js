import React from 'react'
import Service_card from './Service_card'


const Services = () => {
  return (
    <section>
      <div className='container'>
        <h2 style={{fontSize:'2rem',color:'#333',textAlign:'center',marginBottom:'3rem'}}>OUR SERVICE</h2>
          <h2 style={{fontSize:'3rem',color:'#E94560',textAlign:'center',marginBottom:'3rem'}}>Demand First-Rate Best Services</h2>
        <div className='grid'>
            <div>
                <Service_card heading='Web Development' para=' Of Work Us
Our mission is to provide quality English language instruction through a variety of courses to international and local students in a professional and supportive atmosphere utilizing our unique ing methodology.Our mission is to provide.' />
            </div>
            <div>
                <Service_card heading='Web Design' para=' Of Work Us
Our misn through a variety of courses to international and local students in a professional and supportive atmosphere utilizing our unique English teaching methodology.Our mission is to provide.' />
            </div>
            <div>
                <Service_card heading='Responsive Website' para=' Of Work Us
Our mission is to provide quality English language instruction through a variety of courses to international and loprofessional and supportive atmosphere utilizing our unique English teaching methodology.Our mission is to provide.' />
            </div>
            <div>
                <Service_card heading='Build Prototypes' para=' Of Work Us
Our mission is to provide qualitonal and supportive atmosphere utilizing our unique English teaching methodology.Our mission is to provide.' />
            </div>
            <div>
                <Service_card heading='Development' para=' Of Work Us
Our mission is to provide quality English language instruction through a variety of courses to international and local students in a professional and supportive atmosphere utilizing our unique English teaching methodology.Our mission is to provide.' />
            </div>
            <div>
                <Service_card heading=' Lunch Exprience' para=' Of Work Us
Our mission is to provide quality English language instruction through a variety of courses to international and local students in a professional and supportive atmosphere utilizing our unique English teaching methodology.Our mission is to provide.' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
