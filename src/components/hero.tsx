"use client";
import { useState, useEffect } from "react";
import { ParticleCanvas } from "@/components/hooks/particle"; // ✅ Corrected import
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  // Titles for animation
  const titles = [
    "Creative Beautiful Website",
    "Front-End Website",
    "User Friendly Website",
  ];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      <ParticleCanvas />
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-6"
            >
              Hi I&apos;m
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent"
              >
                Nida Khurram
              </motion.span>
              <br />
              <motion.span
                key={currentTitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent text-3xl"
              >
                {titles[currentTitle]}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl text-content/80 mb-8"
            >
              Hello! I&apos;m Nida, a passionate Frontend Web Developer with a knack
              for crafting intuitive and visually appealing user interfaces.
              With a solid background in HTML, CSS, JavaScript, TypeScript and
              modern frontend frameworks like Next.js, I strive to create
              seamless and responsive web experiences.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 hover:border-primary/30 transition-all group"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-content group-hover:text-primary transition-colors">
                Hire Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="lg:w-1/2 relative hidden lg:block"
            style={{ y }}
          >
            <div className="relative w-[400px] aspect-square group">
              {/* Animated Border */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-secondary/30 to-tertiary/30 opacity-50"
              />
              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 bg-surface backdrop-blur-sm"
              >
                <Image
                  src="/hero.webp"
                  alt="Avatar"
                  fill
                  className="object-cover scale-50 group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
