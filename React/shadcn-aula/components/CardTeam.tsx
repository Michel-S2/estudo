import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AvatarComponent } from "./Avatar"
import { member } from "@/app/data/member"

export const CardTeam = () => {
    return (
        <div>
            <Card className="w-[410px]">
                <CardHeader>
                    <CardTitle>Membros do Time</CardTitle>
                    <CardDescription className="">Edite os membros do seu time</CardDescription>
                    
                </CardHeader>
                <CardContent>
                    {member.map(item => (
                        <AvatarComponent key={item.id} data={item}/>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}