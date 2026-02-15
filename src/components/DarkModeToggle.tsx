import { useTheme } from '../contexts/ThemeContext';

export default function DarkModeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            style={{ height: '20px', width: '20px' }}
        />
    );
}
