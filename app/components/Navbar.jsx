import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { assets } from "@/assets/assets"
const Navbar = ({isDarkMode,setIsDarkMode}) => {
    const sidemenu=useRef();
    const[isScroll,setIsScroll]=useState(false);
    const openmenu=()=>{
        sidemenu.current.style.transform='translateX(-16rem)'
    }
    const closemenu=()=>{
        sidemenu.current.style.transform='translateX(16rem)'
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                setIsScroll(true)
            }
            else{
                setIsScroll(false)
            }
    })
    },[])

  return (
    <div className="w-full mt-0">  
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden ">
            <Image src={assets.header_bg_color} alt="back" className="w-full"/>
        </div>
        <nav className={`w-full fixed top-0 left-0 right-0 px-5 lg:px-8  xl:px-[8%] py-2 flex items-center justify-between z-50 ${isScroll?"bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20 dark:backdrop-blur-lg dark:bg-opacity-50" : ""}`}>
            <a onClick={closemenu} href="#top">
                <Image src={isDarkMode?assets.logo:assets.logo_dark} alt="logo_icon" className='w-28 cursur-pointer mr-14'/>
            </a>
        
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll?"":"bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
            <li><a className="font-Ovo" onClick={closemenu} href="#top">Home</a></li>
            <li><a className="font-Ovo" onClick={closemenu} href="#About">About me</a></li>
            <li><a className="font-Ovo" onClick={closemenu} href="#Services">Services</a></li>
            <li><a className="font-Ovo" onClick={closemenu} href="#Work">My Work</a></li>
            <li><a className="font-Ovo" onClick={closemenu} href="#Contact ">Contact Me</a></li>
        </ul> 
        <div className="flex items-center gap-4">
            <button onClick={()=>setIsDarkMode(prev=>!prev)} >
                <Image src={isDarkMode?assets.sun_icon:assets.moon_icon} alt="Moon_icon" className="w-6"/>
            </button>

            <a onClick={closemenu} href="#Contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50 ">Contact <Image src={isDarkMode?assets.arrow_icon_dark:assets.arrow_icon} alt="Arrow_icon" className="w-3"/></a>

            <button className="block md:hidden ml-3" onClick={openmenu}>
                <Image src={isDarkMode?assets.menu_white:assets.menu_black} alt="menu_icon" className="w-6"/>
            </button>
        </div>
        
        
        {/* ----------------Mobile View -------------------- */}
        <ul ref={sidemenu} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white">

            <div className="absolute right-6 top-6" onClick={closemenu}>
                <Image src={isDarkMode?assets.close_white:assets.close_black} alt="" className="w-5 cursor-pointer"/>
            </div>

             <li><a className="font-Ovo"  onClick={closemenu} href="#top">Home</a></li>
            <li><a className="font-Ovo" onClick={closemenu} href="#About">About me</a></li>
            <li><a className="font-Ovo" onClick={closemenu} href="#Services">Services</a></li>
            <li><a className="font-Ovo" onClick={closemenu} href="#Work">My Work</a></li>
            <li><a className="font-Ovo" onClick={closemenu} href="#Contact ">Contact Me</a></li>
        </ul>
        </nav>
    </div>
  )
}
export default Navbar