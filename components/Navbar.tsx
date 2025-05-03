import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
    { name: 'Home', href: '#portfolio' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#252526] border-b border-[#333] sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo/Name */}
                <Link href="#portfolio" className="flex items-center text-white font-bold text-lg">
                    <div className='h-8 w-8 object-cover'>

                        <Image src="/logo.svg" height={200} width={200} alt='logo' />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors font-mono text-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <div className="md:hidden bg-[#252526] border-t border-[#333] px-4 pb-4">
                    <div className="flex flex-col gap-4 mt-2">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors font-mono text-base"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
} 