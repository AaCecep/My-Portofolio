// import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion} from "framer-motion";
import contactImg from "../assets/contact.png"

function Contact() {
    // const [formData, setFormData] = useState({
    //     name:'',
    //     email:'',
    //     messege:''
    // });
    return(
        <>
        <section id="contact" className="relative min-h-screen flex items-center
        py-20 overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center
                justify-center gap-12 lg:gap-20">
                    <motion.div
                    nitial={{opacity: 0, x:-50}}
                    whileInView={{opacity: 1, x:0}}
                    viewport={{once:true, margin: "-100px"}}
                    transition={{duration: 0.8, ease:'easeOut'}}
                    className="flex-1 relative flex items-center justify-center w-full">
                        <div className="relative w-55 md:w-100 aspect-3/4 flex
                        items-center justify-center">
                            <motion.div className="absolute w-[90%] h-[95%] rounded-full
                            border-4 border-cyan-500"
                            style={{
                                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3',
                                transform: 'rotate(-10deg) scaleX(0.6)'
                            }}
                            initial={{scale: 0.8, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once:true}}
                            transition={{duration: 0.8, delay: 0.2}}/>
                            <motion.div className="absolute w-[98%] h-[103%] rounded-full
                            border-2 border-cyan-500/30"
                            style={{
                                boxShadow: '0 0 50px rgba(6, 182, 212, 0.2',
                                transform: 'rotate(-10deg) scaleX(0.6)'
                            }}
                            initial={{scale: 0.8, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once:true}}
                            transition={{duration: 0.8, delay: 0.2}}/>
                            <motion.div className="absolute w-[94%] h-[99%] rounded-full"
                            style={{
                                border: '2px dashed rgba(6, 182, 212, 0.4',
                                transform: 'rotate(-10deg) scaleX(0.6)'
                            }}
                            animate={{rotate:[-10, 350]}}
                            transition={{duration: 10, repeat: Infinity, ease:'linear'}}/>
                            <motion.div className="relative w-[85%] h-[90%] rounded-full overflow-hidden
                            border-4 border-white bg-cyan-400/30 dark:border-slate-600 shadow-2xl z-10"
                            style={{
                                transform: 'rotate(-5deg)',
                                boxShadow: '0 0 30px rgba(6, 181, 212, 0.2)'
                            }}
                            whileHover={{
                                scale: 1.02, rotate: -3, transition:{duration: 0.3}
                            }}>
                                <img src={contactImg} alt="Contact" />
                            </motion.div>
                            <motion.div className="absolute -bottom-6 md:-bottom-10 -right-6
                            md:-right-10 w-12 md:w-20 h-12 md:h-20 bg-cyan-500/20
                            rounded-full blur-xl"
                            animate={{
                                scale:[1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration:4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}/>
                            <motion.div className="absolute -top-6 md:-top-10 -left-6 md:-left-10
                            w-20 md:w-32 h-20 md:h-32 bg-blue-500/20 rounded-full blur-xl"
                            animate={{
                                scale:[1, 1.3, 1],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                                duration:4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 1
                            }}/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;