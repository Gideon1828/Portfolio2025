import { assets } from "@/assets/assets"
import Image from "next/image"
import { useState } from "react";
import { motion } from "motion/react"

const Contact = ({isDarkMode}) => {

     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3693596a-651f-4fc2-af58-d2d2f80b049f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
       
      setResult("Form Submitted Successfully!");
      event.target.reset();
       

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="Contact" className='w-full px-[12%] py-8 scroll-m-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <motion.h4
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
        className="text-center text-lg font-Ovo mb-5">Connect with Me</motion.h4>
        <motion.h2
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
        className="text-center text-5xl font-Ovo ">Get in Touch</motion.h2>
        <motion.p
        initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:0.8}}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
            I love to hear From you! if you have any questions, comments, or Feedback, Please use the form below.
        </motion.p>
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
            <motion.div
            initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8,delay:1}}
            className="grid grid-cols-auto gap-6 mt-10 mb-8">
                <motion.input
                initial={{x:-50,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.6,delay:0.7}}
                type="text" placeholder="Enter your name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" name="name"/>
                <motion.input
                initial={{x:50,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.6,delay:0.8}}
                type="Email" placeholder="Enter your Email" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"  name="email"/>
            </motion.div>
            <motion.textarea
             initial={{y:-50,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.6,delay:0.9}}
            rows={6} placeholder="Enter your Message"  required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90" name="message"></motion.textarea>
            <motion.button
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
            type="submit" className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover">Submit now
            <Image src={assets.right_arrow_white} alt=" " className="w-4"/></motion.button>
        </form>
        <p className="text-center font-Ovo">{result}</p>
    </motion.div>
  )
}
export default Contact