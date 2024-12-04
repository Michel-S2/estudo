import { Children, ReactNode } from "react"
import { IntersectionObserverAnimate } from "./IntersectionObserverAnimate"

type Props = {children: ReactNode};

export const ZoomInComponent = ({children} : Props) => {
    const ref = IntersectionObserverAnimate('zoom-in', 'zoom-in-active')
    return (
        <div ref={ref} className="zoom-in h-screen mt-10 border-2 border-orange-500">
            {children}
        </div>
    )
}