import React from 'react'
import { auth } from '../firebase'
import { GoogleAuthProvider , signInWithRedirect  } from 'firebase/auth'
import GoogleButton from 'react-google-button'

function Signin() {
      const googleSignIn = () => {
          const provider = new GoogleAuthProvider()
          signInWithRedirect(auth,provider)
      }

      
  return (
     <div className='flex justify-center'>
         <GoogleButton onClick={googleSignIn} />
     </div>
  )
}

export default Signin