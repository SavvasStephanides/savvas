import React from "react"
import "../style/post-list.css"

export default function PostList({posts}){
    return <ul className="post-list">
        {posts.map(post => <li key={post.id}>
            <a href={"/" + post.series.slug + "/" + post.slug}>
                <div className="thumbnail" style={{background: "url('/thumbnails/" + post.meta.thumbnail + "')"}}></div>
                <div className="details">
                    <h3 className="serif-font">{post.meta.title}</h3>
                </div>
                
            </a>
        </li>)}
    </ul>
}