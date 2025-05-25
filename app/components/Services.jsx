import { assets, serviceData } from "@/assets/assets"
import { motion } from "motion/react"
import Image from "next/image"

const Services = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="Services" className="w-full px-[12%] py-8 scroll-m-20">
        <motion.h4
         initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
        className="text-center text-lg font-Ovo mb-5">What I Offer</motion.h4>
        <motion.h2
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
        className="text-center text-5xl font-Ovo ">My Services</motion.h2>
        <motion.p
        initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:0.8}}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
           I offer Front-end and Back-end web development, Full Stack solutions, and UI/UX design—creating responsive, user-friendly, and visually appealing digital experiences tailored to client needs.
        </motion.p>
        <motion.div
        initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8,delay:0.8}}
        className="grid grid-cols-auto gap-6 my-10 ">
            {serviceData.map(({icon,title,description,link},index)=>(
                <motion.div
                whileHover={{scale:1.01}}
                key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                    <Image src={icon} alt="" className="w-10"/>
                    <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
                    <a href={link} className="flex items-center gap-2 text-sm mt-5">Read More
                        <Image src={assets.right_arrow} alt=" " className="w-4"/>
                    </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}
export default Services