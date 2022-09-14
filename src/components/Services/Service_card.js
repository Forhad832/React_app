import React from 'react'

const Service_card = ({heading,para}) => {
   
  return (
    <div className='card'>
       <div className='card-body'>
       <h2>{heading}</h2>
      <p>{para}</p>
       </div>
       <div className='card-footer'>
       <button className='btn'>Click Here</button>
       </div>
    </div>
  )
}

export default Service_card
