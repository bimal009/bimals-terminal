"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900">
            <div className="section-container">
                <h2 className="section-title">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="reveal"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
                            <Image
                                src="/placeholder.png" // Replace with your actual image
                                alt="Your Name"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="reveal"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            I'm a passionate Full Stack Developer with 5+ years of experience creating beautiful, functional web applications. I specialize in React, Next.js, TypeScript, and modern design frameworks like Tailwind CSS.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            My journey in technology began at XYZ University where I earned my degree in Computer Science. Since then, I've worked with startups and established companies to bring their digital visions to life.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-8">
                            When I'm not coding, you can find me exploring hiking trails, reading sci-fi novels, or experimenting with new technologies to expand my skillset.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/resume.pdf"
                                className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                            >
                                <FileText className="h-5 w-5" />
                                <span>Resume</span>
                            </Link>

                            <div className="flex gap-4">
                                <Link
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-primary dark:hover:text-primary transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-primary dark:hover:text-primary transition-colors"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-primary dark:hover:text-primary transition-colors"
                                >
                                    <Twitter className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}