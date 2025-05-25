import { assets } from "@/assets/assets"
import Image from "next/image"
import { motion } from "motion/react"

const Footer = ({isDarkMode}) => {
  return (
    <motion.div
     initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className="mt-20">
        <div className="text-center">
            <Image src={isDarkMode?assets.logo:assets.logo_dark} alt="logo_icon" className='w-36 mx-auto mb-2'/> 
            <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt="Email id" className="w-6"/>Gideonroy04@gmail.com
            </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>@ 2025 Gideon. All Rights are reserved</p>
            <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
                <li><a target="_blank" href="https://github.com/Gideon1828">Github</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/gideon-a-27b425367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></li>
            </ul>
        </div>
    </motion.div>
  )
}
export default Footer;