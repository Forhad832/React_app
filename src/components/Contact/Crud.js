import React, { useEffect, useState } from 'react'
import UserAdd from './UserAdd';


const URL = "https://rest-api-without-db.herokuapp.com/users";

const Crud = () => {
    const  [users,setUsers] = useState('');


    const getAllUsers = ()=>{
        fetch(URL)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setUsers(data.users)
        })
    }

    useEffect(()=>{
        getAllUsers();
    });

    const handleDelete = (id)=>{
        fetch(URL + `/${id}`,{
            method:"DELETE"
        })
        .then((res)=>{
            getAllUsers()
        })
        
    };

    const handleAddUSer = (user)=>{
        fetch(URL,{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        .then((res)=>{
            getAllUsers()
        })
    }
  return (
   <>
   <UserAdd onAdd={handleAddUSer}/>
    <div className='grid'>
      {users && users.map((user)=>{
        const {username,email,id} = user

        return (
            <article className='crud' key={id}>
                <p>{username}</p>
                <p>{email}</p>
                <button className='btn me'>Edit</button>
                <button className='btn' onClick={()=>{handleDelete(id)}}>Delete</button>
            </article>
        )
      })}
    </div>
   </>
  )
}

export default Crud
