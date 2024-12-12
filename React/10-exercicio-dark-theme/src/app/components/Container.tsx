"use client"
import { ReactNode } from "react"
import { useTheme } from "../context/ThemeContext";

type Props = {
    children: ReactNode;

}

export const Container = ({children}: Props) => {
    const themeCtx = useTheme();

    return(
        <div className={`w-full h-screen ${themeCtx?.theme === 'light' ? 'bg-slate-50 text-black' : 'bg-black text-white'}`}>
            <div className="container mx-auto">{children}</div>
        </div>
    )
}