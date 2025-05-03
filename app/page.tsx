'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isRunning, setIsRunning] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState(['Welcome to Bimal\'s Portfolio Terminal']);
  const [isLoading, setIsLoading] = useState(false);

  const handleTerminalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add the command to the output
    const newOutput = [...terminalOutput, `$ ${terminalInput}`];
    setTerminalOutput(newOutput);

    // Process command
    if (terminalInput.trim().toLowerCase() === 'npm run dev' ||
      terminalInput.trim().toLowerCase() === 'yarn dev') {

      setTerminalOutput([...newOutput, 'Starting development server...']);
      setIsLoading(true);

      // Simulate loading with typing effect
      setTimeout(() => {
        setTerminalOutput([
          ...newOutput,
          'Starting development server...',
          'Compiling...',
          'Ready in 0.8s',
          'Rendering portfolio...'
        ]);

        setTimeout(() => {
          setIsLoading(false);
          setIsRunning(true);

          // Scroll to portfolio section
          setTimeout(() => {
            const portfolioElement = document.getElementById('portfolio');
            if (portfolioElement) {
              portfolioElement.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }, 800);
      }, 500);
    } else if (terminalInput.trim().toLowerCase() === 'clear') {
      setTerminalOutput(['Terminal cleared']);
    } else if (terminalInput.trim().toLowerCase() === 'help') {
      setTerminalOutput([
        ...newOutput,
        'Available commands:',
        '  npm run dev   - Start the portfolio',
        '  yarn dev      - Alternative to npm run dev',
        '  clear         - Clear the terminal',
        '  help          - Show available commands'
      ]);
    } else if (terminalInput.trim()) {
      setTerminalOutput([
        ...newOutput,
        `Command not found: ${terminalInput}`,
        'Type "help" for available commands'
      ]);
    }

    setTerminalInput('');
  };

  return (
    <main className="min-h-screen select-none">
      {!isRunning ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#1e1e1e]">
          <div className="theme-preview w-full max-w-4xl">
            <div className="theme-window-controls flex items-center p-2 bg-[#252526] rounded-t-lg">
              <div className="control control-red h-3 w-3 rounded-full bg-red-500 mr-2"></div>
              <div className="control control-yellow h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="control control-green h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <div className="ml-4 text-xs sm:text-sm text-gray-400">bimalpandey-portfolio.tsx</div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Left sidebar - file explorer */}
              <div className="hidden md:block w-48 bg-[#252526] p-3 border-r border-[#333]">
                <div className="text-sm text-gray-400 mb-2 font-medium">EXPLORER</div>
                <div className="ml-2">
                  <div className="text-gray-300 text-sm mb-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                    </svg>
                    portfolio
                  </div>
                  <div className="ml-4 text-white text-sm">
                    <div className="flex items-center py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.667 4.667L8 3.333h4l1.333 1.334v1.666H6.667V4.667zm0 3.666h8v7.334H5.333V6.667h1.334z" clipRule="evenodd" />
                      </svg>
                      page.tsx
                    </div>
                    <div className="flex items-center py-1 bg-[#37373d]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.667 4.667L8 3.333h4l1.333 1.334v1.666H6.667V4.667zm0 3.666h8v7.334H5.333V6.667h1.334z" clipRule="evenodd" />
                      </svg>
                      bimalpandey.tsx
                    </div>
                    <div className="flex items-center py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.667 4.667L8 3.333h4l1.333 1.334v1.666H6.667V4.667zm0 3.666h8v7.334H5.333V6.667h1.334z" clipRule="evenodd" />
                      </svg>
                      layout.tsx
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - code editor */}
              <div className="flex-1">
                <div className="bg-[#1e1e1e] p-4 overflow-y-auto code-editor h-64 md:h-96">
                  <pre className="text-sm sm:text-base">
                    <code>
                      <span className="code-line"><span className="theme-token-keyword">import</span> <span className="theme-token-punctuation">{'{'}</span> <span className="theme-token-variable">Portfolio</span> <span className="theme-token-punctuation">{'}'}</span> <span className="theme-token-keyword">from</span> <span className="theme-token-string">'./components'</span><span className="theme-token-punctuation">;</span></span>
                      <span className="code-line"></span>
                      <span className="code-line"><span className="theme-token-keyword">const</span> <span className="theme-token-function">BimalPandeyPortfolio</span> <span className="theme-token-operator">=</span> <span className="theme-token-punctuation">()</span> <span className="theme-token-operator">{"=>"}</span> <span className="theme-token-punctuation">{'{'}</span></span>
                      <span className="code-line">  <span className="theme-token-keyword">return</span> <span className="theme-token-punctuation">(</span></span>
                      <span className="code-line">    <span className="theme-token-punctuation">{"<"}</span><span className="theme-token-class">Portfolio</span></span>
                      <span className="code-line">      <span className="theme-token-property">name</span><span className="theme-token-operator">=</span><span className="theme-token-string">"Bimal Pandey"</span></span>
                      <span className="code-line">      <span className="theme-token-property">role</span><span className="theme-token-operator">=</span><span className="theme-token-string">"Full Stack Developer"</span></span>
                      <span className="code-line">      <span className="theme-token-property">email</span><span className="theme-token-operator">=</span><span className="theme-token-string">"pandeybimal616@gmail.com"</span></span>
                      <span className="code-line">      <span className="theme-token-property">skills</span><span className="theme-token-operator">=</span><span className="theme-token-punctuation">{'['}</span></span>
                      <span className="code-line">        <span className="theme-token-string">"JavaScript"</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">"TypeScript"</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">"React"</span><span className="theme-token-punctuation">,</span></span>
                      <span className="code-line">        <span className="theme-token-string">"Next.js"</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">"Node.js"</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">"Express"</span><span className="theme-token-punctuation">,</span></span>
                      <span className="code-line">        <span className="theme-token-string">"MongoDB"</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">"PostgreSQL"</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">"Tailwind"</span></span>
                      <span className="code-line highlight">        <span className="theme-token-comment">// ...and many more skills</span></span>
                      <span className="code-line">      <span className="theme-token-punctuation">{']'}</span></span>
                      <span className="code-line">    <span className="theme-token-punctuation">{"/>"}</span></span>
                      <span className="code-line">  <span className="theme-token-punctuation">);</span></span>
                      <span className="code-line"><span className="theme-token-punctuation">{'}'};</span></span>
                      <span className="code-line"></span>
                      <span className="code-line"><span className="theme-token-keyword">export</span> <span className="theme-token-keyword">default</span> <span className="theme-token-function">BimalPandeyPortfolio</span><span className="theme-token-punctuation">;</span></span>
                    </code>
                  </pre>
                </div>

                {/* Terminal */}
                <div className="bg-[#1e1e1e] border-t border-[#333] p-3">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">TERMINAL</div>
                  <div className="bg-[#121212] p-3 rounded text-gray-200 text-sm font-mono h-40 overflow-y-auto">
                    {terminalOutput.map((line, i) => (
                      <div key={i} className="mb-1">{line}</div>
                    ))}
                    <form onSubmit={handleTerminalSubmit} className="flex items-center mt-2">
                      <span className="text-green-400 mr-2">$</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        className="bg-transparent focus:outline-none flex-1"
                        placeholder={isLoading ? '' : 'Type "npm run dev" to start...'}
                        disabled={isLoading}
                        autoFocus
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="portfolio">
          <Navbar />
          <Header />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
}