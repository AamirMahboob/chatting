import React from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Signin from './Signin'
import LogOut from './LogOut'
   const style = {
      nav: `flex w-ful h-20 items-center justify-between bg-gray-800 p-4`,
      heading:`text-white  font-bold text-3xl`
   }

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
        <h1 className={style.heading}> Chat App</h1>


        { 
           user? <LogOut/> : <Signin />
        }
        
     

       
        
    </div>
  )
}

export default Navbar