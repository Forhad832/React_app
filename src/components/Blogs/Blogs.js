import React, { useState } from 'react'
import Blog from './Blog'
import { Link } from 'react-router-dom'
import { blogsData } from './blogsData'
const Blogs = () => {
    const  [blogs,setBlogs] = useState(blogsData)
  return (
    <section>
     <div className='container'>
     <div className='grid'>
        {blogs.map((blog)=> {
            const {id,title,para} = blog;

            return  (
                <article key={id}>
                <h2>{title}</h2>
                <p>{para.slice(0,200)}</p>
                <Link className='btn' to={title}>Learn more</Link>
              </article>
            )
           
        })}
      </div>
     </div>
    </section>
  )
}

export default Blogs
