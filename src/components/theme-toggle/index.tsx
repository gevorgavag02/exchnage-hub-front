import { memo } from 'react';
import { useTheme } from '@/utils/hooks/useTheme.ts';

export const ThemeToggle = memo(() => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌙' : '☀️'} {/*todo*/}
    </button>
  );
});

export default ThemeToggle;
