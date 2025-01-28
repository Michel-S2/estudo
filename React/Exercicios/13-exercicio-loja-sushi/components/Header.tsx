"use client"
import { DarkTheme } from "./DarkTheme"
import { Logo } from "./Logo"
import {  CartSidebar } from "@/components/cart/Sidebar"

export const Header = () => {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <Logo/>
                <DarkTheme/>
            </div>
            <div>
                <CartSidebar/>
            </div>
        </header>
    )
}