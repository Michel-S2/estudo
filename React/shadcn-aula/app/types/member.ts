import { Role } from "./role";

export type Member = {
    id: number;
    name: string;
    email: string;
    role: Role;
    avatar: string;
}