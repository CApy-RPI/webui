import { useTheme } from '../contexts/ThemeContext';
import '../css/dark-mode-toggle.css';

export default function DarkModeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="theme-switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="theme-slider" />
        </label>
    );
}
