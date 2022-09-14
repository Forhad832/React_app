import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState(true)
  return (
    <section>
       
        <article className=''>
     {toggle && <div>
        <h3>Domain and Hoisting</h3>
      <p>professional experience by providing service to ‘ IT Solutions ‘. Enjoy Coding and problem solver</p></div>}
    </article>
    <button className='btn' onClick={()=>{setToggle(!toggle)}}>{toggle ? "Hide" : "open"}</button>
    </section>
  )
}

export default Toggle
