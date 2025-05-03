"use client"
import { useState, useEffect } from 'react';
import { FileText, Settings, Search, Code, GitBranch, X, CheckCircle, Coffee, Menu, ChevronDown } from 'lucide-react';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Main() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile); // Desktop: always open, Mobile: closed by default
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const fileComponents = [
    { name: 'home.js', component: 'home', color: 'text-blue-400' },
    { name: 'projects.js', component: 'projects', color: 'text-yellow-400' },
    { name: 'skills.js', component: 'skills', color: 'text-green-400' },
    { name: 'contact.js', component: 'contact', color: 'text-orange-400' },
    { name: 'styles.css', component: null, color: 'text-purple-400' },
    { name: '404.js', component: null, color: 'text-red-400' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-800 px-4 py-1 flex items-center justify-between border-b border-black">
        <div className="flex items-center">
          <span className="text-gray-300 text-sm">Bimal&apos;s Portfolio - VS Code</span>
        </div>
        <div className="flex">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Menu Button - Moved to right side, hidden when sidebar is open */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`md:hidden absolute top-2 right-2 z-20 p-2 bg-gray-800 rounded text-gray-300 hover:bg-gray-700 ${sidebarOpen ? 'hidden' : 'block'}`}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>

        {/* Activity Bar - Hidden on mobile */}
        <div className="hidden md:flex w-12 bg-gray-900 flex-col items-center py-2 border-r border-gray-800">
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

        {/* Explorer Sidebar - With improved mobile handling */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} 
                        transition-transform duration-300 w-64 bg-gray-800 overflow-y-auto flex flex-col 
                        fixed md:relative z-10 h-[calc(100vh-2rem)] md:h-auto`}>
          <div className="p-3 text-sm uppercase tracking-wider text-gray-500 font-semibold flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hidden md:block p-1 mr-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded"
              >
                <Menu size={16} />
              </button>
              <span>Explorer</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-500 hover:text-gray-300">
              <X size={16} />
            </button>
          </div>

          <div className="px-2">
            <div className="flex items-center text-gray-300 mb-1 hover:bg-gray-700 px-2 py-1 rounded">
              <ChevronDown size={16} className="mr-1" />
              <span>PORTFOLIO</span>
            </div>

            <div className="pl-4">
              {fileComponents.map((file) => (
                <div
                  key={file.name}
                  className={`flex items-center text-gray-400 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer ${activeComponent === file.component ? 'bg-gray-700' : ''}`}
                  onClick={() => {
                    if (file.component) {
                      setActiveComponent(file.component);
                      if (isMobile) {
                        setSidebarOpen(false);
                      }
                    }
                  }}
                >
                  <FileText size={14} className={`mr-2 ${file.color}`} />
                  <span>{file.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editor - With padding to accommodate the mobile menu button */}
        <div className="flex-1 flex flex-col bg-gray-900 md:ml-0 overflow-hidden">
          {/* Tabs */}
          <div className="flex bg-gray-800 text-gray-400 border-b border-gray-900 overflow-x-auto pt-2 md:pt-0">
            {/* No left padding needed since hamburger is on the right */}
            {fileComponents.filter(f => f.component === activeComponent).map((file) => (
              <div key={file.name} className="px-4 py-2 bg-gray-900 text-gray-200 border-r border-gray-800 flex items-center whitespace-nowrap">
                <FileText size={14} className={`mr-2 ${file.color}`} />
                {file.name}
                <X size={14} className="ml-2 hover:bg-gray-700 hover:text-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Code Editor - With improved padding */}
          <div className="flex-1 p-4 md:px-6 font-mono text-sm overflow-auto">
            {renderActiveComponent()}
          </div>

          {/* Terminal Panel */}
          <div className="bg-gray-800 border-t border-gray-700">
            <div className="flex text-sm border-b border-gray-700 overflow-x-auto">
              <div className="px-4 py-1 text-gray-500">PROBLEMS</div>
              <div className="px-4 py-1 bg-gray-700 text-gray-300">TERMINAL</div>
              <div className="px-4 py-1 text-gray-500">OUTPUT</div>
              <div className="px-4 py-1 text-gray-500">DEBUG CONSOLE</div>
            </div>
            <div className="p-2 text-sm">
              <div className="flex items-center">
                <CheckCircle size={14} className="text-green-500 mr-2" />
                <span className="text-gray-300">Portfolio successfully compiled and ready!</span>
              </div>
              <div className="flex items-center mt-1">
                <Coffee size={14} className="text-blue-400 mr-2" />
                <span className="text-gray-400">Server running at http://localhost:3000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-blue-600 text-white px-2 py-1 flex justify-between text-xs overflow-x-auto">
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