 "use client"
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { auth } from '../db/firebase_config'
import { signOut } from 'firebase/auth'
 import {AiOutlineComment,AiOutlineHeart,AiOutlineLoading3Quarters} from 'react-icons/ai'
  import { getFirestore,addDoc,collection,getDocs } from 'firebase/firestore'
  import {app} from "../db/firebase_config"

  const db=getFirestore(app)
function Home() {
   const [comment,setcomment]=useState(null)
   const inputRef=useRef(null)
   const [allComment,setAllComment]=useState([])
   const [loading,setLoading]=useState(false)
   const [ShowComment,setShowComment]=useState(false)
   
 async function logOut(){
   signOut(auth)
   .then(()=>{
    
   })
   .catch(()=>{
    alert('error')
   })
  }
  
 async function Add(){
    
  if(inputRef.current.value===''){
     
  }else{
       setLoading(true)
       try {
        const docRef = await addDoc(collection(db, "newComment"), {
           comment:comment,
           userComment:auth.currentUser.displayName,
           userProfile:auth.currentUser.photoURL
        });
         inputRef.current.value=''
           setLoading(false)
        
      } catch (e) {
        console.error("Error adding document: ", e);
      
      
      }
    }
  }
 
 useEffect(()=>{

 
 },[])

 var getComment= ()=>{
    const todos=[]
  async function my (){
    const querySnapshot = await getDocs(collection(db, "newComment",));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      todos.push({...doc.data()})
      // console.log(todos)
      setAllComment(todos)
      
    });
    
  }
  
  my()
  setShowComment(!ShowComment)

  
  
 }
  
  return (
    <>
    <div className='fixed items-center bg-blue-600 p-5 w-screen flex justify-between  '>
       <div className='flex '>
        <button onClick={()=>logOut()}className="bg-white  rounded px-4 py">L0GOUT</button>
        <img className='rounded-lg ml-2' src={auth.currentUser.photoURL} width={40} height={40} />
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
          
           <video controls src='https://res.cloudinary.com/dk83fjruf/video/upload/v1690296898/kakashi_dzb9pc.mp4' autoPlay  loop  width={400} height={100}/> 
          <div className='border-blue-600 border-2 mt-4 w-fit rounded-lg'>       
           <input type='text' ref={inputRef} onChange={(e)=>setcomment(e.target.value)} placeholder='write comment!' className=' ml-1  border-blue-500 outline-none'/>
           <button onClick={Add} className='text-blue-50 bg-blue-600 p-2 rounded-lg'> SEND</button>
           </div>
           <div  className='flex text-2xl gap-7 ml-4 mt-2'>
            <span onClick={getComment} className='hover:scale-150 hover:text-blue-600 duration-200'><AiOutlineComment/></span>
            {/* <span ><AiOutlineHeart/></span> */}
            {
              loading ? 
              ( 
              <div className='fixed w-full h-44 flex items-center justify-center  bg-white shadow-md shadow-blue-200   -translate-y-20 m-auto'>
                  <img src='Spinner.svg' width={100} height={100}/>
            </div>
         ):
           (<div></div>)
            }
             </div>
              <div className={ShowComment ? ' transition-all duration-300 ease-linear h-fit w-full':'hidden transition-all duration-200'}>
                 {allComment.map(e=>{
                  return(
                    <div className='border-b-2 mt-2 text-white rounded-lg bg-blue-400 flex p-3 justify-between '>
                      <p>{e.comment}</p>
                     <div className='flex gap-2'>
                      <span className='text-red-600'>{e.userComment}</span>
                      <img src={e.userProfile} width={20} height={20}/>
                      </div>
                    </div>
                  )
                 })}
              </div>

          
           
          
      </div>
       
    </>

  )
}

export default Home