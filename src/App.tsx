import ThemeToggle from '@/components/theme-toggle';
import { useThemeInitializer } from '@/utils/hooks/useThemeInitializer.ts';

function App() {
  useThemeInitializer();

  return (
    <div>
      <div className="text-3xl font-medium italic p-20 ">
        <div className="text-text-primary">React</div>
        <div className="text-text-secondary_on-brand">Vite</div>
        <div className="text-text-success-primary">Tailwind</div>
      </div>
      <ThemeToggle />
    </div>
  );
}
export default App;
