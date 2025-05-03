'use client';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#252526] border-t border-[#333] py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <div className="flex items-center">
                                <code className="text-[#9cdcfe] text-lg font-medium">
                                    <span className="theme-token-keyword">const</span>{' '}
                                    <span className="theme-token-function">developer</span>{' '}
                                    <span className="theme-token-operator">=</span>{' '}
                                    <span className="theme-token-string">"Bimal Pandey"</span>
                                </code>
                            </div>
                            <p className="text-sm mt-2 text-gray-400">
                                <span className="theme-token-comment">// Full Stack Developer</span>
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-end">
                            <div className="text-sm text-gray-400 mb-2">
                                <span className="theme-token-comment">// Quick links</span>
                            </div>
                            <nav className="flex flex-wrap gap-6">
                                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </a>
                                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                                    Projects
                                </a>
                                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                                    Skills
                                </a>
                                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </nav>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#333] flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            <span className="theme-token-comment">
                /* © {currentYear} Bimal Pandey. All rights reserved. */
                            </span>
                        </p>

                        <div className="mt-4 md:mt-0">
                            <p className="text-sm text-gray-400 flex items-center">
                                <span className="theme-token-function">console</span>
                                <span className="theme-token-punctuation">.</span>
                                <span className="theme-token-function">log</span>
                                <span className="theme-token-punctuation">(</span>
                                <span className="theme-token-string">"Built with Next.js & Tailwind CSS"</span>
                                <span className="theme-token-punctuation">)</span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center mx-auto text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                            <code className="font-mono">
                                <span className="theme-token-keyword">return</span>
                                <span className="theme-token-operator">;</span>
                            </code>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;