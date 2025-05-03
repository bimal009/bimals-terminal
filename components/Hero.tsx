import { useState, useEffect } from 'react';

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const completeText = "Full Stack Developer";
    const [showCursor, setShowCursor] = useState(true);

    // Typing effect
    useEffect(() => {
        if (displayText.length < completeText.length) {
            const typingTimer = setTimeout(() => {
                setDisplayText(completeText.substring(0, displayText.length + 1));
            }, 100);
            return () => clearTimeout(typingTimer);
        }
    }, [displayText]);

    // Blinking cursor effect
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorTimer);
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center px-4 py-20 md:py-32 bg-[#1e1e1e]">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-3/5">
                        <div className="mb-8">
                            <span className="text-sm font-mono text-gray-400">// Hello World</span>
                            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4 text-white">
                                I'm <span className="theme-token-keyword">Bimal Pandey</span>
                            </h1>
                            <div className="text-xl md:text-2xl text-gray-300 flex">
                                <span>{displayText}</span>
                                <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-8 max-w-xl leading-relaxed">
                            <span className="theme-token-comment">/*
                                Passionate about creating elegant solutions to complex problems.
                                Specializing in modern web technologies and user-centric design.
                                */</span>
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="vscode-button flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="flex items-center px-4 py-2 border border-[#3e3e3e] hover:border-[#565656] rounded-sm text-gray-300 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                Contact Me
                            </a>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-2/5">
                        <div className="bg-[#252526] border border-[#3e3e3e] rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                                <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                                <div className="ml-2 text-xs text-gray-400">developer.json</div>
                            </div>
                            <pre className="text-sm overflow-x-auto">
                                <code>
                                    <span className="theme-token-punctuation">{'{'}</span>{'\n'}
                                    {'  '}<span className="theme-token-property">"name"</span><span className="theme-token-punctuation">:</span> <span className="theme-token-string">"Bimal Pandey"</span><span className="theme-token-punctuation">,</span>{'\n'}
                                    {'  '}<span className="theme-token-property">"title"</span><span className="theme-token-punctuation">:</span> <span className="theme-token-string">"Full Stack Developer"</span><span className="theme-token-punctuation">,</span>{'\n'}
                                    {'  '}<span className="theme-token-property">"location"</span><span className="theme-token-punctuation">:</span> <span className="theme-token-string">"Toronto, ON"</span><span className="theme-token-punctuation">,</span>{'\n'}
                                    {'  '}<span className="theme-token-property">"email"</span><span className="theme-token-punctuation">:</span> <span className="theme-token-string">"pandeybimal616@gmail.com"</span><span className="theme-token-punctuation">,</span>{'\n'}
                                    {'  '}<span className="theme-token-property">"specialties"</span><span className="theme-token-punctuation">:</span> <span className="theme-token-punctuation">[</span>{'\n'}
                                    {'    '}<span className="theme-token-string">"Frontend Development"</span><span className="theme-token-punctuation">,</span>{'\n'}
                                    {'    '}<span className="theme-token-string">"Backend Architecture"</span><span className="theme-token-punctuation">,</span>{'\n'}
                                    {'    '}<span className="theme-token-string">"Responsive Design"</span><span className="theme-token-punctuation">,</span>{'\n'}
                                    {'    '}<span className="theme-token-string">"API Development"</span>{'\n'}
                                    {'  '}<span className="theme-token-punctuation">]</span>{'\n'}
                                    <span className="theme-token-punctuation">{'}'}</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}