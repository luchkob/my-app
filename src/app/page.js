'use client'
import Home from './Components/Home'
import Login from './Components/Login'
import React, { useContext ,createContext, useState, useReducer, useEffect} from 'react'
// import { createUserWithEmailAndPassword,deleteUser,signInWithEmailAndPassword,onAuthStateChanged, updatePassword, sendEmailVerification, updateEmail, signOut } from 'firebase/auth'
import { auth } from './db/firebase_config'
import { onAuthStateChanged } from 'firebase/auth'
 
export const AuthContext=createContext(null)

export default function page() {
   const [login,setlogin]=useState(false)
  
   useEffect(()=>{
       onAuthStateChanged(auth,(user)=>{
        if(user){
              setlogin(true)
                 
            }else{
          setlogin(false)
           
        }
       })
   },[])
  return (
      <div>
        <AuthContext.Provider value={{login,setlogin}}>
             {login ? (
              <Home/>
             ):
             (
               <Login/>

             )}

        </AuthContext.Provider>
      </div>
  )
}
 