// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import experienceImg from '../assets/experience.png'

function Experience(){
    const experience =[
        {
            side: 'left',
            title: 'Lead Team Humanoid',
            tahun: 'Jan - Des 2025',
            company: 'Robotiik Filkom UB',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque voluptate, at fugiat minus eveniet tempora natus eos minima animi deleniti officiis voluptatibus vero mollitia dolorem velit? Rem, repellendus impedit.',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            side: 'left',
            title: 'Programing Humanoid',
            tahun: 'Jan - Des 2024',
            company: 'Robotiik Filkom UB',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque voluptate, at fugiat minus eveniet tempora natus eos minima animi deleniti officiis voluptatibus vero mollitia dolorem velit? Rem, repellendus impedit.',
            color: 'from-cyan-500 to-blue-400'
        },           
        {
            side: 'right',
            title: 'Finalis KRSBI-H',
            tahun: 'May - Jul 2024',
            company: 'Team Atom Robotiik UB',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque voluptate, at fugiat minus eveniet tempora natus eos minima animi deleniti officiis voluptatibus vero mollitia dolorem velit? Rem, repellendus impedit.',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            side: 'right',
            title: 'Disiplin Mahasiswa',
            tahun: 'Aug - Nov 2024',
            company: 'PKKMB Filkom UB',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque voluptate, at fugiat minus eveniet tempora natus eos minima animi deleniti officiis voluptatibus vero mollitia dolorem velit? Rem, repellendus impedit.',
            color: 'from-cyan-500 to-blue-400'
        },
        {
            side: 'mid',
            title: 'Instructor Electrical',
            tahun: 'Oct - Nov 2024',
            company: 'Robotiik Beginner Filkom UB',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque voluptate, at fugiat minus eveniet tempora natus eos minima animi deleniti officiis voluptatibus vero mollitia dolorem velit? Rem, repellendus impedit.',
            color: 'from-cyan-500 to-blue-400'
        }, 
        {
            side: 'mid',
            title: 'Electrikal Humanoid',
            tahun: 'Mar - Des 2023',
            company: 'Robotiik Filkom UB',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque voluptate, at fugiat minus eveniet tempora natus eos minima animi deleniti officiis voluptatibus vero mollitia dolorem velit? Rem, repellendus impedit.',
            color: 'from-cyan-500 to-blue-400'
        },           
        {
            side: 'mid',
            title: 'Disiplin Mahasiswa',
            tahun: 'Aug - Nov 2023',
            company: 'Robotiik Filkom UB',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque voluptate, at fugiat minus eveniet tempora natus eos minima animi deleniti officiis voluptatibus vero mollitia dolorem velit? Rem, repellendus impedit.',
            color: 'from-cyan-500 to-blue-500'
        }
    ]

    const itemVariants = {
        hidden: {opacity: 0, x:-50},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity:1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
   const rightItemsVariants = {
        hidden: {opacity:0, x:50},
        visible: {
            opacity:1,
            x:0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    }

    return(
        <>
        <section id="experience" className="relative min-h-screen flex
        items-center py-16 lg:py-20 overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                initial= {{opacity: 0, y: 20}}
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true, margin: '-50px'}}
                transition={{ duration: 0.6}}
                className="text-center mb-10 lg:mb-16"
                >
                    <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
                        <span className="text-slate-700 dark:text-slate-300">My </span>
                        <span className="relative inline-block text-transparent
                        bg-clip-text bg-linear-to-r from-cyan-500 to-blue-400
                        [text-shadow:0_0_20px_rgba(6, 182, 212, 0.3)]"
                        >
                            Experience
                            <motion.span className="absolute bottom-2 left-0 w-full
                            bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                            initial={{width:0}}
                            whileInView={{width: "100%"}}
                            viewport={{once:true}}
                            transition={{delay: 0.4, duration:0.8}}
                            >
                            </motion.span>
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400
                    max-w-2xl mx-auto px-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nobis dolore a nesciunt facilis ab, corporis excepturi commodi ipsum ut iste magnam tenetur rerum recusandae dignissimos molestias, ex nemo aperiam.
                    </p>
                </motion.div>
                <div className="relative flex flex-col lg:flex-row items-center
                justify-between gap-8 lg:gap-12 xl:gap-16">
                    <motion.div
                    variants={containerVariants}
                    initial = 'hidden'
                    whileInView = 'visible'
                    viewport={{once:true, margin:'-50px'}}
                    className="w-full lg:w-1/3 space-y-4 lg:space-y-6"
                    >
                        {experience.filter(exp => exp.side ==='left').map((exp ,index)=>(
                            <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale:1.02, x:5, transition:{duration: 0.2}
                            }}
                            className="relative group">
                                <div 
                                className={`bg-white dark:bg-slate-800/50 rounded-xl
                                lg:rounded-2xl p-4 lg:p-5 shadow-lg border 
                                border-cyan-500/20 backdrop-blur-sm
                                hover:shadow-cyan-500/10 transition-all 
                                duration-300 relative overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-linear-to-r ${exp.color}
                                    opacity-0 group-hover:opacity-5 transition-opacity
                                    duration-300`}></div>
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center
                                            justify-between gap-2 mb-1 lg:mb-2">
                                                <h3 className="text-base lg:text-lg
                                                font-bold text-slate-800 dark:text-slate-200">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-sm lg:text-base text-cyan-999
                                                font-medium mb-1 lg:mb-2">
                                                    {exp.tahun}
                                                </p>
                                            </div>
                                            <p className="text-sm lg:text-base text-cyan-500
                                            font-medium mb-1 lg:mb-2">
                                                {exp.company}
                                            </p>
                                            <p className="text-xs lg:text-sm text-slate-600
                                            dark:text-slate-400">
                                                {exp.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity:1, scale: 1}}
                    viewport={{once:true, margin:'-50px'}}
                    transition={{duration:0.8, delay:0.3}}
                    className="relative flex items-center justify-center w-64 h-64
                    sm:w-72 sm:h-72 lg:w-80 lg:h-80 my-6 lg:my-0"
                    >
                        <div className="relative flex items-center justify-center w-full h-full">
                            <div className="relative w-full h-full">
                                <motion.div className="relative w-full h-full overflow-hidden z-10"
                                whileHover={{
                                    scale: 1.05,
                                    transition: {duration: 0.3}
                                }}>
                                    <img src={experienceImg} alt="experience" 
                                    className="w-full h-full object-cover"/>
                                </motion.div>
                            </div>
                            <motion.div
                            className="absolute -bottom-4 md:-bottom-3 left-1/2 transform 
                            -translate-x-1/2 bg-white dark:bg-slate-800 px-4
                            py-1.5 rounded-full shadow-lg border border-cyan-500/30
                            whitespace-nowrap z-20"
                            initial={{opacity:0, y:20}}
                            whileInView={{opacity:1, y:0}}
                            viewport={{once:true}}
                            transition={{delay:0.8, duration:0.5}}
                            >
                                <span className="text-xs sm:text-sm text-transparent
                                bg-clip-text bg-linear-to-r from-cyan-500 
                                to-blue-400 font-semibold"
                                >3+ Years Journey</span>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={containerVariants}
                    initial = 'hidden'
                    whileInView = 'visible'
                    viewport={{once:true, margin:'-50px'}}
                    className="w-full lg:w-1/3 space-y-4 lg:space-y-6"
                    >
                        {experience.filter(exp => exp.side ==='right').map((exp ,index)=>(
                            <motion.div
                            key={index}
                            variants={rightItemsVariants}
                            whileHover={{
                                scale:1.02, x:-5, transition:{duration: 0.2}
                            }}
                            className="relative group">
                                <div 
                                className={`bg-white dark:bg-slate-800/50 rounded-xl
                                lg:rounded-2xl p-4 lg:p-5 shadow-lg border 
                                border-cyan-500/20 backdrop-blur-sm
                                hover:shadow-cyan-500/10 transition-all 
                                duration-300 relative overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-linear-to-r ${exp.color}
                                    opacity-0 group-hover:opacity-5 transition-opacity
                                    duration-300`}></div>
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center
                                            justify-between gap-2 mb-1 lg:mb-2">
                                                <h3 className="text-base lg:text-lg
                                                font-bold text-slate-800 dark:text-slate-200">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-sm lg:text-base text-cyan-999
                                                font-medium mb-1 lg:mb-2">
                                                    {exp.tahun}
                                                </p>
                                            </div>
                                            <p className="text-sm lg:text-base text-cyan-500
                                            font-medium mb-1 lg:mb-2">
                                                {exp.company}
                                            </p>
                                            <p className="text-xs lg:text-sm text-slate-600
                                            dark:text-slate-400">
                                                {exp.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <br />
                <div>
                    <motion.div
                    variants={containerVariants}
                    initial = 'hidden'
                    whileInView = 'visible'
                    viewport={{once:true, margin:'-50px'}}
                    className="flex flex-col lg:flex-row w-full space-y-4 lg:space-x-6 lg:space-y-6"
                    >
                        {experience.filter(exp => exp.side ==='mid').map((exp ,index)=>(
                            <motion.div
                            key={index}
                            variants={rightItemsVariants}
                            whileHover={{
                                scale:1.02, x:-5, transition:{duration: 0.2}
                            }}
                            className="relative group">
                                <div 
                                className={`bg-white dark:bg-slate-800/50 rounded-xl
                                lg:rounded-2xl p-4 lg:p-5 shadow-lg border 
                                border-cyan-500/20 backdrop-blur-sm
                                hover:shadow-cyan-500/10 transition-all 
                                duration-300 relative overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-linear-to-r ${exp.color}
                                    opacity-0 group-hover:opacity-5 transition-opacity
                                    duration-300`}></div>
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center
                                            justify-between gap-2 mb-1 lg:mb-2">
                                                <h3 className="text-base lg:text-lg
                                                font-bold text-slate-800 dark:text-slate-200">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-sm lg:text-base text-cyan-999
                                                font-medium mb-1 lg:mb-2">
                                                    {exp.tahun}
                                                </p>
                                            </div>
                                            <p className="text-sm lg:text-base text-cyan-500
                                            font-medium mb-1 lg:mb-2">
                                                {exp.company}
                                            </p>
                                            <p className="text-xs lg:text-sm text-slate-600
                                            dark:text-slate-400">
                                                {exp.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Experience;