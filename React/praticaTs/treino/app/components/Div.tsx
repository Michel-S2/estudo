import { ReactNode } from "react"
import { useTema } from "../context/TemaContext"


export const Div = ({ children }: {children: ReactNode}) => {
    const temaCtx = useTema();

    return(
        <div className={`w-full h-screen container-inicial ${temaCtx?.tema === 'light' ? 'light' : 'dark'}`}>
            <div className="container mx-auto py-5">{children}</div>
        </div>
    )
}