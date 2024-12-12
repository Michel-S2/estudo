import { useTheme } from "./ThemeContext"

export const ThemeSwitch = () => {
    const themeCtx = useTheme();

    const handleToggle = () => {
        if(themeCtx) {
            themeCtx.setTheme(themeCtx.theme === 'light' ? 'dark' : 'light');
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 p-3 text-center cursor-pointer"
             onClick={handleToggle}>
            {themeCtx?.theme === 'light' ? 'Mudar para dark' : 'Mudar para Light'}
        </div>
    )
}