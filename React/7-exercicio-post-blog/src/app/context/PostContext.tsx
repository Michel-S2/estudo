'use client'

import { createContext, ReactNode, useState } from "react";


type Post = {
    id: number;
    title: string;
    message: string;
}

type PostContextType = {
    posts: Post[];
    addPost: (title: string, message: string) => void;
}

export const PostContext = createContext<PostContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
}

export const PostContextProvider = ({children}: Props) => {
    const [posts, setPosts] = useState<Post[]>([])

    const addPost = (title: string, message: string) => {
        const newPost: Post = {id: Date.now(), title, message};
        setPosts([...posts, newPost]);
    }

    return (
        <PostContext.Provider value={{posts, addPost}}>
            {children}
        </PostContext.Provider>
    )
}