import React from "react";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion"
import { useState } from "react";
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"
import work4 from "../assets/work4.png"
import work5 from "../assets/work5.png"
import { FaChevronCircleLeft, FaChevronCircleRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Work(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;

    const projects = [
        {id:1, title:"Sistem Kontrol Zero Moment Point (ZMP) untuk Keseimbangan Humanoid Robot dengan Proportional Integral Derivatif (PID)", category: 'Robotis',
            img: work4, tech: ['ROS 2', 'ZMP', 'PID', 'Inverse Kinematic', 'ROBOTIS OP3'],
            link:"https://drive.google.com/file/d/1QpoGrLaE1K7lyBftbSdyKgweL3Ir1shY/view?usp=sharing",
            git: "https://github.com/AaCecep/Sistem-kontrol-ZMP-untuk-keseimbangan-robot-humanoid-dengan-PID"
        },
        {id:2, title:"Wearable Device untuk Mendeteksi Stres Berbasis Sinyal Photoplethysmogram", category: 'Machine Learning',
            img: work3, tech: ['Sensor MAX30102', 'Sinyal PPG', 'Random Forest', 'ESP32S3'],
            link:"https://filkom.ub.ac.id/project/2025/06/wearable-device-untuk-mendeteksi-stress-berbasis-sinyal-photoplethysmogram/",
            git: "https://github.com/kathleeneve-lyn/Capstone-Project-Deteksi-Stress"
        },
        {id:3, title:"FreshCart – Organic Grocery Platform", category: 'Frontend',
            img: work2, tech: ['React', 'Tailwind'],
            link:"https://grocerygulam.netlify.app/",
            git: "https://github.com/AaCecep/grocery"
        },
        {id:4, title:"Lokalisasi", category: 'Robotis',
            img: work5, tech: ['ROS 2', 'ROBOTIS OP3', 'IMU'],
            link:"https://drive.google.com/file/d/1C4sRgEpUOWqNXwSJWl9LK8LYqNUac4Nd/view?usp=sharing",
            git: "https://github.com/AaCecep/Lokalisasi"
        },
        {id:5, title:"Modern Restaurant Website UI", category: 'Fontend',
            img: work1, tech: ['React', 'Tailwind'], 
            link:"https://restaurantgulam.netlify.app/",
            git: "https://github.com/AaCecep/Restaurant"
        },
    ];

    const nextSlide = () => {
        setCurrentIndex(
            prev => prev + itemsPerPage >= projects.length
            ? 0 : prev + itemsPerPage
        );
    };
    const prevSlide = () => {
        setCurrentIndex(
            prev => prev - itemsPerPage < 0
            ? Math.max(0, projects.length - itemsPerPage)
            : prev - itemsPerPage
        )
    }

    return(
        <>
        <section id="work" className="relative py-14 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                initial={{opacity: 0, y:20}}
                animate={{opacity:1, y:0}}
                className="text-4xl md:text-4xl font-bold text-center mb-16">
                    <span className="text-slate-700 dark:text-slate-300">My </span>
                    <span className="relative inline-block text-transparent
                    bg-clip-text bg-linear-to-r from-cyan-500 to-blue-400
                    [text-shadow:0_0_20px_rgba(6, 182, 212, 0.3)]">
                        Recent Work
                        <span className="absolute -bottom-2
                        left-0 w-full h-1 bg-linear-to-r from-cyan-500
                        to-blue-500 rounded-full"></span>
                    </span>
                </motion.h2>
                <div className="grid grid-col-1 md:grid-cols-2
                lg:grid-cols-3 gap-8">
                    {projects.slice(currentIndex, currentIndex + itemsPerPage).map((project, idx) => (
                        <motion.div
                        key={project.id}
                        initial={{opacity:0, y:50}}
                        animate={{opacity:1, y:0}}
                        transition={{delay: idx*0.1}}
                        whileHover={{y: -10}}
                        className="group"
                        >
                            <div className="bg-white dark:bg-slate-800
                            rounded-2xl overflow-hidden shadow-xl border
                            border-slate-200 dark:border-slate-700">
                                <div className="relative overflow-hidden h-56">
                                    <img src={project.img} alt="project.title" 
                                    className="w-full h-full object-hover
                                    group-hover:scale-110 transition-transform
                                    duration-500"/>
                                    <div className="absolute inset-0 bg-linear-to-r
                                    from-cyan-500/50 flex items-center justify-center
                                    gap-4 opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300">
                                        <a href={project.git}
                                        target="_blank"
                                        rel="nooperner norefferrer"
                                        className="p-3 bg-white rounded-full
                                        text-slate-700 hover:text-cyan-500 transition-colors">
                                            <FaGithub size={24}/>
                                        </a>
                                        <a href={project.link} 
                                        target="_blank"
                                        rel="nooperner norefferrer"
                                        className="p-3 bg-white rounded-full
                                        text-slate-700 hover:text-cyan-500 transition-colors">
                                            <FaExternalLinkAlt size={20}/>
                                        </a>
                                    </div>
                                    <span className="absolute top-4 left-4 px-3 py-1 
                                    bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold
                                    text-transparent bg-clip-text bg-linear-to-r 
                                    from-cyan-500 to-blue-500">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold mb-2 text-slate-800
                                    dark:text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t,i) => (
                                            <span
                                            key={i}
                                            className="px-2 py-1 text-xs rounded-full
                                            bg-linear-to-r from-cyan-50 to-blue-50
                                            dark:from-cyan-150 text-cyan-600
                                            dark:text-cyan-700 border border-cyan-200
                                            dark:border-cyan-500">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                    )}
                </div>
                <div className="flex justify-center gap-3 mt-10">
                    {[0,1].map((_, index) =>(
                        <button
                        key={index}
                        onClick={() => setCurrentIndex(index * itemsPerPage)}
                        className={`h-3 rounded-full transition-all duration-300
                        ${
                            Math.floor(currentIndex / itemsPerPage) == index
                            ? 'w-10 bg-linear-to-r from-cyan-500 to-blue-500'
                            : 'w-3 bg-slate-300 dark:bg-slate-600'
                        }`}>

                        </button>
                    ))}
                </div>
                <div className="flex justify-end gap-4 mb-2">
                    <button onClick={prevSlide}
                    className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg
                    text-cyan-500 hover:text-blue-500 border border-cyan-500/20">
                        <FaChevronCircleLeft size={20}/>
                    </button>
                    <button onClick={nextSlide}
                    className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg
                    text-cyan-500 hover:text-blue-500 border border-cyan-500/20">
                        <FaChevronCircleRight size={20}/>
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Work;