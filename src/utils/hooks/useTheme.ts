import { useEffect, useState } from 'react';

export const useTheme = () => {
  const initialTheme = localStorage.getItem('theme') ?? 'light';
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('theme-transition');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    setTimeout(() => {
      html.classList.remove('theme-transition');
    }, 300);
  }, [theme]);

  return { theme, setTheme };
};
