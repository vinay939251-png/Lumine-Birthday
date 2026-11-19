import React from 'react';
import { 
  PenTool, 
  Paintbrush, 
  Eraser, 
  Stamp, 
  Undo2, 
  Trash2, 
  Download, 
  Check, 
  Heart, 
  Star, 
  Flower2 
} from 'lucide-react';
import { useCanvas } from '../hooks/useCanvas';
import { birthdayContent } from '../data/birthdayContent';

const PALETTE = [
  { name: 'Dark Cocoa', value: '#453B3A' },
  { name: 'Warm Brown', value: '#79645F' },
  { name: 'Blush Pink', value: '#E8A3B3' },
  { name: 'Soft Rose', value: '#D99EAF' },
  { name: 'Matcha Green', value: '#9BB88B' },
  { name: 'Baby Blue', value: '#8ABBE3' },
  { name: 'Lavender', value: '#B39BC8' },
  { name: 'Butter Yellow', value: '#F0D47C' },
];

const STAMPS = [
  { id: 'cat', label: 'Cat', icon: '🐱' },
  { id: 'snake', label: 'Snake', icon: '🐍' },
  { id: 'bow', label: 'Bow', icon: '🎀' },
  { id: 'heart', label: 'Heart', icon: '💖' },
  { id: 'star', label: 'Star', icon: '⭐' },
  { id: 'flower', label: 'Flower', icon: '🌸' },
];

export function SketchStudio({ onPlayClick }) {
  const { studio } = birthdayContent;
  const {
    canvasRef,
    tool,
    setTool,
    activeStamp,
    setActiveStamp,
    color,
    setColor,
    brushSize,
    setBrushSize,
    startDrawing,
    draw,
    stopDrawing,
    undo,
    clearCanvas,
    downloadArt,
    hasHistory,
    downloadSuccess,
  } = useCanvas();

  const handleToolSelect = (selectedTool) => {
    if (onPlayClick) onPlayClick();
    setTool(selectedTool);
  };

  const handleStampSelect = (stampId) => {
    if (onPlayClick) onPlayClick();
    setTool('stamp');
    setActiveStamp(stampId);
  };

  return (
    <section id="studio" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-handwriting text-2xl text-rose-dark dark:text-creepy-lavender">
            handcrafted sketchpad ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cocoa dark:text-creepy-text mt-1 mb-3">
            {studio.heading}
          </h2>
          <p className="text-warmbrown dark:text-creepy-muted text-base sm:text-lg max-w-lg mx-auto">
            {studio.subheading}
          </p>
        </div>

        {/* Sketchbook Container */}
        <div className="relative bg-cream-card dark:bg-creepy-card rounded-3xl p-5 sm:p-8 shadow-scrapbook border border-cream-border dark:border-creepy-cardborder">
          
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-16 washi-tape washi-tape-matcha rotate-[-3deg]" />
          <div className="absolute -top-3 right-16 washi-tape washi-tape-butter rotate-[2deg]" />

          {/* Studio Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-cream-border dark:border-creepy-cardborder mb-6">
            
            {/* Tools Selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-cream dark:bg-creepy-surface border border-cream-border dark:border-creepy-cardborder">
              <button
                onClick={() => handleToolSelect('pencil')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  tool === 'pencil' 
                    ? 'bg-rose text-white shadow-xs' 
                    : 'text-warmbrown dark:text-creepy-muted hover:text-cocoa dark:hover:text-creepy-text'
                }`}
                title="Pencil"
                aria-label="Pencil tool"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Pencil</span>
              </button>

              <button
                onClick={() => handleToolSelect('brush')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  tool === 'brush' 
                    ? 'bg-rose text-white shadow-xs' 
                    : 'text-warmbrown dark:text-creepy-muted hover:text-cocoa dark:hover:text-creepy-text'
                }`}
                title="Soft Brush"
                aria-label="Soft brush tool"
              >
                <Paintbrush className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Brush</span>
              </button>

              <button
                onClick={() => handleToolSelect('eraser')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  tool === 'eraser' 
                    ? 'bg-rose text-white shadow-xs' 
                    : 'text-warmbrown dark:text-creepy-muted hover:text-cocoa dark:hover:text-creepy-text'
                }`}
                title="Eraser"
                aria-label="Eraser tool"
              >
                <Eraser className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Eraser</span>
              </button>
            </div>

            {/* Brush Size Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-handwriting text-warmbrown dark:text-creepy-muted">Size:</span>
              <div className="flex items-center gap-1.5">
                {[2, 5, 10, 18].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      if (onPlayClick) onPlayClick();
                      setBrushSize(s);
                    }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                      brushSize === s
                        ? 'border-rose bg-blush/60 dark:bg-creepy-mauve text-rose-dark dark:text-creepy-rose'
                        : 'border-cream-border dark:border-creepy-cardborder bg-cream dark:bg-creepy-surface text-warmbrown dark:text-creepy-muted'
                    }`}
                    aria-label={`Brush size ${s}`}
                  >
                    <span 
                      className="rounded-full bg-current" 
                      style={{ width: `${Math.max(3, s * 0.7)}px`, height: `${Math.max(3, s * 0.7)}px` }} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons: Undo, Clear, Save */}
            <div className="flex items-center gap-2">
              <button
                onClick={undo}
                disabled={!hasHistory}
                className="p-2 rounded-xl border border-cream-border dark:border-creepy-cardborder bg-cream dark:bg-creepy-surface text-warmbrown dark:text-creepy-text hover:bg-blush/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                title="Undo last stroke"
                aria-label="Undo"
              >
                <Undo2 className="w-4 h-4" />
              </button>

              <button
                onClick={clearCanvas}
                className="p-2 rounded-xl border border-cream-border dark:border-creepy-cardborder bg-cream dark:bg-creepy-surface text-warmbrown dark:text-creepy-text hover:bg-blush/50 transition-colors"
                title="Clear sketchpad"
                aria-label="Clear canvas"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                onClick={downloadArt}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose text-white text-xs font-medium hover:bg-rose-dark dark:bg-creepy-rose dark:hover:bg-creepy-wine transition-colors shadow-xs"
                title="Download Lumine's masterpiece"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Art</span>
              </button>
            </div>
          </div>

          {/* Color Palette & Stamp Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            
            {/* Color Swatches */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-handwriting text-warmbrown dark:text-creepy-muted mr-1">Palette:</span>
              {PALETTE.map((p) => (
                <button
                  key={p.value}
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    setColor(p.value);
                    if (tool === 'eraser') setTool('brush');
                  }}
                  className={`w-6 h-6 rounded-full border-2 transition-transform transform ${
                    color === p.value ? 'scale-125 border-rose dark:border-white shadow-xs' : 'border-white dark:border-creepy-cardborder hover:scale-110'
                  }`}
                  style={{ backgroundColor: p.value }}
                  title={p.name}
                  aria-label={`Color ${p.name}`}
                />
              ))}

              {/* Custom Color Input */}
              <label 
                className="relative cursor-pointer w-6 h-6 rounded-full overflow-hidden border-2 border-white dark:border-creepy-cardborder shadow-xs hover:scale-110 transition-transform"
                title="Custom color picker"
              >
                <input
                  type="color"
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                    if (tool === 'eraser') setTool('brush');
                  }}
                  className="absolute -top-2 -left-2 w-10 h-10 cursor-pointer opacity-0"
                  aria-label="Custom color picker"
                />
                <span className="w-full h-full block bg-gradient-to-tr from-pink-400 via-amber-300 to-sky-400" />
              </label>
            </div>

            {/* Stamps Bar */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-handwriting text-warmbrown dark:text-creepy-muted mr-1">Stickers:</span>
              {STAMPS.map((stamp) => (
                <button
                  key={stamp.id}
                  onClick={() => handleStampSelect(stamp.id)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-medium border flex items-center gap-1 transition-all ${
                    tool === 'stamp' && activeStamp === stamp.id
                      ? 'bg-blush dark:bg-creepy-mauve border-rose text-cocoa dark:text-white shadow-xs scale-105'
                      : 'bg-cream dark:bg-creepy-surface border-cream-border dark:border-creepy-cardborder text-warmbrown dark:text-creepy-text hover:bg-blush/40'
                  }`}
                  aria-label={`Stamp ${stamp.label}`}
                >
                  <span>{stamp.icon}</span>
                  <span className="text-[11px] hidden sm:inline">{stamp.label}</span>
                </button>
              ))}
            </div>

          </div>

          {/* HTML5 Canvas Drawing Area */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-cream-border dark:border-creepy-cardborder bg-[#FFFDF9] shadow-inner">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              style={{ touchAction: 'none' }}
              className="w-full h-[360px] sm:h-[440px] cursor-crosshair block"
              aria-label="Interactive drawing canvas"
            />

            {/* Subtle watermark in bottom right corner */}
            <div className="absolute bottom-3 right-4 pointer-events-none select-none font-handwriting text-lg text-warmbrown/40 dark:text-creepy-muted/40">
              sketchpad by Lumine ♡
            </div>
          </div>

          {/* Download feedback toast */}
          {downloadSuccess && (
            <div className="mt-4 p-3 rounded-xl bg-matcha/50 dark:bg-creepy-mauve/70 border border-matcha-border dark:border-creepy-cardborder flex items-center justify-center gap-2 text-warmbrown-dark dark:text-creepy-text text-sm font-medium animate-bounce">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{studio.downloadSuccess}</span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
