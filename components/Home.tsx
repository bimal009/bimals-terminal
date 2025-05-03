"use client"
import { useState, useEffect } from 'react';

export default function Home() {
    const [cursorVisible, setCursorVisible] = useState(true);
    const [typedText, setTypedText] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    const fullWelcomeText = "Welcome to Bimal's Portfolio";
    const fullConsoleText = "Full Stack Developer specializing in React, Next.js, Node.js, and more";

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set initial width
        setWindowWidth(window.innerWidth);

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cursor blinking effect
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 530);

        // Typing animation for welcome message
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < fullWelcomeText.length) {
                setTypedText(fullWelcomeText.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);

                // Start typing console message after welcome message is complete
                let consoleIndex = 0;
                const consoleTypingInterval = setInterval(() => {
                    if (consoleIndex < fullConsoleText.length) {
                        setWelcomeMessage(fullConsoleText.substring(0, consoleIndex + 1));
                        consoleIndex++;
                    } else {
                        clearInterval(consoleTypingInterval);
                    }
                }, 35);
            }
        }, 70);

        return () => {
            clearInterval(cursorInterval);
            clearInterval(typingInterval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                    <div className="h-6 text-blue-400">import ReactDOM from &apos;react-dom&apos;;</div>
                    <div className="h-6 text-blue-400">import &apos;./styles.css&apos;;</div>
                    <div className="h-6"></div>
                    <div className="h-6 text-yellow-400">function <span className="text-green-400">Home</span>() {"{"}</div>
                    <div className="h-6 pl-4">
                        <span className="text-purple-400">return</span> (
                    </div>
                    <div className="h-6 pl-8 text-gray-400">{"<div className=\"container\">"}</div>

                    <div className="h-auto min-h-6 pl-8 sm:pl-12 break-words">
                        <span className="text-green-400">{typedText}</span>
                        {cursorVisible && <span className="inline-block w-2 h-4 bg-white ml-1"></span>}
                    </div>

                    <div className="h-auto min-h-6 pl-8 sm:pl-12 break-words">
                        <span className="text-yellow-500">{"// "}{welcomeMessage}</span>
                    </div>

                    <div className="h-6 pl-8 text-gray-400">{"</div>"}</div>
                    <div className="h-6 pl-4">);</div>
                    <div className="h-6">{"}"}</div>
                    <div className="h-6"></div>
                    <div className="h-6 text-yellow-400">export default Home;</div>
                </div>
            </div>
        </div>
    );
}