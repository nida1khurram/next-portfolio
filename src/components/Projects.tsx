'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Portfolio Next.js Css",
    description: "Created Portfolio with next.js & css",
    techStack: ['Next.js', 'Tailwind CSS', 'D3.js'],
           image: '/projects/1.png',
    link: 'https://portfolio-css-knai.vercel.app/',
  },
  {
    title: "Figma Food Project",
    description: "Created figma project with next.js",
    techStack: ['React', 'Redux', 'Stripe API'],
          image: '/projects/2.png',
    link: 'https://food-knai.vercel.app/',
  },
  {
    title: "Perfume Clone Website",
    description: "Created my first project with next.js",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/3.png',
    link: 'https://perfume-knai.vercel.app/',
  },
  {
    title: "Hackathon Resume-4",
    description: "Created figma project with html & css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/4.png',
    link: 'https://milestone4-knai.vercel.app/',
  },
  {
    title: "Countdown Timer",
    description: "Created Counter project with next.js",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
             image: '/projects/5.png',
    link: 'https://count-down-timer-knai.vercel.app/',
  },
  {
    title: "Counter Project",
    description: "Created Counter project with html & css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
                   image: '/projects/6.png',
    link: 'https://counter-application-knai.vercel.app/',
  },
  {
    title: "Palaindrome Project",
    description: "Created Palaindrome project with html & css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
                   image: '/projects/7.png',
    link: 'https://palindrome-knai.vercel.app/',
  },
  {
    title: "Assignment-12 Project",
    description: "Created project with html & css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/8.png',
    link: 'https://assignment-12-knai.vercel.app/',
  },
  {
    title: "Facebook Login Page",
    description: "Created my first project with next.js",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/9.png',
    link: 'https://github.com/nida1khurram/fb_login_pg',
  },
  {
    title: "Periodic Table Project",
    description: "Created Periodic project with html & css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
                   image: '/projects/10.png',
    link: 'https://assignment6-periodic-table.vercel.app/',
  },
  {
    title: "Currency Converter",
    description: "Created project TypeScript/Node.js project",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
                   image: '/projects/11.png',
    link: 'https://github.com/nida1khurram/currency_converter',
  },
  {
    title: "Number Guessing Game",
    description: "Created project TypeScript/Node.js project",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/12.png',
    link: 'https://github.com/nida1khurram/num_guessing_game_color',
  },
  {
    title: "Atm Project",
    description: "Created project TypeScript/Node.js project",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
          image: '/projects/13.png',
    link: 'https://github.com/nida1khurram/Project_atm',
  },
  {
    title: "Todo List",
    description: "Created project TypeScript/Node.js project",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
          image: '/projects/14.png',
    link: 'https://github.com/nida1khurram/todo_list',
  },
  {
    title: "Word Counter",
    description: "Created project TypeScript/Node.js project",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/15.png',
    link: 'https://github.com/nida1khurram/word_counter',
  },
  {
    title: "OOP Assignment",
    description: "Created project TypeScript/Node.js project",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
          image: '/projects/16.png',
    link: 'https://github.com/nida1khurram/Oop-assignment',
  },
  {
    title: " Simple Calculator",
    description: "Created project TypeScript/Node.js project",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/17.png',
    link: 'https://github.com/nida1khurram/color_simple_calculator',
  },
  {
    title: "Typescript Assignment",
    description: "Created project TypeScript/Node.js project",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/18.png',
    link: 'https://github.com/nida1khurram/typescript_ass001',
  },
  {
    title: "Milestone-Blog",
    description: "Created next.js,typescript and tailwind-css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
                   image: '/projects/19.jpg',
    link: 'https://knai-blog-milestone.vercel.app/',
  },
  {
    title: "Ecomemerce Practice",
    description: "Created next.js,typescript and tailwind-css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
          image: '/projects/20.png',
    link: 'https://ecommerce-hakathon-demo.vercel.app/',
  },
  {
    title: "Milestone 3",
    description: "Created next.js,typescript and tailwind-css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/21.png',
    link: 'https://milestone3-watch-ecommerce.vercel.app/',
  },
  {
    title: "Milestone 2",
    description: "Created next.js,typescript and tailwind-css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/22.webp',
    link: 'https://milestone2knai.vercel.app/',
  },
  {
    title: "Hackathon Website",
    description: "Created next.js,typescript and tailwind-css",
    techStack: ['Next.js', 'OpenAI API', 'Cloudinary'],
           image: '/projects/23.png',
    link: 'https://foodtuck-hac3.vercel.app/',
  },
];

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
