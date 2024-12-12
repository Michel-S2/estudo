"use client"

import { useTheme } from "./ThemeContext";

type Props = {
    label: string;
    onClick: () => void
}

export const Button = ({label, onClick}: Props) => {
    const themeCtx = useTheme();

    return (
        <button className={`border px-4 py-3 rounded-md
                    ${themeCtx?.theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`} 
                    onClick={onClick}>
            {label}
        </button>
    )
}