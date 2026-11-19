import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sparkles, Eye, Ghost } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';

export function CreepyCuteSection({ isCreepy, toggleTheme, onPlayClick }) {
  const { creepyCute } = birthdayContent;

  const handleToggle = () => {
    if (onPlayClick) onPlayClick();
    toggleTheme();
  };

  return (
    <section id="creepy-cute" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Subtle Scrapbook Card with Yamikawaii styling */}
        <div className={`relative rounded-3xl p-6 sm:p-10 transition-all duration-500 border ${
          isCreepy 
            ? 'bg-creepy-card border-creepy-rose/40 shadow-creepy' 
            : 'bg-cream-card border-cream-border shadow-scrapbook'
        }`}>
          
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape washi-tape-babyblue rotate-[1deg]" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Creepy-Cute Artwork */}
            <div className="md:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-sm border border-cream-border dark:border-creepy-cardborder transform rotate-[-2deg] group-hover:rotate-0 transition-transform">
                <img
                  src={creepyCute.image}
                  alt="Creepy-Cute Yamikawaii style character artwork"
                  className="w-full h-auto rounded-xl object-contain bg-white"
                  loading="lazy"
                />
                <div className="mt-2 text-center">
                  <p className="font-handwriting text-sm text-warmbrown dark:text-creepy-lavender">
                    {creepyCute.caption}
                  </p>
                </div>
              </div>

              {/* Little cute ghost sticker */}
              <div className="absolute -bottom-3 -right-3 text-2xl select-none transform rotate-12">
                👻
              </div>
            </div>

            {/* Right Column: Theme Description and Interactive Switcher */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush/60 dark:bg-creepy-mauve text-rose-dark dark:text-creepy-lavender text-xs font-medium mb-3">
                <Eye className="w-3.5 h-3.5 text-rose dark:text-creepy-rose" />
                <span>yamikawaii corner</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-cocoa dark:text-creepy-text mb-3">
                {creepyCute.heading}
              </h3>

              <p className="text-warmbrown dark:text-creepy-muted text-base leading-relaxed mb-6">
                {creepyCute.subheading}
              </p>

              <div className="p-4 rounded-2xl bg-cream/60 dark:bg-creepy-surface/80 border border-cream-border dark:border-creepy-cardborder mb-6">
                <p className="font-handwriting text-xl text-warmbrown-dark dark:text-creepy-text italic">
                  "{creepyCute.quote}"
                </p>
              </div>

              {/* Mode Toggle Button */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleToggle}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                    isCreepy
                      ? 'bg-rose text-white hover:bg-rose-dark'
                      : 'bg-creepy-card text-creepy-text hover:bg-creepy-surface border border-creepy-cardborder'
                  }`}
                  aria-label="Toggle visual mood"
                >
                  {isCreepy ? (
                    <>
                      <span>🎀</span>
                      <span>Switch back to Sweet Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-creepy-lavender" />
                      <span>Explore Creepy-Cute Mode 👀</span>
                    </>
                  )}
                </button>

                <span className="text-xs font-handwriting text-warmbrown-light dark:text-creepy-muted">
                  changes background, palette & decorations ✦
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
