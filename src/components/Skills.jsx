import { FaReact, FaMicrochip, FaPython, FaVuejs, FaRobot, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiArduino } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Skills(){
    const skills = [
        {name: "React", Icon: FaReact, color: "#61DBFB"},
        {name: "Microcontroller", Icon: FaMicrochip, color: "#339933"},
        {name: "Python", Icon: FaPython, color: "#3776ab"},
        {name: "Vue.js", Icon: FaVuejs, color: "#42b883"},
        {name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06b6d4"},
        {name: "Arduino", Icon: SiArduino, color: "#00979d"},
        {name: "ROS2", Icon: FaRobot, color: "#FF6B6B"},
        {name: "Laravel", Icon: FaLaravel, color: "#FF2D20"},
    ];

    const duplicateSkills = [...skills, ...skills, ...skills];

    return(
        <>
        <section className="py-8 relative m-14">
            <div className="container mx-auto px-14">
                <div className="relative overflow-hidden py-3 group rotate-1 scale-105">
                    <motion.div
                    className="flex gap-4 items-center"
                    animate= {{
                        x: [0,-2880]
                    }}
                    transition={{
                        x:{
                            repeat: Infinity, repeatType: 'loop', duration: 35, ease: 'linear'
                        }
                    }}
                    >
                        {duplicateSkills.map((skill, index) => {
                            const Icon = skill.Icon;
                            return(
                                <motion.div
                                key={`skill-${skill.name}-${index}`}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full
                                bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                                border border-gray-200 dark:border-gray-700 shadow-sm"
                                whileHover={{
                                    scale: 1.1,
                                    y: -2,
                                    transition: {duration:0.2}
                                }}
                                style={{
                                    borderColor: `${skill.color}40`,
                                    boxShadow: `0 2px 8px ${skill.color}20`
                                }}
                                >
                                    <div style={{color: skill.color}}>
                                        <Icon size={28}></Icon>
                                    </div>
                                    <span className="text-xs font-medium text-gray-700
                                    dark:text-gray-300 whitespace-nowrap">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Skills;