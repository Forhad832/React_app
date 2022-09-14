import React, { useEffect, useState } from 'react'

const CountrySearch = (props) => {
    const [searchText,setSearchText] = useState('')

    const handleChange = (e)=>{
        setSearchText(e.target.value);
        
    }
    useEffect(()=>{
        props.onSearch(searchText)
    },[searchText])
  return (
    <div className='search-input'>
      <input type='text'  value={searchText} onChange={handleChange}/>
    </div>
  )
}

export default CountrySearch
