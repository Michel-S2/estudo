'use client'

import { createContext, ReactNode, useState } from "react";
import { Post } from "../types/Post";

type PostContextType = {
    posts: Post[];
}

export const PostContext = createContext<PostContextType | null>(null);

type Props = {
    children: ReactNode;
}

export const PostContextProvider = ({children}: Props) => {
    const [post, setPosts] = useState<Post[]>([])

    return (
        <PostContext.Provider value={{post}}>
            {children}
        </PostContext.Provider>
    )
}