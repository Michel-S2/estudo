"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Member } from "@/app/types/member"
import { CardModal } from "./CardModal"
import { useState } from "react"

type Props = {
    data: Member
}

export const AvatarComponent = ({ data }: Props) => {
    const [role, setRole] = useState(data.role)
    return (
        <div className="flex items-center gap-5">
            <div className="">
                <Avatar>
                    <AvatarImage src={data.avatar} className="size-14 mt-4 rounded-full" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex-1 overflow-x-hidden">
                <p className="font-bold truncate">{data.name}</p>
                <p className="truncate text-muted-foreground">{data.email}</p>
            </div>
            <div className="">
                <CardModal value={role} setValue={setRole}/>
            </div>
        </div>
    )
}