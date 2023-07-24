'use client'
import Link from "next/link"
import styles from "./css.module.css"
import * as React from 'react'
export default function Form() {
  function submit(e){
        
  }
  return (
    <>
    <div className={styles.main}>
    <h1 className={styles.login}>login or signup</h1>
    <form onSubmit={(e)=>e.preventDefault()} className='    flex flex-col   justify-center items-center h-full rounded-xl  '>
       <div className={styles.head}>
       <input type='text' placeholder=' ' required  className={styles.input}/>
       <label for="text"  className={styles.label}>name:</label>
       </div>
       <div className={styles.head}>
       <input type='password' placeholder=' 'required className={styles.input}/>
       <label for="password" className={styles.label}>password:</label>
       </div>
       <button className={styles.submit}><Link href="/">SUBMIT</Link></button>
      
    </form>

    </div>
    </>
  )
}
