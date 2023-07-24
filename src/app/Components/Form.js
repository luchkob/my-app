'use client'
import Link from "next/link"
  
import styles from "./css.module.css"
import * as React from 'react'
import { auth } from "../db/firebase_config"
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
 
export default function Form() {
  var [email,Setemail]=React.useState('')
  var [password,Setpassword]=React.useState()
   var[input,setinput]=React.useState('password')
   var [checkerForm,setCheckerForm]=React.useState(false)
 
   function submit(e){
        // createUserWithEmailAndPassword(auth,"umy@gmail.com",12345)
        // .then(e=>{
        //   console.log(e)
        //   const user=e.user
        //   console.log(user)
        // })
        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   // ..
        // });
       
  }
  function checker(){
        if(input==='password'){
          setinput('text')
        }else{
          setinput("password")
        }
  }
    async function Singin(){
      var email_req=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      var password_req= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
          if(!email_req.test(email) || !password_req.test(password)){
             setCheckerForm(!checkerForm)
                         
          } 
           createUserWithEmailAndPassword(auth,email,password)
        .then(e=>{
          // console.log(e)
          const user=e.user
          // console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
         
        
       

       
    }
  return (
    <>
    
    {
      checkerForm ? (
        <>
        <div className="fixed w-screen h-screen flex justify-center items-center  z-50">
        <div className="   mx-3 h-fit shadow-lg p-3 relative shadow-black rounded-lg -translate-y-20 bg-gray-400">
        <h1 className="text-2xl text-red-700 mb-10">The Warning</h1> 
        <span className="top-0 right-0 shadow-md shadow-slate-200 rounded-xl  w-fit absolute " onClick={()=>  {setCheckerForm(!checkerForm)}}> 
        <svg xmlns="http://www.w3.org/2000/svg" width='40px' widths='40px' enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="close"><path d="M12.0119629,2.0039062C6.491272,2.0006104,2.0131836,6.4733276,2.0098877,11.9940186S6.4793091,21.9927979,12,21.9960938c2.6522827,0.0043335,5.1970215-1.0482178,7.0712891-2.9248047c1.875-1.8734131,2.9291992-4.4147949,2.9307861-7.0653076C22.0053711,6.4852905,17.5326538,2.0072021,12.0119629,2.0039062z M12.0122681,20.9960938c-4.9684448,0.0033569-8.9988403-4.0215454-9.0022583-8.9899902C3.0066528,7.0377197,7.0316162,3.0072632,12,3.0039062c2.387085-0.0042725,4.6774292,0.9428711,6.3642578,2.6318359c1.687439,1.6858521,2.6363525,3.9728394,2.6379395,6.3581543C21.0056152,16.9622803,16.9806519,20.9926758,12.0122681,20.9960938z M12.7069702,12l3.1816406-3.1816406c0.1905518-0.194397,0.1905518-0.5054932,0-0.6998901c-0.1932373-0.1972046-0.5097656-0.2003784-0.7069702-0.0071411L12,11.2929688L8.8183594,8.1113892c-0.194397-0.1904907-0.5054932-0.1904907-0.6998901,0C7.9212646,8.3046265,7.9180908,8.6211548,8.1113281,8.8183594L11.2929688,12l-3.1816406,3.1816406c-0.09375,0.09375-0.1463623,0.2208862-0.1464233,0.3534546c0,0.276123,0.2238159,0.5,0.499939,0.500061c0.1326294,0.0001831,0.2598877-0.0525513,0.3535156-0.1464844L12,12.7070312l3.1816406,3.1816406c0.0936279,0.0939331,0.2208862,0.1466675,0.3535156,0.1464844v0.000061c0.1325684-0.000061,0.2596436-0.0527344,0.3533936-0.1464233c0.1953125-0.1952515,0.1953125-0.5118408,0.000061-0.7071533L12.7069702,12z"></path></svg>
        
        </span>
        <div className="text-lg font-mono">
        You should use strong password that contain at least number,Uppercase Latter,Symbol,etc
           
        </div>
        </div>
    
        </div>
        </>
      
      ):
      (<div>

      </div>)
    }
    <div className={styles.main}>
    <h1 className={styles.login}>login or signup</h1>
    <form onSubmit={(e)=>e.preventDefault()} className='   -z-30 flex flex-col   justify-center items-center h-full rounded-xl  '>
       <div className={styles.head}>
       <input type='text' placeholder=' '   className={styles.input} onChange={(e)=> Setemail(e.target.value)}/>
       <label for="text"  className={styles.label}>email:</label>
       </div>
       <div className={styles.head}>
       <input type={input}placeholder=' '   className={styles.input}  onChange={(e)=> Setpassword(e.target.value)}/>
       <label for="password" className={styles.label}>password:</label>
       <input type="checkbox" className='absolute -translate-y-4'   onClick={checker}/>
       </div>
        <div>
          <span>You have to use <strong>strong</strong>password!</span><br></br>
          <button onClick={Singin} className="bg-blue-700 p-1 text-white">SINGIN</button>
        </div>
    </form>

    </div>
    
    </>
  )
}

 