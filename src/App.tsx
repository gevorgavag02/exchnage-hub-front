import ThemeToggle from '@/components/theme-toggle';
import { useThemeInitializer } from '@/utils/hooks/useThemeInitializer.ts';

import './App.css';

function App() {
  useThemeInitializer();

  return (
    <div className="container">
      <div className="texts-container">
        <div className="text-alpha-black-30">Alpha</div>
        <div className="text-utility-blue-300">Utility</div>
        <div className="bg-bg-brand-primary">Bg</div>
        <div className="border border-border-secondary">Border</div>
        <div className="bg-fg-error-secondary">Fg</div>
        <div className="text-text-success-primary">Text</div>
      </div>
      <ThemeToggle />
    </div>
  );
}
export default App;
