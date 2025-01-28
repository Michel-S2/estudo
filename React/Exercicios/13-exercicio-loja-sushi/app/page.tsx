"use client"
import { Button } from "@/components/ui/button";
import { DarkTheme } from "@/components/DarkTheme"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";
import { ProductsTabs } from "@/components/Products/Tabs";
import { TabsSkeleton } from "@/components/Products/Skeleton";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto">
		<Header/>
		<div className="mx-3">
			<TabsSkeleton/>
			<Suspense fallback={<TabsSkeleton/>}>
				<ProductsTabs/>
			</Suspense>
		</div>

		<Footer/>
    </div>
  )
}
