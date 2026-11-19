import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Heart, Sparkles } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';

export function MascotCorner({ onPlayClick }) {
  const { mascots } = birthdayContent;

  const [catMessage, setCatMessage] = useState(null);
  const [snakeMessage, setSnakeMessage] = useState(null);

  // Randomize message helper
  const handleCatClick = () => {
    if (onPlayClick) onPlayClick();
    const list = mascots.cat.messages;
    const currentIdx = list.indexOf(catMessage);
    let nextIdx = Math.floor(Math.random() * list.length);
    if (nextIdx === currentIdx && list.length > 1) {
      nextIdx = (nextIdx + 1) % list.length;
    }
    setCatMessage(list[nextIdx]);
  };

  const handleSnakeClick = () => {
    if (onPlayClick) onPlayClick();
    const list = mascots.snake.messages;
    const currentIdx = list.indexOf(snakeMessage);
    let nextIdx = Math.floor(Math.random() * list.length);
    if (nextIdx === currentIdx && list.length > 1) {
      nextIdx = (nextIdx + 1) % list.length;
    }
    setSnakeMessage(list[nextIdx]);
  };

  return (
    <section id="mascots" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-handwriting text-2xl text-rose-dark dark:text-creepy-lavender">
            friendly little helpers ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cocoa dark:text-creepy-text mt-1 mb-2">
            {mascots.heading}
          </h2>
          <p className="text-warmbrown dark:text-creepy-muted text-base sm:text-lg">
            {mascots.subheading} (Tap each companion for a little note!)
          </p>
        </div>

        {/* Companions Presentation Shelf */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
          
          {/* CAT MASCOT */}
          <div className="relative flex flex-col items-center">
            
            {/* Speech Bubble */}
            <div className="h-20 flex items-end justify-center w-full px-4 mb-3">
              <AnimatePresence mode="wait">
                {catMessage ? (
                  <motion.div
                    key={catMessage}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.9 }}
                    className="relative bg-cream-card dark:bg-creepy-card border-2 border-rose/40 dark:border-creepy-cardborder px-4 py-2.5 rounded-2xl shadow-scrapbook text-center max-w-xs"
                  >
                    <p className="font-handwriting text-xl text-warmbrown-dark dark:text-creepy-text">
                      "{catMessage}"
                    </p>
                    {/* Tail */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-cream-card dark:bg-creepy-card border-r-2 border-b-2 border-rose/40 dark:border-creepy-cardborder transform rotate-45" />
                  </motion.div>
                ) : (
                  <span className="text-xs font-handwriting text-warmbrown-light dark:text-creepy-muted">
                    tap Mochi for a purr...
                  </span>
                )}
              </AnimatePresence>
            </div>

            {/* Mascot Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              onClick={handleCatClick}
              className="cursor-pointer group relative"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCatClick(); }}
              aria-label="Click Mochi the Cat"
            >
              {/* Polaroid Frame */}
              <div className="bg-cream-card dark:bg-creepy-card p-3 pb-5 rounded-2xl shadow-scrapbook border border-cream-border dark:border-creepy-cardborder transform rotate-[-2deg] group-hover:rotate-0 transition-transform">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape washi-tape-butter" />
                <div className="w-48 h-48 rounded-xl overflow-hidden bg-cream-border/20">
                  <img
                    src={mascots.cat.image}
                    alt="Mochi the Scottish fold cat"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.src = mascots.cat.fallbackImage; }}
                  />
                </div>
                <div className="mt-2 text-center">
                  <h4 className="font-serif font-bold text-sm text-cocoa dark:text-creepy-text">
                    {mascots.cat.name} 🐾
                  </h4>
                  <p className="font-handwriting text-xs text-rose-dark dark:text-creepy-lavender">
                    Chief Cozy Officer
                  </p>
                </div>
              </div>

              {/* Floating cute sparkle */}
              <div className="absolute -top-1 -right-1 text-rose opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-5 h-5 animate-spin-slow" />
              </div>
            </motion.div>
          </div>

          {/* SNAKE MASCOT */}
          <div className="relative flex flex-col items-center">
            
            {/* Speech Bubble */}
            <div className="h-20 flex items-end justify-center w-full px-4 mb-3">
              <AnimatePresence mode="wait">
                {snakeMessage ? (
                  <motion.div
                    key={snakeMessage}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.9 }}
                    className="relative bg-cream-card dark:bg-creepy-card border-2 border-matcha-border dark:border-creepy-cardborder px-4 py-2.5 rounded-2xl shadow-scrapbook text-center max-w-xs"
                  >
                    <p className="font-handwriting text-xl text-warmbrown-dark dark:text-creepy-text">
                      "{snakeMessage}"
                    </p>
                    {/* Tail */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-cream-card dark:bg-creepy-card border-r-2 border-b-2 border-matcha-border dark:border-creepy-cardborder transform rotate-45" />
                  </motion.div>
                ) : (
                  <span className="text-xs font-handwriting text-warmbrown-light dark:text-creepy-muted">
                    tap Bonnet for a sssssmile...
                  </span>
                )}
              </AnimatePresence>
            </div>

            {/* Mascot Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              onClick={handleSnakeClick}
              className="cursor-pointer group relative"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSnakeClick(); }}
              aria-label="Click Bonnet the Snake"
            >
              {/* Polaroid Frame */}
              <div className="bg-cream-card dark:bg-creepy-card p-3 pb-5 rounded-2xl shadow-scrapbook border border-cream-border dark:border-creepy-cardborder transform rotate-[2deg] group-hover:rotate-0 transition-transform">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape washi-tape-matcha" />
                <div className="w-48 h-48 rounded-xl overflow-hidden bg-cream-border/20">
                  <img
                    src={mascots.snake.image}
                    alt="Bonnet the white snake wearing a bunny bonnet"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.src = mascots.snake.fallbackImage; }}
                  />
                </div>
                <div className="mt-2 text-center">
                  <h4 className="font-serif font-bold text-sm text-cocoa dark:text-creepy-text">
                    {mascots.snake.name} 🐰
                  </h4>
                  <p className="font-handwriting text-xs text-rose-dark dark:text-creepy-lavender">
                    Bunny Bonnet Enthusiast
                  </p>
                </div>
              </div>

              {/* Floating cute sparkle */}
              <div className="absolute -top-1 -right-1 text-matcha-border opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-5 h-5 fill-matcha-border text-matcha-border" />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
