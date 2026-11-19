import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useSound } from './hooks/useSound';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { BirthdayHero } from './components/BirthdayHero';
import { BirthdayCake } from './components/BirthdayCake';
import { PinterestBoard } from './components/PinterestBoard';
import { SketchStudio } from './components/SketchStudio';
import { MascotCorner } from './components/MascotCorner';
import { CreepyCuteSection } from './components/CreepyCuteSection';
import { BirthdayLetter } from './components/BirthdayLetter';
import { Footer } from './components/Footer';

export function App() {
  const { isCreepy, toggleTheme } = useTheme();
  const {
    soundEnabled,
    toggleSound,
    playWishChime,
    playExtinguish,
    playPaperClick,
  } = useSound();

  return (
    <div className="min-h-screen bg-cream dark:bg-creepy-bg text-cocoa dark:text-creepy-text selection:bg-blush dark:selection:bg-creepy-mauve transition-colors duration-500 font-sans">
      
      {/* Custom Aesthetic Cursor & Sparkle Trail */}
      <CustomCursor isCreepy={isCreepy} />

      {/* Sticky Handcrafted Navigation */}
      <Navigation
        isCreepy={isCreepy}
        toggleTheme={toggleTheme}
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        onPlayClick={playPaperClick}
      />

      <main>
        {/* Section 01: Hero / Opening */}
        <BirthdayHero />

        {/* Section 02: Birthday Cake with Interactive Candles */}
        <BirthdayCake
          playWishChime={playWishChime}
          playExtinguish={playExtinguish}
          playPaperClick={playPaperClick}
        />

        {/* Section 03: Pinterest Scrapbook Board */}
        <PinterestBoard onPlayClick={playPaperClick} />

        {/* Section 04: HTML5 Canvas Sketchpad Studio */}
        <SketchStudio onPlayClick={playPaperClick} />

        {/* Section 05: Mascot Corner (Mochi & Bonnet) */}
        <MascotCorner onPlayClick={playPaperClick} />

        {/* Section 06: Creepy-Cute Yamikawaii Corner */}
        <CreepyCuteSection
          isCreepy={isCreepy}
          toggleTheme={toggleTheme}
          onPlayClick={playPaperClick}
        />

        {/* Section 07: Unfolding Birthday Letter */}
        <BirthdayLetter onPlayClick={playPaperClick} />
      </main>

      {/* Section 08: Minimal Scrapbook Ending Footer */}
      <Footer />

    </div>
  );
}

export default App;
