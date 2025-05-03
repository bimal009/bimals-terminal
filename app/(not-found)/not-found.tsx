"use client"
import { useState, useEffect } from 'react';
import { FileText, Settings, Search, Code, GitBranch, X, ChevronRight, AlertTriangle } from 'lucide-react';

export default function NotFound() {
    const [cursorVisible, setCursorVisible] = useState(true);
    const [typedText, setTypedText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const fullErrorText = "Error: Page not found (404)";
    const fullConsoleText = "The requested resource could not be located on this server.";

    useEffect(() => {
        // Cursor blinking effect
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 530);

        // Typing animation for error message
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < fullErrorText.length) {
                setTypedText(fullErrorText.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);

                // Start typing console message after error message is complete
                let consoleIndex = 0;
                const consoleTypingInterval = setInterval(() => {
                    if (consoleIndex < fullConsoleText.length) {
                        setErrorMessage(fullConsoleText.substring(0, consoleIndex + 1));
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
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200 font-mono">
            {/* Title Bar */}
            <div className="bg-gray-800 px-4 py-1 flex items-center justify-between border-b border-black">
                <div className="flex items-center">
                    <span className="text-gray-300 text-sm">404 - Not Found - VS Code</span>
                </div>
                <div className="flex">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mx-1"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Activity Bar */}
                <div className="w-12 bg-gray-900 flex flex-col items-center py-2 border-r border-gray-800">
                    <div className="p-2 text-blue-400 bg-gray-800 rounded my-1">
                        <FileText size={20} />
                    </div>
                    <div className="p-2 text-gray-500 hover:text-gray-300 my-1">
                        <Search size={20} />
                    </div>
                    <div className="p-2 text-gray-500 hover:text-gray-300 my-1">
                        <GitBranch size={20} />
                    </div>
                    <div className="p-2 text-gray-500 hover:text-gray-300 my-1">
                        <Code size={20} />
                    </div>
                    <div className="mt-auto p-2 text-gray-500 hover:text-gray-300">
                        <Settings size={20} />
                    </div>
                </div>

                {/* Explorer Sidebar */}
                <div className="w-64 bg-gray-800 overflow-y-auto flex flex-col">
                    <div className="p-3 text-sm uppercase tracking-wider text-gray-500 font-semibold">Explorer</div>

                    <div className="px-2">
                        <div className="flex items-center text-gray-300 mb-1 hover:bg-gray-700 px-2 py-1 rounded">
                            <ChevronRight size={16} className="mr-1" />
                            <span>PROJECT</span>
                        </div>

                        <div className="pl-4">
                            <div className="flex items-center text-gray-400 hover:bg-gray-700 px-2 py-1 rounded">
                                <FileText size={14} className="mr-2 text-blue-400" />
                                <span>index.html</span>
                            </div>
                            <div className="flex items-center text-gray-400 hover:bg-gray-700 px-2 py-1 rounded">
                                <FileText size={14} className="mr-2 text-purple-400" />
                                <span>styles.css</span>
                            </div>
                            <div className="flex items-center text-gray-400 hover:bg-gray-700 px-2 py-1 rounded">
                                <FileText size={14} className="mr-2 text-yellow-400" />
                                <span>app.js</span>
                            </div>
                            <div className="flex items-center text-gray-400 hover:bg-gray-700 px-2 py-1 rounded bg-gray-700">
                                <FileText size={14} className="mr-2 text-red-400" />
                                <span>404.js</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Editor */}
                <div className="flex-1 flex flex-col bg-gray-900">
                    {/* Tabs */}
                    <div className="flex bg-gray-800 text-gray-400 border-b border-gray-900">
                        <div className="px-4 py-2 bg-gray-900 text-gray-200 border-r border-gray-800 flex items-center">
                            <FileText size={14} className="mr-2 text-red-400" />
                            404.js
                            <X size={14} className="ml-2 hover:bg-gray-700 hover:text-gray-200 rounded" />
                        </div>
                    </div>

                    {/* Code Editor */}
                    <div className="flex-1 p-4 font-mono text-sm overflow-auto">
                        <div className="flex">
                            <div className="text-gray-600 pr-4 text-right select-none">
                                {Array.from({ length: 15 }, (_, i) => (
                                    <div key={i} className="h-6">{i + 1}</div>
                                ))}
                            </div>

                            <div className="flex-1">
                                <div className="h-6 text-blue-400">import React from 'react';</div>
                                <div className="h-6 text-blue-400">import ReactDOM from 'react-dom';</div>
                                <div className="h-6 text-blue-400">import './styles.css';</div>
                                <div className="h-6"></div>
                                <div className="h-6 text-yellow-400">function <span className="text-green-400">NotFound</span>() {"{"}</div>
                                <div className="h-6 pl-4">
                                    <span className="text-purple-400">return</span> (
                                </div>
                                <div className="h-6 pl-8 text-gray-400">{"<div>"}</div>
                                <div className="h-6 pl-12">
                                    <span className="text-red-400 font-semibold">{typedText}</span>
                                    {cursorVisible && <span className="inline-block w-2 h-4 bg-white ml-1"></span>}
                                </div>
                                <div className="h-6 pl-12 text-amber-400">
                                    <span>// {errorMessage}</span>
                                </div>
                                <div className="h-6 pl-8 text-gray-400">{"</div>"}</div>
                                <div className="h-6 pl-4">);</div>
                                <div className="h-6">{"}"}</div>
                                <div className="h-6"></div>
                                <div className="h-6 text-yellow-400">export default NotFound;</div>
                            </div>
                        </div>
                    </div>

                    {/* Problems Panel */}
                    <div className="bg-gray-800 border-t border-gray-700">
                        <div className="flex text-sm border-b border-gray-700">
                            <div className="px-4 py-1 bg-gray-700 text-gray-300">PROBLEMS</div>
                            <div className="px-4 py-1 text-gray-500">OUTPUT</div>
                            <div className="px-4 py-1 text-gray-500">DEBUG CONSOLE</div>
                            <div className="px-4 py-1 text-gray-500">TERMINAL</div>
                        </div>
                        <div className="p-2 text-sm flex items-center">
                            <AlertTriangle size={14} className="text-yellow-500 mr-2" />
                            <span className="text-gray-300">404 error: The requested URL was not found on this server.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="bg-blue-600 text-white px-2 py-1 flex justify-between text-xs">
                <div className="flex items-center">
                    <span className="flex items-center px-2 border-r border-blue-500">
                        <GitBranch size={12} className="mr-1" /> main
                    </span>
                    <span className="px-2">UTF-8</span>
                </div>
                <div className="flex items-center">
                    <span className="px-2">Ln 8, Col 26</span>
                    <span className="px-2 border-l border-blue-500">JavaScript</span>
                    <span className="px-2 border-l border-blue-500">Spaces: 2</span>
                </div>
            </div>
        </div>
    );
}