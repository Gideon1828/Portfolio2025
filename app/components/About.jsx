import { assets, infoList, toolsData } from "@/assets/assets"
import { private1} from "@/assets/private/private"
import { motion } from "motion/react"
import Image from "next/image"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className="w-full px-[12%] py-8 scroll-m-20">
        <motion.h4 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
        id="About"  className="text-center text-lg font-Ovo mb-5">Introduction</motion.h4>
        <motion.h2 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
        className="text-center text-5xl font-Ovo ">About Me</motion.h2>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-10">
            <motion.div 
            initial={{opacity:0,scale:0.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.6}}
            className="w-64 sm:w-80 rounded-3xl max-w-none">
                <Image src={private1.myimage} alt="User_image" className="w-full rounded-3xl"/>
            </motion.div>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:0.8}}
            className="flex-1">
                <p className="mb-4 max-w-2xl font-Ovo">
                    Hello! I'm a passionate developer who loves turning ideas into reality through code. I enjoy building efficient, user-friendly applications and constantly learning new technologies to improve my skills and deliver meaningful digital experiences.
                </p>
                <motion.ul
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8,delay:1}}
                className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl p-4 cursor-pointer">
                     {infoList.map(({icon,iconDark,title,description},index)=>(
                        <motion.li 
                        whileInView={{scale:1.05}}
                        className="border-[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50" key={index}> 
                            <Image src={isDarkMode?iconDark:icon} alt="title" className="w-6 mt-2"/>
                                <h3 className="font-semibold my-4 text-gray-700 dark:text-white">{title}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                        </motion.li>
                       ))}
                    
                </motion.ul>
                 <motion.h4
                 initial={{y:20,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.5,delay:1.5}}
                 className="my-4 text-gray-700 font-Ovo dark:text-gray-200">Tools I Use</motion.h4>
                <motion.ul
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.6,delay:1.5}}
                className="flex items-center gap-3 sm:gap-6">
                    {toolsData.map((tool,index)=>(
                        <motion.li
                        whileHover={{scale:1.05}}
                        className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500" key={index}>
                            <Image src={tool} alt="tool" className="w-5 sm:w-6" />
                        </motion.li>
                    ))}
                </motion.ul>    

            </motion.div>
        </motion.div>
    </motion.div>
  )
}
export default About