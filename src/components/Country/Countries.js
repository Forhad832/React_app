import React from 'react'

import uuid from 'react-uuid';
import Country from './Country';
const Countries = (props) => {
  return (
    <section>
      <div className='container'>
        <div className='grid'>
            {props.countries.map((country)=>{

                const newCountry = {id: uuid(),country} 

                return <Country onRemove={props.onRemove} key={newCountry.id} {...country} />
            })}
        </div>
      </div>
    </section>
  )
}

export default Countries
