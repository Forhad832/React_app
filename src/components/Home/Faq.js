import React, { useState } from 'react'

const Faq = (props) => {
    const {id,title,para} = props.faq;
    const [faq,setFaq] = useState(false)
  return (
    <div key={id}>
     <div className='flex'>
     <h2>{title}</h2>
     
     <button onClick={()=>{setFaq(!faq)}}>
        {faq ? '-' : '+'}
     </button>
     </div>
     {faq && <p>{para}</p>}
    </div>
  )
}

export default Faq
