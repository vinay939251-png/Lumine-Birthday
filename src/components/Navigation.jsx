import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Moon, Sun, Menu, X } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';

export function Navigation({ isCreepy, toggleTheme, soundEnabled, toggleSound, onPlayClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (onPlayClick) onPlayClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2.5 bg-cream/90 dark:bg-creepy-bg/90 backdrop-blur-md shadow-sm border-b border-cream-border dark:border-creepy-cardborder' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Scrapbook Brand Tag */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2 text-warmbrown-dark dark:text-creepy-text focus:outline-none focus:ring-2 focus:ring-rose rounded-lg px-2 py-1"
        >
          <span className="text-xl transform group-hover:rotate-12 transition-transform duration-200">🎀</span>
          <span className="font-serif font-semibold text-lg tracking-wide group-hover:text-rose dark:group-hover:text-creepy-rose transition-colors">
            Lumine & Vinay
          </span>
          <span className="text-xs font-handwriting px-2 py-0.5 rounded-full bg-blush/60 dark:bg-creepy-mauve text-warmbrown dark:text-creepy-lavender hidden sm:inline-block">
            birthday edition
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-cream-card/80 dark:bg-creepy-card/80 px-4 py-1.5 rounded-full border border-cream-border dark:border-creepy-cardborder shadow-sm">
          {birthdayContent.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3 py-1 text-sm font-medium text-warmbrown dark:text-creepy-muted hover:text-cocoa dark:hover:text-creepy-text hover:bg-blush/50 dark:hover:bg-creepy-mauve/50 rounded-full transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Sound & Theme */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              toggleSound();
              if (onPlayClick) onPlayClick();
            }}
            title={soundEnabled ? "Mute chimes" : "Enable gentle chimes"}
            aria-label={soundEnabled ? "Mute chimes" : "Enable gentle chimes"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-cream-card dark:bg-creepy-card border border-cream-border dark:border-creepy-cardborder text-warmbrown dark:text-creepy-text hover:bg-blush/40 dark:hover:bg-creepy-mauve transition-colors shadow-sm"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-rose dark:text-creepy-rose animate-pulse" />
                <span className="hidden sm:inline">Sound On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-warmbrown-light dark:text-creepy-muted" />
                <span className="hidden sm:inline text-warmbrown-light dark:text-creepy-muted">Muted</span>
              </>
            )}
          </button>

          {/* Theme Toggle (Sweet vs Creepy-Cute) */}
          <button
            onClick={() => {
              toggleTheme();
              if (onPlayClick) onPlayClick();
            }}
            title={isCreepy ? "Switch to Sweet Mode" : "Switch to Creepy-Cute Mode"}
            aria-label="Toggle theme mode"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-cream-card dark:bg-creepy-card border border-cream-border dark:border-creepy-cardborder text-warmbrown dark:text-creepy-text hover:bg-blush/40 dark:hover:bg-creepy-mauve transition-colors shadow-sm"
          >
            {isCreepy ? (
              <>
                <Moon className="w-4 h-4 text-creepy-lavender" />
                <span className="hidden sm:inline">Creepy-Cute 👀</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-rose" />
                <span className="hidden sm:inline">Sweet Mode 🎀</span>
              </>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-warmbrown dark:text-creepy-text hover:bg-blush/40 dark:hover:bg-creepy-mauve"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-card dark:bg-creepy-surface border-b border-cream-border dark:border-creepy-cardborder px-4 py-3 space-y-1">
          {birthdayContent.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-4 py-2 text-sm font-medium text-warmbrown dark:text-creepy-text hover:bg-blush/50 dark:hover:bg-creepy-mauve/50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
