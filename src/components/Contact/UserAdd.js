import React, { useEffect, useState } from 'react'

const UserAdd = (props) => {
    const [user,setUser] = useState({
        username : '',
        email :''
    });

    const {username,email} = user
    const handleChnage = (e)=>{
        setUser({...user,[e.target.name] : e.target.value});
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onAdd(user)
    }
   
  return (
    <form className='form-center' onSubmit={handleSubmit}>
      <div>
        <input type='text'  value={username} required placeholder='Write Your username' name='username' onChange={handleChnage}/>
      </div>
      <div>
        <input type='email'  value={email} required placeholder='Write Your email' name='email' onChange={handleChnage}/>
      </div>
      <div>
        <button className='btn' type='submit'>Add User</button>
      </div>
    </form>
  )
}

export default UserAdd
