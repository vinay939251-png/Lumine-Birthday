import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';

export function BirthdayHero() {
  const { hero } = birthdayContent;

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-8 px-4 overflow-hidden text-center"
    >
      {/* Subtle handcrafted background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 notebook-grid" />
      
      {/* Decorative Washi Tape Corner Accents */}
      <div className="absolute top-20 left-6 sm:left-16 washi-tape rotate-[-12deg] hidden sm:block" />
      <div className="absolute top-24 right-8 sm:right-20 washi-tape washi-tape-matcha rotate-[8deg] hidden sm:block" />

      <div className="relative max-w-3xl mx-auto z-10">
        
        {/* Handwritten margin annotation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-blush/60 dark:bg-creepy-mauve/60 border border-rose/30 text-rose-dark dark:text-creepy-lavender font-handwriting text-xl sm:text-2xl"
        >
          <Sparkles className="w-4 h-4 text-rose dark:text-creepy-rose animate-spin-slow" />
          <span>{hero.annotation}</span>
        </motion.div>

        {/* Main Editorial Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cocoa dark:text-creepy-text leading-[1.15] mb-5"
        >
          {hero.heading}
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-lg sm:text-xl text-warmbrown dark:text-creepy-muted max-w-xl mx-auto font-sans font-normal leading-relaxed"
        >
          {hero.subheading}
        </motion.p>

      </div>
    </section>
  );
}
