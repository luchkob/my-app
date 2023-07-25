'use client'
import React, { useRef } from 'react'
import { useState,useContext } from 'react'
import { AuthContext } from '../page'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithRedirect,getRedirectResult} from 'firebase/auth'
import { auth } from '../db/firebase_config'
import {FcGoogle} from 'react-icons/fc'
const provider =new GoogleAuthProvider()

export default function Login() {
     const [input,setInput]=useState({email:'',password:""})
      const {login,setlogin}=useContext(AuthContext)
      const [error,SetError]=useState(false)

      function GoogleSignin(){
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
     setlogin(!login)
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert('please try again')
  });
      }
     function loginUser(){
         const email_req=/^[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/
         const password_req= /^[A-Za-z]\w{7,14}$/
         if(email_req.test(input.email) && password_req.test(input.password)){

         signInWithEmailAndPassword(auth,input.email,input.password)
        .then(()=>{
            setlogin(!login)
        })
        .catch(()=>{
           alert("wrong password or email please try agian!")
        }) 
    }else{
        SetError(true)
    }    

    }
    
     function singup(){
         
        const email_req=/^[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]/
        const password_req=/^[A-Za-z]\w{7,14}$/
        if(email_req.test(input.email) && password_req.test(input.password)){

        createUserWithEmailAndPassword(auth,input.email,input.password)
       .then(()=>{
           setlogin(!login)
       })
       .catch(()=>{
          alert("there is some error please try again!")
       }) 
   }else{
       SetError(true)
   }    

     }
       
        
    
  return (
    <div className=' w-screen h-screen 
    '>
   <form onSubmit={(e)=>e.preventDefault()} className='h-full w-full flex flex-col items-center justify-center'>
    {error ?(<>
    <div className='absolute text-red-500 text-lg animate-pulse translate-x-4 translate-y-16'>
        use strong password and valid email
        </div></>):
        (
            <></>
        )}
    <input   value={input.email} onChange={(e)=>{setInput({...input,email:e.target.value})}} type='email' placeholder='email!' className='border-b-2 border-b-blue-600 outline-none mb-2'/>
    <input  value={input.password} onChange={(e)=> setInput({...input,password:e.target.value})} type='text' placeholder='password' className=' border-red-500 outline-none   border-b-2 mb-2'/>
    <div className='flex gap-3 uppercase text items-center justify-center'>
    <input onClick={loginUser} type='submit' value='login' className='hover:text-red-500'/>
    <input onClick={singup} type='submit' value='singup' className='hover:text-blue-700'/>
    <div className='block mt-2' onClick={GoogleSignin}>
       <FcGoogle/>
    </div>
    </div>
    </form>
    </div>
  )
}
