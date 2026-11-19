import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, ChevronUp } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';

export function BirthdayLetter({ onPlayClick }) {
  const { letter } = birthdayContent;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (onPlayClick) onPlayClick();
    setIsOpen(prev => !prev);
  };

  return (
    <section id="letter" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-handwriting text-2xl text-rose-dark dark:text-creepy-lavender">
            {letter.annotation}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cocoa dark:text-creepy-text mt-1 mb-3">
            {letter.title}
          </h2>
          <p className="font-handwriting text-base sm:text-lg text-warmbrown-light dark:text-creepy-muted">
            sealed with a little ribbon for Lumine ♡
          </p>
        </div>

        {/* Envelope & Letter Interactive Stage */}
        <div className="relative flex flex-col items-center">
          
          {/* Top Washi Tape */}
          <div className="washi-tape washi-tape-babyblue -top-3 left-1/4" />

          {/* Sealed Envelope Graphic Container */}
          <div className="w-full max-w-xl">
            
            {/* The Envelope Shell */}
            <div 
              onClick={toggleOpen}
              className="relative cursor-pointer bg-[#FDF6EE] dark:bg-creepy-card rounded-3xl p-6 sm:p-8 border-2 border-cream-border dark:border-creepy-cardborder shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 overflow-hidden group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') toggleOpen(); }}
              aria-label={isOpen ? "Fold letter back" : "Open birthday letter"}
            >
              {/* Envelope Flap Creases / Decorative Stitches */}
              <div className="absolute inset-0 pointer-events-none opacity-20 border-[8px] border-dashed border-rose/30 rounded-3xl" />

              {/* Envelope Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-cream-border dark:border-creepy-cardborder mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blush/60 dark:bg-creepy-mauve flex items-center justify-center text-rose-dark dark:text-creepy-rose">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-medium text-sm text-warmbrown dark:text-creepy-muted">
                    To: <strong className="text-cocoa dark:text-creepy-text">Lumine</strong>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-handwriting text-rose-dark dark:text-creepy-lavender">
                  <span>Special Delivery</span>
                  <span>💌</span>
                </div>
              </div>

              {/* Envelope Body / Seal */}
              {!isOpen ? (
                <div className="text-center py-8 sm:py-12">
                  {/* Wax Seal / Heart Button */}
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose dark:bg-creepy-rose text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
                      <Heart className="w-8 h-8 fill-white/90" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 text-xs">
                      🎀
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-cocoa dark:text-creepy-text mb-2">
                    {letter.title}
                  </h3>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOpen();
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose text-white text-sm font-medium hover:bg-rose-dark dark:bg-creepy-rose dark:hover:bg-creepy-wine transition-colors shadow-xs"
                  >
                    <span>{letter.openButton}</span>
                  </button>

                  <p className="font-handwriting text-base text-warmbrown-light dark:text-creepy-muted mt-4">
                    (Click anywhere on the envelope to open)
                  </p>
                </div>
              ) : null}

              {/* Unfolded Letter Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative bg-[#FFFDF9] dark:bg-creepy-surface rounded-2xl p-6 sm:p-10 border border-cream-border dark:border-creepy-cardborder shadow-inner"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Top tape inside letter */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape washi-tape-butter" />

                    {/* Letter Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-cream-border/60 dark:border-creepy-cardborder mb-6">
                      <span className="font-handwriting text-xl text-rose-dark dark:text-creepy-rose">
                        Chère Lumine,
                      </span>
                      <span className="text-xs font-serif text-warmbrown-light dark:text-creepy-muted">
                        Birthday Note
                      </span>
                    </div>

                    {/* Actual Letter Text Body */}
                    <div className="prose max-w-none text-warmbrown-dark dark:text-creepy-text font-serif text-base sm:text-lg leading-relaxed whitespace-pre-line py-2">
                      {letter.message}
                    </div>

                    {/* Sign-off & Handcrafted attribution */}
                    <div className="mt-8 pt-6 border-t border-cream-border/60 dark:border-creepy-cardborder flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="font-handwriting text-2xl text-rose-dark dark:text-creepy-rose font-bold">
                          {letter.signOff}
                        </p>
                        <p className="font-handwriting text-base text-warmbrown-light dark:text-creepy-muted mt-0.5">
                          {letter.handwrittenFooter}
                        </p>
                      </div>

                      {/* Fold back button */}
                      <button
                        onClick={toggleOpen}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-cream dark:bg-creepy-card border border-cream-border dark:border-creepy-cardborder text-warmbrown dark:text-creepy-text hover:bg-blush/40 dark:hover:bg-creepy-mauve transition-colors"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                        <span>{letter.closeButton}</span>
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
