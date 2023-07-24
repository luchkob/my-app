
import React from 'react'
import { auth } from '../db/firebase_config'
import { signOut } from 'firebase/auth'
function Home() {
 async function logOut(){
   signOut(auth)
   .then(()=>{
    
   })
   .catch(()=>{
    alert('error')
   })
  }
  return (
    <>
    <div className='fixed items-center bg-blue-600 p-5 w-screen flex justify-between  '>
       <div className='flex '>
        <button onClick={()=>logOut()}className="bg-white  rounded px-4 py">L0GOUT</button>
         <img className='inline ml-3 bg-transparent text-blue-500' width={20} height={20}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDed61nMZ0kLsFJGTkmPJDSPsKp9xlr-dwvTnOrprMuQ&s'></img>
       </div>
         <span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
         </span>
    </div>
      <div className='translate-y-20'>
        <h1>YOU are :{auth.currentUser.email}</h1>
      </div>
    </>

  )
}

export default Home