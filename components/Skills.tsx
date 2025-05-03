
"use client"
import { useState } from 'react';

type SkillCategory = 'frontend' | 'backend' | 'other';

interface SkillsData {
    frontend: string[];
    backend: string[];
    other: string[];
}
export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

    const skills: SkillsData = {
        frontend: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Shadcn UI',
            'Framer Motion',
            'Vite'
        ],
        backend: [
            'Node.js',
            'Express',
            'MongoDB',
            'PostgreSQL',
            'MySQL',
            'Mongoose',
            'Prisma',
            'Drizzle ORM',
            'Zustand',
            'Neon'
        ],
        other: [
            'Docker',
            'AWS',
            'Python',
            'Java',
            'C',
            'React Native'
        ]
    };


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
                    <div className="h-6 text-yellow-400">function <span className="text-green-400">Skills</span>() {"{"}</div>
                    <div className="h-6 pl-4">
                        <span className="text-purple-400">return</span> (
                    </div>
                    <div className="h-6 pl-8 text-gray-400">{"<div>"}</div>

                    {/* Skill Categories - Responsive layout for small screens */}
                    <div className="h-auto min-h-6 pl-4 sm:pl-12 pb-2">
                        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:space-x-2">
                            {(Object.keys(skills) as SkillCategory[]).map((category) => (
                                <button
                                    key={category}
                                    className={`px-2 sm:px-4 py-1 rounded-t text-xs sm:text-sm flex-shrink-0 ${activeCategory === category
                                        ? "bg-gray-800 text-white"
                                        : "bg-gray-700 text-gray-400"
                                        }`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Skills List - Better text wrapping */}
                    <div className="h-6 pl-4 sm:pl-12 text-gray-400">{"<div>"}</div>
                    <div className="h-6 pl-8 sm:pl-16">
                        <span className="text-blue-400">const skills = [</span>
                    </div>
                    {skills[activeCategory].map((skill: string, index: number) => (
                        <div key={index} className="h-6 pl-12 sm:pl-20 break-words">
                            <span className="text-green-400">&apos;{skill}&apos;{index < skills[activeCategory].length - 1 ? ',' : ''}</span>
                        </div>
                    ))}
                    <div className="h-6 pl-8 sm:pl-16">
                        <span className="text-blue-400">];</span>
                    </div>
                    <div className="h-6 pl-4 sm:pl-12 text-gray-400">{"</div>"}</div>
                    <div className="h-6 pl-8 text-gray-400">{"</div>"}</div>
                    <div className="h-6 pl-4">);</div>
                    <div className="h-6">{"}"}</div>
                    <div className="h-6"></div>
                    <div className="h-6 text-yellow-400">export default Skills;</div>
                </div>
            </div>
        </div>
    );
}
