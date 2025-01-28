import { Skeleton } from "../ui/skeleton"

export const TabsSkeleton = () => {
    return (
        <div>
            <Skeleton className="w-full h-10 rounded-xl"/>

            <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {Array.from({ length: 6 }, (item, index) => (
                    <div key={index}>
                        <Skeleton className="rounded-xl w-full h-32"/>
                        <Skeleton className="rounded-xl mt-2 w-full h-7"/>
                        <Skeleton className="rounded-xl mt-2 w-16 h-5"/>
                        <Skeleton className="rounded-xl mt-2 w-full h-9"/>
                    </div>
                ))}

            </div>

        </div>
    )
}