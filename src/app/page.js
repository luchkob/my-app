"use client" 
 import Loading from "./Components/Loading"
 import styles from "./styles.module.css"
 import { useEffect, useState } from "react"
 export default    function Home(){
  const [loasding,isloasding]=useState(true)
  const [data,setdata]=useState([])
  const [datainput,setdatainput]=useState('')
    
  function fetcher(){
     
    {
    fetch(`https://jsonplaceholder.typicode.com/posts/${datainput}`)
    .then(json =>json.json())
    .then(e=>{
       setdata([...data,e])
        isloasding(false)
     

    })
  }
  }
  useEffect(()=>{
   fetcher()
  }
  ,[datainput])
  return(
    <>
    <div>
     <h1 className={styles.text}>Welcome to NextJS</h1>
     <div className="w-fit m-auto mt-2 mb-2">
     <input type="text" placeholder="type number you want to fetch" onChange={(e)=>{setdatainput(e.target.value)}} className="outline-none border-none text-blue-500" maxLength={10}/>
     {/* <button className="bg-blue-600 text-white p-3 rounded-lg">Send</button><br/> */}
     </div>
               {
                loasding ? (
                    <Loading/>
                ) 
                :(
                  <>
                {data.map(e =>{
                  return (
                    <div key={e.id} className="bg-blue-600 rounded-lg mx-4 mb-3">
                      <ul  className="m-auto  w-fit uppercase underline text-yellow-50 font-thin font-serif">client : {e.id}</ul>
                       <ul className="mb-2 px-3 border-emerald-500"><span className="text-[2rem] text-green-900 uppercase">title</span> : {e.title}</ul>
                       <ul> <span className="text-[2rem] px-3 font-serif  uppercase text-yellow-500">description</span> : {e.body}</ul>
                    </div>
                  )
                })}
                  
                  </>
                )
               }
    </div>     
    </>
  )
 }