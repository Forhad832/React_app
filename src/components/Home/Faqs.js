import React, { useState } from 'react'
import Faq from './Faq'

import { faqsData } from './faqsData'
const Faqs = () => {
    const [faqs,setFaqs] = useState(faqsData)
  return (
    <div className='mid-container'>
      {faqs && faqs.map((faq)=> {

        return <Faq key={faq.id} faq={faq} />
      })}
    </div>
  )
}

export default Faqs

