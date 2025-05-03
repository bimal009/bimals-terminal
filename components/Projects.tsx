"use client"
import { useState, useEffect } from 'react';

export default function Projects() {
    const [activeTab, setActiveTab] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set initial width
        setWindowWidth(window.innerWidth);

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projects = [
        {
            title: "Portfolio Website",
            description: "A developer portfolio website designed with a modern VS Code theme, showcasing projects, skills, and contact information. Built using Next.js for performance, Tailwind CSS for responsive design, and TypeScript for type safety.",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            link: "https://bimalpandey11.com.np"
        },
        {
            title: "Urbanaura Fullstack",
            description: "A scalable full-stack e-commerce application for a clothing brand. Features include product listing, cart functionality, secure JWT-based authentication, admin panel, payment integration, and responsive UI. Built with React and Next.js, using MongoDB for the database, Zustand for state management, and React Query for API handling.",
            technologies: ["React", "Next.js", "MongoDB", "Zustand", "React Query", "JWT Auth"],
            link: "https://urbanauranp.vercel.app/"
        },
        {
            title: "Hotel Landing Page",
            description: "A visually appealing, mobile-responsive landing page for a hotel business. Includes sections for services, image galleries, customer reviews, and contact information. Built with React and styled using Tailwind CSS for quick and clean UI development.",
            technologies: ["React", "Tailwind CSS"],
            link: "https://hotel-booking-ecru-ten.vercel.app/"
        },
        {
            title: "Brand Stage",
            description: "A web platform for event discovery and items rentals. Users can browse events, register, and manage bookings. Includes Zustand-based state management, Prisma ORM for database operations, and full API integration for backend communication.",
            technologies: ["React", "Tailwind CSS", "Zustand", "API Integration", "Prisma"],
            link: "https://brandstage.vercel.app/"
        },
        {
            title: "Next-Gen Club",
            description: "A full-featured community platform for clubs and organizations. Provides role-based access, JWT-secured authentication, post creation, member management, and a dedicated admin dashboard. Built with Next.js and React, and uses MongoDB, Context API, and React Query to manage complex state and data flows.",
            technologies: ["React", "Next.js", "MongoDB", "Context API", "React Query", "JWT Auth"],
            link: "https://next-gen-it-eight.vercel.app/"
        }
    ];


    return (
        <div className="font-mono">
            <div className="flex">
                {/* Line numbers - Hidden on smaller screens */}
                <div className="hidden sm:block text-gray-600 pr-4 text-right select-none w-8 shrink-0">
                    {Array.from({ length: 15 }, (_, i) => (
                        <div key={i} className="h-6">{i + 1}</div>
                    ))}
                </div>

                <div className="flex-1 px-2 sm:px-0">
                    <div className="h-6 text-blue-400">import React from &apos;react&apos;;</div>
                    <div className="h-6"></div>
                    <div className="h-6 text-yellow-400">function <span className="text-green-400">Projects</span>() {"{"}</div>
                    <div className="h-6 pl-4">
                        <span className="text-purple-400">return</span> (
                    </div>
                    <div className="h-6 pl-8 text-gray-400">{"<div>"}</div>

                    {/* Project Tabs - Responsive layout for small screens */}
                    <div className="h-auto min-h-6 pl-4 sm:pl-12 pb-2">
                        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:space-x-2">
                            {projects.map((project, index) => (
                                <button
                                    key={index}
                                    className={`px-2 sm:px-4 py-1 rounded-t text-xs sm:text-sm flex-shrink-0 ${activeTab === index
                                        ? "bg-gray-800 text-white"
                                        : "bg-gray-700 text-gray-400"
                                        }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {project.title.length > 12 && windowWidth < 640
                                        ? project.title.substring(0, 10) + '...'
                                        : project.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Content - Better spacing and text wrapping */}
                    <div className="h-auto pl-4 sm:pl-12 text-gray-400">{"<div>"}</div>
                    <div className="h-auto min-h-6 pl-8 sm:pl-16 break-words">
                        <span className="text-green-400">{projects[activeTab].description}</span>
                    </div>
                    <div className="h-auto min-h-6 pl-8 sm:pl-16 break-words">
                        <span className="text-blue-400">Technologies: </span>
                        <span className="text-amber-400">
                            {projects[activeTab].technologies.join(", ")}
                        </span>
                    </div>
                    <div className="h-auto min-h-6 pl-8 sm:pl-16">
                        <a
                            href={projects[activeTab].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:underline"
                        >
                            Visit Link
                        </a>
                    </div>
                    <div className="h-6 pl-4 sm:pl-12 text-gray-400">{"</div>"}</div>
                    <div className="h-6 pl-8 text-gray-400">{"</div>"}</div>
                    <div className="h-6 pl-4">);</div>
                    <div className="h-6">{"}"}</div>
                    <div className="h-6"></div>
                    <div className="h-6 text-yellow-400">export default Projects;</div>
                </div>
            </div>
        </div>
    );
}

