import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 4,
            title: "NextGen Club Admin & Public Portal",
            description: "A fully responsive and scalable web app built for the NextGen Innovator Club to streamline operations and boost student engagement. It features a secure admin panel for managing events and members, along with a public-facing site that showcases club info and announcements in a clean, mobile-friendly layout.",
            image: "/project1.jpg",
            category: ["fullstack", "backend"],
            tech: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "JWT", "Express"],
            href: "https://next-gen-it-eight.vercel.app/"
        },
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution featuring product management, cart functionality, secure authentication, and an admin dashboard. Built with React, Next.js, Express, and MongoDB.",
            image: "/project2.png",
            category: ["fullstack", "backend"],
            tech: ["React", "Next.js", "MongoDB", "Express"],
            href: "https://urbanauranp.vercel.app/"
        },

        {
            id: 2,
            title: "Hotel Landing Page",
            description: "A modern and responsive landing page for a hotel, built using React, TypeScript, and Tailwind CSS. It features smooth scroll, responsive design, and clean UI sections for rooms, amenities, and bookings.",
            image: "/project3.png",
            category: "frontend",
            tech: ["React", "TypeScript", "Tailwind CSS"],
            href: "https://hotel-booking-ecru-ten.vercel.app"

        },

        {
            id: 3,
            title: "Events Booking Website",
            description: "A responsive events booking website with RESTful API integration for task management, authentication, and state management using Zustand.",
            image: "/project4.png",
            category: "frontend",
            tech: ["React", "Tailwind CSS", "Zustand"],
            href: "https://brandstage.vercel.app/"

        }

    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => Array.isArray(project.category) ? project.category.includes(activeFilter) : project.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-[#1e1e1e]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <span className="text-sm font-mono text-gray-400">{"// My Work"}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Featured Projects</h2>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`px-4 py-2 text-sm rounded-sm transition-colors ${activeFilter === 'all'
                                ? 'vscode-button text-white'
                                : 'bg-[#252526] text-gray-300 hover:bg-[#2d2d2d]'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setActiveFilter('frontend')}
                            className={`px-4 py-2 text-sm rounded-sm transition-colors ${activeFilter === 'frontend'
                                ? 'vscode-button text-white'
                                : 'bg-[#252526] text-gray-300 hover:bg-[#2d2d2d]'
                                }`}
                        >
                            Frontend
                        </button>
                        <button
                            onClick={() => setActiveFilter('backend')}
                            className={`px-4 py-2 text-sm rounded-sm transition-colors ${activeFilter === 'backend'
                                ? 'vscode-button text-white'
                                : 'bg-[#252526] text-gray-300 hover:bg-[#2d2d2d]'
                                }`}
                        >
                            Backend
                        </button>
                        <button
                            onClick={() => setActiveFilter('fullstack')}
                            className={`px-4 py-2 text-sm rounded-sm transition-colors ${activeFilter === 'fullstack'
                                ? 'vscode-button text-white'
                                : 'bg-[#252526] text-gray-300 hover:bg-[#2d2d2d]'
                                }`}
                        >
                            Full Stack
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="project-card bg-[#252526] border border-[#3e3e3e] rounded-lg overflow-hidden flex flex-col h-full"
                        >
                            <div className="relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    height={1000}
                                    width={1000}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-0 right-0 m-2">
                                    <span className="bg-[#0e639c] text-white text-xs px-2 py-1 rounded">
                                        {Array.isArray(project.category) ? project.category.join(", ") : project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                <div className="mb-4 flex-1 flex flex-col justify-between">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tech.map((tech, index) => (
                                            <span key={index} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex-1"></div>
                                    {project.href && (
                                        <div className="mt-4 flex items-end">
                                            <Link
                                                href={project.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300 flex items-center text-sm transition-colors"
                                                style={{ marginTop: 'auto' }}
                                            >
                                                View Project
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 ml-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="text-center mt-12">
                    <a
                        href="#"
                        className="vscode-button inline-flex items-center"
                    >
                        <span>View All Projects</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div> */}
            </div>
        </section>
    );
}