import React from "react";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import {AnimatePresence, motion} from 'framer-motion';
import { FaSun, FaMoon, FaTimes, FaBars } from "react-icons/fa";

function Navbar(){
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const links = [
        {id:1, link: 'home', text: 'Home'},
        {id:2, link: 'about', text: 'About'},
        {id:3, link: 'experience', text: 'Experience'},
        {id:4, link: 'work', text: 'Work'}
        // {id:5, link: 'contact', text: 'Contact'}
    ];

    useEffect(() => {
        const saveMode = localStorage.getItem('darkMode');
        if (saveMode) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setDarkMode(saveMode === 'true');
        }
    }, []);
    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    },  [darkMode]);
    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true);
            }else{
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
        return () => window.removeEventListener('scroll', handleShadow);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const navVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            y:0,
            opacity: 1,
            transition: {type: 'spring', stiffness: 100, damping: 20}
        }
    }
    const mobileMenuVariants = {
        hidden: { opacity: 0, x: '-100%' },
        visible: {
            x: 0,
            opacity: 1,
            transition: {type: 'spring', stiffness: 100, damping: 25}
        },
        exit: {
            x: '-100%',
            opacity: 0,
            transition: {duration: 0.3}
        }
    }

    return(
        <>
            <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto z-50 mt-6"
            >
                <div className={`relative rounded-4xl
                ${shadow ? 'shadow-[0_0_20px_rgb(34_211_238)]' : ''}
                dark:bg-black/50 bg-white/80`}
                >
                    <div className="flex justify-between items-center w-full
                    h-16 sm:h-20 px-4 sm:px-6 md:px-8">
                        <motion.a
                        href="#home"
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}
                        className="text-xl sm:text-2xl md:text-3xl font-bold">
                            <span className="text-cyan-500">Por</span>
                            <span className="text-slate-400 dark:text-slate-100">tfolio</span>
                            <span className="text-cyan-500">.</span>
                        </motion.a>
                        <ul className="hidden md:flex items-center space-x-4 lg:space-x-8">
                            {links.map(({id, link, text}) => (
                                <motion.li
                                key={id}
                                whileHover={{scale:1.05}}
                                whileTap={{scale:0.95}} 
                                >
                                    <a href={`#${link}`}
                                    className="text-sm lg:text-base text-slate-700 
                                    dark:text-slate-300 hover:text-cyan-600
                                    hover:dark:text-cyan-400 transition-all duration-300
                                    font-medium relative group whitespace-nowrap
                                    hover:[text-shadow:0_0_8px_rgb(34_211_238)]"
                                    >
                                        {text}
                                    </a>
                                </motion.li>                   
                            ))}
                        </ul>
                        <div className="hidden md:flex items-center space-x-2
                        lg:space-x-4">
                            <motion.button
                            onClick={toggleDarkMode}
                            whileHover={{scale:1.1, rotate:180}}
                            whileTap={{scale:0.9}}
                            className="p-2 rounded-full bg-slate-100
                            dark:bg-slate-800 text-slate-700 dark:text-slate-300
                            hover:bg-slate-500/10
                            dark:hover:bg-slate-500/20 transition-colors duration-300"
                            aria-label="toggle dark mode"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                    key={darkMode ? 'sun' : 'moon'}
                                    initial={{rotate:-90, opacity: 0}}
                                    animate={{rotate: 0, opacity: 1}}
                                    exit={{rotate: 90, opacity: 0}}
                                    transition={{duration:0.2}}
                                    >
                                        {darkMode 
                                        ? <FaSun size={16} style={{color: 'yellow'}}/>
                                        : <FaMoon size={16}/>}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>
                        </div>
                        <div className="flex md:hidden items-center space-x-2">
                            <motion.button
                            onClick={toggleDarkMode}
                            whileTap={{scale:0.9}}
                            className="p-2 rounded-full bg-slate-100
                            dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                            aria-label="Toggle dark Mode"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                    key={darkMode ? 'sun' : 'moon'}
                                    initial={{rotate:-90, opacity: 0}}
                                    animate={{rotate: 0, opacity: 1}}
                                    exit={{rotate: 90, opacity: 0}}
                                    transition={{duration:0.2}}
                                    >
                                        {darkMode 
                                        ? <FaSun size={16} style={{color: 'yellow'}}/>
                                        : <FaMoon size={16}/>}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>
                            <motion.button
                            onClick={() => setNav(!nav)}
                            whileTap={{scale:0.9}}
                            aria-label="Toggle menu"
                            className="text-slate-700 dark:text-white p-2"
                            >
                                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence>
                {nav && (
                    <>
                    <motion.div
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed left-0 top-0 w-70 sm:w-[320px]
                    h-screen bg-white dark:bg-black z-40 pt-20
                    shadow-xl"
                    >
                        <div className="flex flex-col h-full">
                            <ul className="flex-1 py-6 px-4">
                                {links.map(({id, link, text}, index) => (
                                    <motion.li
                                    key={id}
                                    initial={{x: - 20, opacity:0}}
                                    animate={{x:0, opacity:1}}
                                    transition={{delay: 0.1 + index*0.05}}
                                    className="mb-2"
                                    >
                                        <motion.a
                                        href={`#${link}`}
                                        onClick={() => setNav(false)}
                                        whileHover={{
                                            x:10, backgroundColor: 'rgba(139, 92, 245, 0.1)',
                                        }}
                                        className="block px-4 py-3 text-slate-800
                                        dark:text-white rounded-lg transition-colors
                                        duration-300 font-medium"
                                        >
                                            {text}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar;