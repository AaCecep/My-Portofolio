import React from "react";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import about from "../assets/about.png";
import { FaEnvelope } from "react-icons/fa";

function About(){
    return(
        <>
        <section id="about" className="relative min-h-screen flex items-center
        py-20 overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* FLEX CONTAINER */}
                <div className="flex flex-col lg:flex-row items-center
                justify-center gap-12 lg:gap-20">
                    {/* ================= IMAGE ================= */}
                    <motion.div
                    initial={{opacity:0, x: -50}}
                    whileInView={{opacity:1, x: 0}}
                    viewport={{once: true, margin: '-100px'}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="flex-1 relative items-center justify-center"
                    >
                        <div className="relative w-55 md:w-100 aspect-3/4
                        flex items-center justify-center">
                            {/* Outer glow */}
                            <motion.div
                            className="absolute w-[90%] h-[95%] rounded-full
                            border-4 border-cyan-500"
                            style={{
                                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                                transform: 'rotate(-10deg) scaleX(0.6)'
                            }}
                            initial={{opacity:0, scale: 0.8}}
                            whileInView={{opacity:1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, delay: 0.2}}
                            >
                            </motion.div>
                            {/* Inner glow */}
                            <motion.div
                            className="absolute w-[98%] h-[103%] rounded-full
                            border-2 border-cyan-500/30"
                            style={{
                                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                                transform: 'rotate(-10deg) scaleX(0.6)'
                            }}
                            initial={{opacity:0, scale: 0.8}}
                            whileInView={{opacity:1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, delay: 0.2}}
                            >
                            </motion.div>
                            {/* Rotating dashed */}
                            <motion.div
                            className="absolute w-[94%] h-[99%] rounded-full"
                            style={{
                                border: '2px dashed rgba(6, 182, 212, 0.3)',
                                transform: 'rotate(-10deg) scaleX(0.6)'
                            }}
                            animate={{rotate: [-10,350]}}
                            transition={{duration: 0.8, repeat: Infinity, ease: 'linear'}}
                            >
                            </motion.div>
                            {/* IMAGE */}
                            <motion.div
                            className="relative w-[85%] h-[90%] rounded-full overflow-hidden
                            border-4 border-white bg-cyan-400/30
                            dark:border-slate-600 shadow-2xl z-10"
                            style={{
                                transform: 'rotate(-5deg)',
                                boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
                            }}
                            whileHover={{
                                scale: 1.02, rotate: -3, transition: { duration: 0.3}
                            }}
                            >
                                <img src={about} alt="About Image" 
                                className="w-full h-full object-cover"/>
                            </motion.div>
                            {/* Floating glow */}
                            <motion.div
                            className="absolute bottom-6 md:bottom-10 right-6 md:right-10
                            w-12 md:w-20 h-12 md:h-20 bg-cyan-500/20 rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration:4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, x: 50}}
                    whileInView={{opacity:1, x: 0}}
                    viewport={{once: true, margin: '-100px'}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="flex-1 text-center lg:text-left"
                    >
                        <motion.div
                        initial={{opacity:0, y: 20}}
                        whileInView={{opacity:1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.2}}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                <span className="text-slate-700 dark:text-slate-300">
                                    About
                                </span>
                                <span className="relative inline-block
                                text-transparent bg-clip-text
                                bg-linear-to-r from-cyan-500 to-blue-400
                                [text-shadow:0_0_20px_rgba(6, 182, 212, 0.3)]">
                                    Me
                                    <motion.span
                                    className="absoulute bottom-2 left-0 w-full h-1 bg-linear-r-to
                                    from-cyan-500 to-blue-500 rounded-full"
                                    initial={{width:0}}
                                    whileInView={{ width:'100%'}}
                                    viewport={{once:true}}
                                    transition={{delay: 0.6, duration: 0.8}}
                                    >
                                    </motion.span>
                                </span>
                            </h2>
                        </motion.div>
                        <motion.p className="text-base md:text-lg text-slate-600
                        dark:text-slate-400 mb-6 max-w-2xl lg:mx-0"
                        initial={{opacity:0, y: 20}}
                        whileInView={{opacity:1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.3}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas! Sapiente ab eaque ipsam harum possimus hic, modi ratione, quisquam odit illo ducimus? Consequatur atque nesciunt voluptate sed id porro.
                        </motion.p>
                        <motion.p className="text-base md:text-lg text-slate-600
                        dark:text-slate-400 mb-6 max-w-2xl lg:mx-0"
                        initial={{opacity:0, y: 20}}
                        whileInView={{opacity:1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.3}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam ex numquam quia, inventore officiis, consequuntur quasi quaerat, a dicta dolor! Necessitatibus, temporibus nisi? Consequuntur, obcaecati soluta! Cupiditate, modi sit.
                        </motion.p>
                        <motion.div className="flex flex-wrap gap-6 md:gap-8
                        justify-center lg:justify-start mb-8"
                        initial={{opacity:0, y: 20}}
                        whileInView={{opacity:1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.3}}>
                            <div className="text-center">
                                <motion.div className="text-2xl md:text-3xl font-bold
                                text-transparent bg-clip-text bg-linear-to-r
                                from-cyan-500 to-blue-400">
                                    3+
                                </motion.div>
                                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                                    years Experience
                                </div>
                            </div>
                            <div className="text-center">
                                <motion.div className="text-2xl md:text-3xl font-bold
                                text-transparent bg-clip-text bg-linear-to-r
                                from-cyan-500 to-blue-400">
                                    10+
                                </motion.div>
                                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                                    Project Completed
                                </div>
                            </div>
                            <div className="text-center">
                                <motion.div className="text-2xl md:text-3xl font-bold
                                text-transparent bg-clip-text bg-linear-to-r
                                from-cyan-500 to-blue-400">
                                    1
                                </motion.div>
                                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                                    performance
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="flex flex-wrap gap-4
                        justify-center lg:justify-start"
                        initial={{opacity:0, y: 20}}
                        whileInView={{opacity:1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.6}}>
                            <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="px-6 md:px-8 py-2 border-2 border-cyan-500
                            text-cyan-600 dark:text-cyan-400 rounded-full
                            font-semibold text-base md:text-lg
                            hover:bg-cyan-300 dark:hover:bg-cyan-50
                            transition-all duration-300 flex items-center gap-2
                            [text-shadow:0_0_8px_rgb(32_211_238)]"
                            >
                                <FaEnvelope className="text-cyan-600 dark:text-cyan-400
                                text-sm md:text-base"
                                ></FaEnvelope>
                                Hire Me
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;