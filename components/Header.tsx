"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        // Check user's preferred color scheme
        if (typeof window !== 'undefined') {
            setIsDarkMode(
                localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
            );
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header
            className={`fixed w-full z-30 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-4 md:py-6">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
                            YourName
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium hover:text-primary transition-colors ${pathname === link.href ? 'text-primary' : 'text-gray-600 dark:text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center">
                        {/* Dark mode toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5 text-gray-300" />
                            ) : (
                                <Moon className="h-5 w-5 text-gray-600" />
                            )}
                        </button>

                        {/* Mobile menu button */}
                        <button
                            className="ml-2 md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'
                    } bg-white dark:bg-gray-900 shadow-lg`}
            >
                <div className="px-4 pt-2 pb-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
