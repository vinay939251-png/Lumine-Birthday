import React from 'react';
import { Heart } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';

export function Footer() {
  const { footer } = birthdayContent;

  return (
    <footer className="py-16 px-4 border-t border-cream-border dark:border-creepy-cardborder relative text-center">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* Scrapbook End Bookmark Stamp */}
        <div className="w-12 h-12 rounded-full bg-blush/60 dark:bg-creepy-mauve flex items-center justify-center text-xl mb-4 shadow-xs">
          🎀
        </div>

        <p className="font-serif font-semibold text-lg text-cocoa dark:text-creepy-text mb-1 flex items-center justify-center gap-1.5">
          <span>{footer.mainText}</span>
          <Heart className="w-4 h-4 fill-rose text-rose inline" />
        </p>

        <p className="font-handwriting text-lg text-warmbrown dark:text-creepy-lavender mb-2">
          {footer.tagline}
        </p>

        <p className="font-sans text-xs text-warmbrown-light dark:text-creepy-muted">
          {footer.subText}
        </p>

        {/* Small cat and clover doodle */}
        <div className="mt-4 flex items-center gap-2 text-sm text-warmbrown-light dark:text-creepy-muted select-none">
          <span>🐾</span>
          <span>🍀</span>
          <span>✨</span>
        </div>

      </div>
    </footer>
  );
}
