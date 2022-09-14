import React from 'react'

const Country = ({id,name,capital,flags,population,area,onRemove}) => {

    const handleRemove = (name)=>{
        onRemove(name)
    }
  return (
    <article className='country' key={id}>
      <img src={flags.png} />
      <h3>Name : {name.common}</h3>
      <h3>Capital : {capital}</h3>
      <h3>Population : {population}</h3>
      <h3>Area : {area}</h3>
      <button className='btn' onClick={()=>{handleRemove(name.common)}}>Remove Country</button>
    </article>
  )
}

export default Country
