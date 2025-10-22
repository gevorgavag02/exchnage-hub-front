import { useLayoutEffect } from 'react';

export const useThemeInitializer = () => {
  useLayoutEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      const currentTheme = savedTheme ?? 'light';
      document.documentElement.setAttribute('data-theme', currentTheme);
    } catch (error) {
      console.log(error); // todo
    }
  }, []);
};
