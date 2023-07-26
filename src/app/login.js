'use client'
import { auth } from './db/firebase_config'
// import { getDocs,collection } from 'firebase/firestore'
import {
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   GoogleAuthProvider,

   FacebookAuthProvider,
   signInWithRedirect,
   getRedirectResult,
   signOut,
   signInWithPopup

} from 'firebase/auth'
//  import { db } from './db/firebase_config'
import { useEffect, useRef, useState } from 'react'
import {AiFillFacebook} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FaSpinner} from "react-icons/fa"
 
 
export default function Login() {
 const [email,Setemail]=useState('')
 const [password,Setpassword]=useState('')
 const [isloading,Setloading]=useState(false)
 
 const style={
  input:'outline-none bg-gray-300 border-b-2 text-white border-red-300 text-left  ',
  icon:' bg-blue-400 w-full p-1 rounded-sm flex items-center gap-1 jsutify-center',
  submitInput:'bg-blue-500 text-white p-1 px-2    rounded-lg hover:scale-125  transition-all'
 }
 
 function submit(e){
 e.preventDefault()

 }
  function Login(){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)){
      signInWithEmailAndPassword(auth,email,password)
    Setloading(true)

        .then(()=>{
         Setemail('')
         Setpassword('')
         Setloading(false)
        })
        .catch(()=>{
          alert('invalid email')
        })
      }else{
       alert('use strongest password')
      }
  }
  function Register(){
     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)){
    Setloading(true)
      
        createUserWithEmailAndPassword(auth,email,password)
       .then(()=>{
        Setemail('')
        Setpassword('')
        Setloading(false)
       })
     }else{
      alert('use strongest password')
     }
       
  }
 
async  function RegisterFacebook(){
    Setloading(true)
      //  await signInWithRedirect(auth, FacebookProvider)
      //  await getRedirectResult(auth)
      //   .then((res)=>{
      //     console.log(res.user)
      //     Setloading(false)
      //   })
      //   .catch(()=>{
      //       console.log('try again')
      //   })
      signInWithPopup(auth,new FacebookAuthProvider)
      .then(()=>{
        Setloading(false)
      }).catch(()=>{

      })
       
  }
async  function RegisterGoogle(){
    Setloading(true)
      await  signInWithRedirect(auth ,new GoogleAuthProvider)
      await  getRedirectResult(auth)
        .then((res)=>{
          console.log(res.user)
          Setloading(false)
        })
        .catch(()=>{
            
        })
  }
  return (
      <div className='w-screen font-extralight font-mono  h-screen flex items-center flex-col justify-center'>
        <h1 className=' text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent  mb-3'> PLEASE AUTHENTICATE!</h1>
         <form onSubmit={(e)=>submit(e)} className='flex  flex-col items-center justify-center bg-gray-300 p-6 gap-y-2 box-border shadow-slate-300'>
          <input   onChange={(e)=>Setemail(e.target.value)}  className={style.input} type='email' value={email} placeholder='email:'/>
          <input   onChange={(e)=>Setpassword(e.target.value)}  className={style.input} type='text' value={password} placeholder='password'/>
          <span onClick={RegisterFacebook} className={style.icon}><AiFillFacebook/><i className='inline'>:login with facebook</i></span>
          <span onClick={RegisterGoogle} className={style.icon}><FcGoogle/><i>:login with youtube</i></span>
         <div className='flex gap-x-2'>
          <input type='submit' onClick={Login} value='login' className={style.submitInput}/>
          <input type='submit' onClick={Register} value='register' className={style.submitInput}/>
          </div>
          <button onClick={()=>{signOut(auth)}}>logout</button>
            </form>
        
          {isloading 
          ?
          (<Loading/>)
          :
          <div></div>
        }
       
      </div>
  )
}
 

function Loading(){


  return(
    <div className='fixed h-screen w-screen flex items-center justify-center backdrop-blur-lg '>
      <span className='animate-spin text-4xl text-blue-700 duration-700  '>
      <FaSpinner/>
        </span>
    </div>
  )
}