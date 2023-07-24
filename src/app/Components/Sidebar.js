'use client'
import styles from "./css.module.css"
import * as React from 'react'
import Link from "next/link"
export default function Sidebar() {
  const [toggle,settoggle]=React.useState(false)
  return (
    <>
    {
        toggle?(
            <>
            <div className={styles.sidebar} >
                <div className="ml-auto w-fit px-4" onClick={()=> settoggle(!toggle)}>
                     <svg  width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z" fill="#1C274C"/>
                  </svg>
                </div>
                <ul className="flex font-extrabold  mt-3 h-full flex-col p-5 items-center gap-7">
                    <li><Link href='/login'>LOGIN</Link></li>
                    <li>YOUTUBE</li>
                    <li>FACEBOOK</li>
                     <li>TIKTOK</li>
                     <li className= "ml-auto relative mt-auto bottom-9  ">
                     <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00171 7C8.01382 4.82497 8.11027 3.64706 8.87865 2.87868C9.75733 2 11.1715 2 14 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H14C11.1715 22 9.75733 22 8.87865 21.1213C8.11027 20.3529 8.01382 19.175 8.00171 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.5" d="M8 19.5C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V9.5C3 7.14298 3 5.96447 3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5" stroke="#1C274C" stroke-width="1.5"/>
    <path d="M15 12L6 12M6 12L8 14M6 12L8 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                     </li>
                      </ul>        
            </div>
            </>
        ):
        (
            <>
            <div onClick={()=>settoggle(!toggle)} className="w-fit mx-auto left-3   absolute animate-pulse duration-100" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
            </div>

           
           </>
        )
    }
    
    
    </>
   
  )
} 