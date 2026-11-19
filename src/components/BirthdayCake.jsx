import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, RefreshCw, Heart } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';

export function BirthdayCake({ playWishChime, playExtinguish, playPaperClick }) {
  const { cake } = birthdayContent;

  // 5 cute interactive candles
  const [candles, setCandles] = useState([
    { id: 1, lit: true, smoking: false, color: '#D99EAF' },
    { id: 2, lit: true, smoking: false, color: '#C6D6BA' },
    { id: 3, lit: true, smoking: false, color: '#F8EAC2' },
    { id: 4, lit: true, smoking: false, color: '#DCEAF5' },
    { id: 5, lit: true, smoking: false, color: '#D99EAF' },
  ]);

  const [allExtinguished, setAllExtinguished] = useState(false);

  // Extinguish a single candle flame
  const handleExtinguish = (id) => {
    setCandles((prev) =>
      prev.map((c) => {
        if (c.id === id && c.lit) {
          if (playExtinguish) playExtinguish();
          return { ...c, lit: false, smoking: true };
        }
        return c;
      })
    );

    // Stop smoke after 1.5 seconds
    setTimeout(() => {
      setCandles((prev) =>
        prev.map((c) => (c.id === id ? { ...c, smoking: false } : c))
      );
    }, 1500);
  };

  // Check if all candles have been blown out
  useEffect(() => {
    const remaining = candles.filter((c) => c.lit).length;
    if (remaining === 0 && !allExtinguished) {
      setAllExtinguished(true);
      
      // Trigger music-box celebration chime
      if (playWishChime) playWishChime();

      // Trigger pastel celebratory confetti
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#F5DDE3', '#DDE8D4', '#DCEAF5', '#F8EAC2', '#D99EAF'],
        disableForReducedMotion: true,
      });

      // Secondary gentle burst for depth
      setTimeout(() => {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 60,
          origin: { x: 0.25, y: 0.65 },
          colors: ['#F5DDE3', '#D99EAF', '#F8EAC2'],
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 60,
          origin: { x: 0.75, y: 0.65 },
          colors: ['#DDE8D4', '#DCEAF5', '#D99EAF'],
        });
      }, 350);
    }
  }, [candles, allExtinguished, playWishChime]);

  // Relight all candles
  const handleRelight = () => {
    if (playPaperClick) playPaperClick();
    setCandles((prev) => prev.map((c) => ({ ...c, lit: true, smoking: false })));
    setAllExtinguished(false);
  };

  return (
    <section id="cake" className="pt-2 pb-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading & Scrapbook Note */}
        <div className="text-center mb-10">
          <span className="font-handwriting text-2xl text-rose-dark dark:text-creepy-lavender">
            a sweet tradition ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cocoa dark:text-creepy-text mt-1 mb-3">
            {cake.heading}
          </h2>
          <p className="text-warmbrown dark:text-creepy-muted text-base sm:text-lg max-w-md mx-auto">
            {cake.subheading}
          </p>
          <p className="font-handwriting text-lg text-warmbrown-light dark:text-creepy-muted mt-2">
            {!allExtinguished ? cake.instruction : "All candles are blown out! ✨"}
          </p>
        </div>

        {/* Cake Composition Card */}
        <div className="relative max-w-xl mx-auto bg-cream-card dark:bg-creepy-card rounded-3xl p-6 sm:p-8 shadow-scrapbook border border-cream-border dark:border-creepy-cardborder">
          
          {/* Top washi tape */}
          <div className="absolute -top-3 left-1/3 washi-tape washi-tape-babyblue rotate-[-2deg]" />
          
          {/* Interactive Birthday Candles Rack */}
          <div className="flex justify-center items-end gap-5 sm:gap-7 mb-4 h-28 sm:h-32">
            {candles.map((candle, idx) => (
              <div 
                key={candle.id}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
                onClick={() => candle.lit && handleExtinguish(candle.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    if (candle.lit) handleExtinguish(candle.id);
                  }
                }}
                aria-label={`Birthday candle ${idx + 1}, ${candle.lit ? 'lit, click to blow out' : 'blown out'}`}
              >
                {/* Flame Area */}
                <div className="h-12 w-6 flex items-center justify-center relative">
                  {candle.lit ? (
                    <div className="relative flex flex-col items-center">
                      {/* Glow halo */}
                      <div className="absolute w-8 h-8 rounded-full bg-butter/50 dark:bg-butter/30 blur-sm animate-pulse" />
                      {/* Flickering flame body */}
                      <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-orange-400 via-amber-300 to-yellow-100 shadow-sm animate-flame group-hover:scale-110 transition-transform" />
                    </div>
                  ) : candle.smoking ? (
                    <div className="w-2.5 h-5 bg-warmbrown/30 dark:bg-creepy-muted/40 rounded-full blur-xs animate-smoke" />
                  ) : (
                    /* Extinguished charred wick */
                    <div className="w-0.5 h-3 bg-warmbrown-dark dark:bg-creepy-muted rounded-t" />
                  )}
                </div>

                {/* Candle Stick */}
                <div 
                  className="w-3.5 sm:w-4 rounded-t-sm shadow-inner transition-transform group-hover:scale-[1.02]"
                  style={{ 
                    height: `${48 + (idx % 3) * 8}px`,
                    backgroundColor: candle.color,
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 8px)'
                  }}
                />
              </div>
            ))}
          </div>

          {/* The Cat Cake Image Frame */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-cream-border/60 dark:border-creepy-cardborder shadow-inner bg-cream/40 dark:bg-creepy-surface">
            <img 
              src={cake.cakeImage} 
              alt="Handcrafted cat-shaped birthday cake with strawberries"
              className="w-full h-72 sm:h-84 object-cover object-center"
              loading="lazy"
            />
            {/* Small corner label */}
            <div className="absolute bottom-3 left-3 bg-cream-card/90 dark:bg-creepy-card/90 backdrop-blur-xs px-3 py-1 rounded-full border border-cream-border/50 text-xs font-handwriting text-warmbrown dark:text-creepy-text">
              fresh strawberries & sweet cream ♡
            </div>
          </div>

          {/* Wish Granted Celebration Banner */}
          <AnimatePresence>
            {allExtinguished && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-6 p-4 sm:p-5 rounded-2xl bg-blush/40 dark:bg-creepy-mauve/40 border border-rose/30 text-center"
              >
                <div className="flex items-center justify-center gap-2 text-rose-dark dark:text-creepy-rose font-serif font-semibold text-lg sm:text-xl">
                  <Sparkles className="w-5 h-5 text-rose animate-spin-slow" />
                  <span>{cake.wishGranted}</span>
                  <Heart className="w-5 h-5 fill-rose text-rose" />
                </div>
                
                {/* Special Wish Promise Token */}
                <div className="my-4 p-5 rounded-2xl bg-cream-card/95 dark:bg-creepy-surface/95 border-2 border-dashed border-rose/50 dark:border-creepy-rose/50 shadow-sm max-w-md mx-auto">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-rose-dark dark:text-creepy-lavender block mb-1">
                    ✦ A Special Birthday Wish Promise from Vinay ✦
                  </span>
                  <p className="font-handwriting text-2xl sm:text-3xl font-bold text-cocoa dark:text-creepy-text leading-snug">
                    "{cake.promise}"
                  </p>
                  <span className="text-xs font-serif text-warmbrown dark:text-creepy-muted block mt-1.5">
                    Valid anytime, no rules, no expiration date ♡
                  </span>
                </div>

                <p className="text-xs text-warmbrown dark:text-creepy-muted font-sans mt-1">
                  Keep that wish close to your heart today.
                </p>

                <button
                  onClick={handleRelight}
                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-cream-card dark:bg-creepy-card text-warmbrown dark:text-creepy-text border border-cream-border dark:border-creepy-cardborder hover:bg-cream dark:hover:bg-creepy-surface shadow-xs transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{cake.relightButton}</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
