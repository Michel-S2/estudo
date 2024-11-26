'use client'

import { createContext, ReactNode, useState } from "react";
import { Post } from "../types/Post";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    removePost: (id: number) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

type Props = {
    children: ReactNode;
}

export const PostContextProvider = ({children}: Props) => {
    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = (title: string, body: string) => {

        setPosts([...posts, {id: posts.length, title, body}])

    }

    const removePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <PostContext.Provider value={{posts, addPost, removePost}}>
            {children}
        </PostContext.Provider>
    )
}