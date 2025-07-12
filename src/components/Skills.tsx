'use client';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaLaptopCode } from "react-icons/fa";
import { SiJavascript, SiRedux, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

// Define the type for SkillIcon props
interface SkillIconProps {
    icon: React.ReactNode;
    name: string;
    percentage: number;
}

export default function Skills() {
    const skills: SkillIconProps[] = [
        { icon: <FaHtml5 />, name: "HTML", percentage: 90 },
        { icon: <FaCss3Alt />, name: "CSS", percentage: 80 },
        { icon: <SiJavascript />, name: "JavaScript", percentage: 70 },
        { icon: <SiTypescript />, name: "TypeScript", percentage: 70 },
        { icon: <SiNextdotjs />, name: "Next.js", percentage: 50 },
        { icon: <SiTailwindcss />, name: "TailwindCSS", percentage: 60 },
        { icon: <FaNodeJs />, name: "Node.js", percentage: 60 },
        { icon: <FaPython />, name: "Python", percentage: 50 },
        { icon: <FaLaptopCode />, name: "Coding", percentage: 95 }, // Alternative for VS Code
    ];

    return (
        <section className="py-20 px-6 bg-black" id="skills">
            {/* Centered Heading */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    My Skills
                </h2>
                <div className="w-40 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mt-2"/>
                <p className="text-lg text-gray-400 mt-2">
                    Technologies I’ve been working with recently
                </p>
            </motion.div>
            {/* Skills Grid */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6 }} 
                className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-6 justify-items-center"
            >
                {skills.map((skill, index) => (
                    <SkillIcon key={index} icon={skill.icon} name={skill.name} percentage={skill.percentage} />
                ))}
            </motion.div>
        </section>
    );
}

// Skill Icon Component with Hover Effect & Percentage
const SkillIcon: React.FC<SkillIconProps> = ({ icon, name, percentage }) => (
    <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }} 
        transition={{ duration: 0.2 }}
        className="group flex flex-col items-center"
    >
        <div className="bg-[#2A1E4A] p-4 rounded-lg shadow-lg flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-all group-hover:bg-primary">
            <div className="text-white text-3xl md:text-4xl group-hover:text-black">
                {icon}
            </div>
        </div>
        {/* Percentage Label */}
        <p className="mt-2 text-white text-sm md:text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            {name} - {percentage}%
        </p>
    </motion.div>
);
