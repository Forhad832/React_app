import React, { useEffect, useState } from 'react'
import Countries from './Countries';
import CountrySearch from './CountrySearch';

const URL = 'https://restcountries.com/v3.1/all';
const Index = () => {
    const [countries,setCountries] = useState();
  
    const [isLoading,setIsLoading] = useState(false);
    const [filteredCountries,setFilteredCountries] = useState(countries);

  const fetchData = async (URL)=>{
    setIsLoading(true);

        const response = await fetch(URL);
        const data = await response.json()

        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false)
  }

    useEffect(()=>{
     
       fetchData(URL)
    },[]);



    const handleRemove = (name)=>{
      const filtered = filteredCountries.filter((country) => country.name.common !== name)
        

      setFilteredCountries(filtered)
    };


    const handleSearch = (searchText)=>{
     let value = searchText.toLowerCase();

     const newCountry = countries?.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
     }) 
     setFilteredCountries(newCountry)
    
    }
  return (
    <section id='counrty'>
      <div className='container'>
      <CountrySearch  onSearch={handleSearch}/>
        {isLoading && <h3>Wait For Some Times</h3>}
         
            {countries && <Countries onRemove={handleRemove} countries={filteredCountries} />}
      
      </div>
    </section>
  )
}

export default Index
