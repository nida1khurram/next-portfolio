'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from './projectData';

export default function Projects() {
  return (
    <section className="py-12 bg-gray-900 text-white" id='projects'>
      <div className="container mx-auto px-6">
      <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Projects
                </h2>
                <div className="w-40 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mt-2"/>
                <p className="text-lg text-gray-400 mt-2">
                    Technologies I’ve been working with recently
                </p>
                
            </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap mt-3 gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-700 text-xs text-gray-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
