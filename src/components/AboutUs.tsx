'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="py-20 px-6 bg-black" id="about">
            {/* Centered Heading */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-content">
                    About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mt-2"/>
            </motion.div>

            {/* Main Content - Image Left, Text Right */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                
                {/* Left - Image */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8 }} 
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <Image 
                        src="/ab.jpg" // Replace with your image path
                        alt="About Us"
                        width={400}
                        height={400}
                        className="rounded-3xl shadow-lg"
                    />
                </motion.div>

                {/* Right - Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8 }} 
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >
                    <p className="text-lg text-content/80 mb-4">
                        <strong>Introduction:</strong> Hello! I&apos;m Nida, a passionate Frontend Web Developer with expertise in HTML, CSS, JavaScript, TypeScript, and Next.js. I create intuitive and visually appealing user interfaces.
                    </p>

                    <p className="text-lg text-content/80 mb-4">
                        <strong>My Journey:</strong> My journey began with curiosity about web development and evolved into a passion for building interactive and seamless digital experiences.
                    </p>

                    <p className="text-lg text-content/80 mb-4">
                        <strong>Frontend Excellence:</strong> I specialize in responsive design, performance optimization, cross-browser compatibility, and UI/UX design to deliver exceptional user experiences.
                    </p>

                    <p className="text-lg text-content/80">
                        I am always excited to learn new technologies and keep up with industry trends. Looking forward to creating something amazing with you!
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
