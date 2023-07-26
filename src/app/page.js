
'use client'
import { useEffect, useState } from "react"
import Login from "./login"
import Home from "./Components/Home"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./db/firebase_config"
export default function Pages(){
const [login,setlogin]=useState(false)
useEffect(()=>{
  onAuthStateChanged(auth,user=>{
    if(user){
   setlogin(true)
    }else{
      setlogin(false)
    }
  })
})

  return(
    <>
    <div>
   {
    login 
    ?
    (<>
    <Home/>
    </>):
    (
      <Login/>
    )
   }
    </div>
    </>
  )
}
 