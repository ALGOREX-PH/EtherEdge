"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MenuIcon, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      scrolled ? 'glassmorphism py-3 border-b border-white/10' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <Zap className="h-8 w-8 text-primary animate-pulse" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          </div>
          <span className="text-2xl font-bold tracking-tight glow-blue">
            Ether<span className="text-gradient glow">Edge</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#vision">Vision</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#roadmap">Roadmap</NavLink>
          <NavLink href="#manifesto">Manifesto</NavLink>
          <Link 
            href="#get-started" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-all duration-200 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-foreground p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism border-t border-white/10 py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink href="#vision" onClick={toggleMenu}>Vision</MobileNavLink>
            <MobileNavLink href="#features" onClick={toggleMenu}>Features</MobileNavLink>
            <MobileNavLink href="#roadmap" onClick={toggleMenu}>Roadmap</MobileNavLink>
            <MobileNavLink href="#manifesto" onClick={toggleMenu}>Manifesto</MobileNavLink>
            <Link 
              href="#get-started" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 text-center"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium hover:text-primary"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium block py-2 hover:text-primary"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;