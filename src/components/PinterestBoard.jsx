import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCw, Sparkles, ExternalLink } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';

export function PinterestBoard({ onPlayClick }) {
  const { pinterest } = birthdayContent;
  const [flippedPins, setFlippedPins] = useState({});
  const [selectedPin, setSelectedPin] = useState(null);

  const toggleFlip = (id, e) => {
    e.stopPropagation();
    if (onPlayClick) onPlayClick();
    setFlippedPins(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openLightbox = (pin) => {
    if (onPlayClick) onPlayClick();
    setSelectedPin(pin);
  };

  const closeLightbox = () => {
    if (onPlayClick) onPlayClick();
    setSelectedPin(null);
  };

  return (
    <section id="board" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative background stamps */}
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-handwriting text-2xl text-rose-dark dark:text-creepy-lavender">
            {pinterest.annotation}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cocoa dark:text-creepy-text mt-1 mb-3">
            {pinterest.heading}
          </h2>
          <p className="font-handwriting text-base sm:text-lg text-warmbrown-light dark:text-creepy-muted">
            {pinterest.instruction}
          </p>
        </div>

        {/* Asymmetrical Masonry Scrapbook Board */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* PIN 1: Tairazuma-1 (Span 6 cols, tilt left) */}
          <div className="md:col-span-6 relative">
            <ScrapbookCard 
              pin={pinterest.pins[0]}
              isFlipped={!!flippedPins[pinterest.pins[0].id]}
              onToggleFlip={(e) => toggleFlip(pinterest.pins[0].id, e)}
              onZoom={() => openLightbox(pinterest.pins[0])}
              tiltClass="-rotate-2 hover:rotate-0"
              tapeColor="blush"
              aspect="aspect-square"
            />
          </div>

          {/* PIN 3: Fashion (Span 6 cols, tall portrait, tilt right) */}
          <div className="md:col-span-6 relative md:mt-10">
            <ScrapbookCard 
              pin={pinterest.pins[2]}
              isFlipped={!!flippedPins[pinterest.pins[2].id]}
              onToggleFlip={(e) => toggleFlip(pinterest.pins[2].id, e)}
              onZoom={() => openLightbox(pinterest.pins[2])}
              tiltClass="rotate-1 hover:rotate-0"
              tapeColor="butter"
              aspect="aspect-[3/4]"
            />
          </div>

          {/* PIN 2: Tairazuma-2 (Span 7 cols, tilt right) */}
          <div className="md:col-span-7 relative md:-mt-8">
            <ScrapbookCard 
              pin={pinterest.pins[1]}
              isFlipped={!!flippedPins[pinterest.pins[1].id]}
              onToggleFlip={(e) => toggleFlip(pinterest.pins[1].id, e)}
              onZoom={() => openLightbox(pinterest.pins[1])}
              tiltClass="rotate-2 hover:rotate-0"
              tapeColor="matcha"
              aspect="aspect-square"
            />
          </div>

          {/* PIN 4: Art piece (Span 5 cols, tilt left) */}
          <div className="md:col-span-5 relative md:mt-4">
            <ScrapbookCard 
              pin={pinterest.pins[3]}
              isFlipped={!!flippedPins[pinterest.pins[3].id]}
              onToggleFlip={(e) => toggleFlip(pinterest.pins[3].id, e)}
              onZoom={() => openLightbox(pinterest.pins[3])}
              tiltClass="-rotate-1 hover:rotate-0"
              tapeColor="babyblue"
              aspect="aspect-[3/4]"
            />
          </div>

        </div>

      </div>

      {/* Lightbox / Expanded Modal View */}
      <AnimatePresence>
        {selectedPin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa/70 dark:bg-black/80 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-cream-card dark:bg-creepy-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-cream-border dark:border-creepy-cardborder relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 rounded-full bg-cream dark:bg-creepy-surface text-warmbrown dark:text-creepy-text hover:bg-blush dark:hover:bg-creepy-mauve transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] overflow-hidden rounded-2xl mb-5 flex items-center justify-center bg-cream/50 dark:bg-creepy-surface">
                <img
                  src={selectedPin.image}
                  alt={selectedPin.alt}
                  className="max-h-[60vh] w-auto object-contain rounded-xl"
                />
              </div>

              <div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blush/60 dark:bg-creepy-mauve text-rose-dark dark:text-creepy-lavender">
                  {selectedPin.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-cocoa dark:text-creepy-text mt-2 mb-1">
                  {selectedPin.title}
                </h3>
                <p className="font-serif italic text-rose-dark dark:text-creepy-rose text-base mb-2">
                  "{selectedPin.caption}"
                </p>
                <div className="p-4 rounded-xl bg-cream/70 dark:bg-creepy-surface/70 border border-cream-border dark:border-creepy-cardborder">
                  <p className="font-handwriting text-xl text-warmbrown-dark dark:text-creepy-text leading-relaxed">
                    {selectedPin.note}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Subcomponent: Individual Scrapbook Card with Front/Back Flip
function ScrapbookCard({ pin, isFlipped, onToggleFlip, onZoom, tiltClass, tapeColor, aspect }) {
  const getTapeClass = () => {
    switch (tapeColor) {
      case 'matcha': return 'washi-tape-matcha';
      case 'butter': return 'washi-tape-butter';
      case 'babyblue': return 'washi-tape-babyblue';
      default: return '';
    }
  };

  return (
    <div 
      className={`group relative bg-cream-card dark:bg-creepy-card rounded-3xl p-4 sm:p-5 shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 border border-cream-border dark:border-creepy-cardborder transform ${tiltClass}`}
    >
      {/* Washi Tape on Top Center */}
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 washi-tape ${getTapeClass()}`} />

      {/* Flip Container */}
      <div className="relative min-h-[340px]">
        {!isFlipped ? (
          /* FRONT: Photo + Caption */
          <div className="flex flex-col h-full">
            <div 
              className={`relative ${aspect} w-full rounded-2xl overflow-hidden bg-cream-border/30 dark:bg-creepy-surface cursor-pointer group`}
              onClick={onZoom}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onZoom(); }}
              aria-label={`Expand image: ${pin.title}`}
            >
              <img
                src={pin.image}
                alt={pin.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  // Fallback for art-piece to tairazuma-3 if needed
                  if (pin.id === 'pin-4') {
                    e.target.src = '/images/tairazuma-3.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-cocoa/0 group-hover:bg-cocoa/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="px-3 py-1.5 rounded-full bg-cream-card/90 dark:bg-creepy-card/90 text-xs font-medium text-warmbrown dark:text-creepy-text backdrop-blur-xs flex items-center gap-1">
                  <ExternalLink className="w-3.5 h-3.5" /> preview
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-rose-dark dark:text-creepy-lavender">
                  {pin.tag}
                </span>
                <h3 className="font-serif font-bold text-lg text-cocoa dark:text-creepy-text mt-0.5">
                  {pin.title}
                </h3>
                <p className="font-handwriting text-xl text-warmbrown dark:text-creepy-muted mt-1">
                  "{pin.caption}"
                </p>
              </div>

              {/* Flip Button */}
              <button
                onClick={onToggleFlip}
                className="shrink-0 p-2 rounded-full bg-blush/50 dark:bg-creepy-mauve text-warmbrown dark:text-creepy-text hover:bg-blush dark:hover:bg-creepy-wine transition-colors"
                title="Turn photo over to read note"
                aria-label="Turn photo over"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* BACK: Handwritten Scrapbook Note */
          <div className="flex flex-col justify-between h-full p-4 rounded-2xl bg-[#FFFBF5] dark:bg-creepy-surface border border-dashed border-rose/40 dark:border-creepy-cardborder min-h-[340px]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-cream-border dark:border-creepy-cardborder">
                <span className="font-serif italic text-xs text-warmbrown-light dark:text-creepy-muted">
                  Scrapbook Note ✦ {pin.title}
                </span>
                <span className="text-sm">🌸</span>
              </div>

              <div className="py-6">
                <p className="font-handwriting text-2xl text-warmbrown-dark dark:text-creepy-text leading-relaxed">
                  {pin.note}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-cream-border dark:border-creepy-cardborder">
              <span className="font-handwriting text-lg text-rose-dark dark:text-creepy-lavender">
                from Vinay's scrapbook ♡
              </span>

              <button
                onClick={onToggleFlip}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blush/60 dark:bg-creepy-mauve text-warmbrown dark:text-creepy-text hover:bg-blush transition-colors"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Flip back</span>
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
