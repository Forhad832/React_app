import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { blogsData } from './blogsData';
const Blog = () => {
     const {title} = useParams();
     const [bodyData,setBodyData] = useState();

     useEffect(()=>{
        const blogdata = blogsData.filter((blog)=> blog.title === title);
        setBodyData(blogdata[0].para)
     },[])
  return (
    <section>
         <div className='container'>
         <article>
        <h2>{title}</h2>
        <p>{bodyData}</p>
    </article>
    <Link className='btn' to='/blogs'>Previous page</Link>
         </div>
    </section>
  )
}

export default Blog
