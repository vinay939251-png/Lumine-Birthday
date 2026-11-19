import { useState, useEffect } from 'react';

export function useTheme() {
  const [isCreepy, setIsCreepy] = useState(() => {
    try {
      const saved = localStorage.getItem('lumine_theme');
      return saved === 'creepy';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isCreepy) {
      root.classList.add('dark');
      try {
        localStorage.setItem('lumine_theme', 'creepy');
      } catch (e) {
        // ignore storage errors
      }
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('lumine_theme', 'sweet');
      } catch (e) {
        // ignore storage errors
      }
    }
  }, [isCreepy]);

  const toggleTheme = () => setIsCreepy(prev => !prev);

  return { isCreepy, toggleTheme };
}
