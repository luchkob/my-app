 "use client"
import React from 'react'
import { auth } from '../db/firebase_config'
import { signOut } from 'firebase/auth'
 import { CldVideoPlayer } from 'next-cloudinary'
 
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
        <img className='rounded-lg ml-2' src={auth.currentUser.photoURL} width={40} height={40} alt='sorry'/>
         {/* <img className='inline ml-3 bg-transparent text-blue-500' width={20} height={20}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDed61nMZ0kLsFJGTkmPJDSPsKp9xlr-dwvTnOrprMuQ&s'></img> */}
       </div>
         <span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
             
         </span>
         <div className='text-white text-lg absolute right-16 top-6 '>{auth.currentUser.displayName }</div>
    </div>
      <div className='translate-y-20 mx-8  '>
           <h1 className='text-2xl '>Welcom puk ah cherm</h1>
           <p>This is a sample project created using NextJS, Firebase and TailwindCSS.</p><br/>
           
 
      </div>
    </>

  )
}

export default Home