import React from 'react'
import {auth} from '../firebase'


const LogOut = () => {
  
  const signOut = () => {
         signOut(auth)
  }

  return (
    <div>
        <button onClick={()=>auth.signOut()} className='text-black bg-gray-200'>
              Log out
        </button>
    </div>
  )
}

export default LogOut