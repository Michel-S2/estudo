import { useContext } from "react"
import { PostContext } from "../context/PostContext"

export const Footer = () => {

    const postContext = useContext(PostContext);
    

    const { posts } = postContext;

    return (
        <footer>
            <ul>
                {posts.map(post => (
                    <li key={post.id}></li>
                ))}
            </ul>
        </footer>
    )
}